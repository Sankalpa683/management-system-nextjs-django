'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Flex,
  Button,
  Grid,
  GridItem,
  Text,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  FormLabel,
  Progress, // Import Progress for loading bar
  Spinner, // Import Spinner for loading state
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, ChevronDownIcon } from '@chakra-ui/icons';
import SuperNavbar from '@/app/components/navbars/supersidebar';

const SuperAdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const [shopData, setShopData] = useState({
    ownerName: '',
    shopName: '',
    address: '',
    number: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const isMobile = useBreakpointValue({ base: true, md: false });

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImI2ODUxYmE5LTQ1MzEtNDcwOS04YjQ1LWE3Yzc3OWExOGFkNSJ9.N3yNDtKvI4v1PXeYzcEnIfxfsu8S-LT4r_TItVnwzns";

  // Fetch shops data when the component mounts
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get('https://lekha.pcubedigitech.com/api/superadmin/get-shops', {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        setShops(response.data.shops);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Failed to fetch shops:', error);
        setError('Failed to load shops data. Please try again later.');
        setLoading(false); // Set loading to false in case of error as well
      }
    };

    fetchShops();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleEditOpenModal = () => setEditModalOpen(true);
  const handleEditCloseModal = () => setEditModalOpen(false);

  const handleInputChange = (e) => {
    setShopData({
      ...shopData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true); // Set isSubmitting to true when starting the request
    const requestData = {
      owner_first_name: 'Sankalpa',
      owner_last_name: 'Dahal',
      owner_email: shopData.email,
      owner_password: 'password',
      shop_name: shopData.shopName,
      shop_postal_code: '1234567',
      shop_prefecture: 'Tokyo',
      shop_city: 'Shibuya',
      shop_address: shopData.address,
      shop_phone: shopData.number,
    };

    try {
      const response = await axios.post(
        'https://lekha.pcubedigitech.com/api/superadmin/create-shop',
        requestData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      if (response.data.shop) {
        console.log('Shop created successfully:', response.data.shop);
        setShops((prevShops) => [...prevShops, response.data.shop]); // Add the new shop to the state
        setError(null);
        handleCloseModal();
      } else {
        setError('Error creating shop. Please try again.');
      }
    } catch (error) {
      console.error('Failed to create shop:', error);
      setError('Failed to create shop. Please try again later.');
    } finally {
      setIsSubmitting(false); // Set isSubmitting to false after request completion
    }
  };

  return (
    <Box>
      <SuperNavbar />

      <Box p={6} className='max-w-7xl w-full mx-auto'>
        {/* Show loading bar if loading is true */}
        {loading && (
          <Progress size="xs" isIndeterminate colorScheme="blue" mb={4} />
        )}

        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="xl" fontWeight="bold">
            Available Shops
          </Text>
          <Button leftIcon={<AddIcon />} colorScheme="blue" onClick={handleOpenModal}>
            Create Shop
          </Button>
        </Flex>

        {/* Shop Cards */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {shops.map((shop, index) => (
            <GridItem
              key={index}
              bg="white"
              boxShadow="sm"
              p={4}
              borderRadius="md"
              border="1px solid #E2E8F0"
              position="relative"
            >
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontSize="xl" fontWeight="extrabold" className='capitalize'>
                  {shop.name}
                </Text>
                <Badge colorScheme={shop.status === 'Active' ? 'green' : 'red'}>
                  {shop.status}
                </Badge>
              </Flex>
              <Flex direction="column" gap={2}>
                <Text><b>Admin:</b> {shop.owner.first_name} {shop.owner.last_name}</Text>
                <Text><b>Email:</b> {shop.owner.email}</Text>
                <Text><b>Region:</b> {shop.prefecture}</Text>
                <Text><b>City:</b> {shop.city}</Text>
              </Flex>

              <Menu>
                <MenuButton as={IconButton} icon={<ChevronDownIcon />} position="absolute" top={2} right={2} variant="ghost" />
                <MenuList>
                  <MenuItem icon={<EditIcon />} onClick={handleEditOpenModal}>Edit</MenuItem>
                  <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
                </MenuList>
              </Menu>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* modal for editing shop  */}
      <Modal isOpen={isEditModalOpen} onClose={handleEditCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit This Shop</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="ownerName" isRequired>
              <FormLabel>Owner Name</FormLabel>
              <Input
                name="ownerName"
                value={shopData.ownerName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="shopName" isRequired mt={4}>
              <FormLabel>Shop Name</FormLabel>
              <Input
                name="shopName"
                value={shopData.shopName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="address" isRequired mt={4}>
              <FormLabel>Address</FormLabel>
              <Input
                name="address"
                value={shopData.address}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="number" isRequired mt={4}>
              <FormLabel>Contact Number</FormLabel>
              <Input
                name="number"
                value={shopData.number}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="email" isRequired mt={4}>
              <FormLabel>Email Address</FormLabel>
              <Input
                name="email"
                type="email"
                value={shopData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            {error && (
              <Text color="red.500" mt={4}>
                {error}
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit} isLoading={isSubmitting}>
              {isSubmitting ? <Spinner size="sm" /> : 'Edit Shop'}
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal for Creating Shop */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Shop</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="ownerName" isRequired>
              <FormLabel>Owner Name</FormLabel>
              <Input
                name="ownerName"
                value={shopData.ownerName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="shopName" isRequired mt={4}>
              <FormLabel>Shop Name</FormLabel>
              <Input
                name="shopName"
                value={shopData.shopName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="address" isRequired mt={4}>
              <FormLabel>Address</FormLabel>
              <Input
                name="address"
                value={shopData.address}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="number" isRequired mt={4}>
              <FormLabel>Contact Number</FormLabel>
              <Input
                name="number"
                value={shopData.number}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="email" isRequired mt={4}>
              <FormLabel>Email Address</FormLabel>
              <Input
                name="email"
                type="email"
                value={shopData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            {error && (
              <Text color="red.500" mt={4}>
                {error}
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit} isLoading={isSubmitting}>
              {isSubmitting ? <Spinner size="sm" /> : 'Create Shop'}
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SuperAdminPage;
