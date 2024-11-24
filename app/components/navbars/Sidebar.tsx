'use client';

import React from 'react';
import {
  Box,
  Stack,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useMediaQuery,
  Avatar,
} from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Menu, Moon, Globe } from 'lucide-react';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)'); // Check if screen size is below 768px

  const menuItems = [
    { label: 'Home', icon: '🏠' },
    { label: 'Store Users', icon: '👥' },
    { label: 'Categories', icon: '📂' },
    { label: 'Products', icon: '📦' },
    { label: 'Customers', icon: '👤' },
    { label: 'Orders', icon: '🛒' },
    { label: 'Issues', icon: '🚨' },
    { label: 'Analytics', icon: '📊' },
  ];

  const customizationItems = [
    { label: 'Plugins', icon: '🔌' },
    { label: 'Appearance', icon: '🎨' },
    { label: 'Store Setting', icon: '⚙️' },
    { label: 'Payment Setting', icon: '💳' },
  ];

  const SidebarContent = () => (
    <Stack spacing={5} p={4} h="100%">
      {/* Admin Profile */}
      <Box display="flex" alignItems="center" mb={6}>
        <Avatar name="Sankalpa Dahal" bg="purple.500" color="white" size="md" />
        <Box ml={3}>
          <Text fontWeight="bold" fontSize="lg">
            Sankalpa Dahal
          </Text>
          <Text fontSize="sm" color="gray.500">
            OWNER
          </Text>
        </Box>
      </Box>
      {/* Main Links */}
      <Box>
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Main Links
        </Text>
        <Stack spacing={2}>
          {menuItems.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={3}
              p={2}
              _hover={{ bg: 'gray.100' }}
              rounded="md"
              cursor="pointer"
            >
              <Text fontSize="lg">{item.icon}</Text>
              <Text>{item.label}</Text>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Customizations */}
      <Box mt={6} className='pb-4 hidden'>
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Customizations
        </Text>
        <Stack spacing={2}>
          {customizationItems.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={3}
              p={2}
              _hover={{ bg: 'gray.100' }}
              rounded="md"
              cursor="pointer"
            >
              <Text fontSize="lg">{item.icon}</Text>
              <Text>{item.label}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );

  return (
    <>
      {isMobile ? (
        <>
          <header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem 1rem',
              borderBottom: '1px solid #e2e8f0',
              position: 'fixed',
              top: 0,
              width: '100%',
              background: 'white',
              zIndex: 1000,
            }}
          >
            {/* Menu Icon */}
            <IconButton
              icon={<Menu />}
              onClick={onOpen}
              aria-label="Open Menu"
            />

            {/* Logo */}
            <Box display="flex" alignItems="center" gap={2}>
              <Text
                fontWeight="bold"
                fontSize="lg"
                color="black"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    background: 'red',
                    borderRadius: '50%',
                    marginRight: '5px',
                  }}
                ></span>
                Lekha
              </Text>
            </Box>

            {/* Utility Icons */}
            <Box display="flex" alignItems="center" gap={3}>
              {/* <Moon size={20} color="purple" /> */}
              <Globe size={20} color="purple" />
              <Avatar name="Sankalpa Dahal" bg="purple.100" color="purple.500" size="sm" />
            </Box>
          </header>

          {/* Drawer Sidebar */}
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>
                <Box display="flex" justifyContent="flex-end">
                  <CloseButton onClick={onClose} cursor="pointer" />
                </Box>
              </DrawerHeader>
              <DrawerBody>
                <SidebarContent />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Box
          as="nav"
          w="240px"
          h="100vh"
          bg="white"
          borderRight="1px solid"
          borderColor="gray.200"
          position="fixed"
          left={0}
          top={0}
        >
          <SidebarContent />
        </Box>
      )}
    </>
  );
};

export default Sidebar;
