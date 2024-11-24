'use client';

import React from 'react';
import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  InputGroup,
  Input,
  InputRightElement,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SearchIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

const SuperNavbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="white" boxShadow="sm" p={4} borderBottom="1px solid #E2E8F0" className='z-50 sticky top-0'>
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        flexDirection={isMobile ? 'row' : 'row'}
        gap={4}
      >
        {/* Tabs Section */}
        {!isMobile && (
          <Tabs variant="enclosed" colorScheme="blue" w="full">
            <TabList>
              <Tab fontWeight="medium">Create Shop</Tab>
              <Tab fontWeight="medium">Shop Admin</Tab>
              <Tab fontWeight="medium">Shop Users</Tab>
            </TabList>
          </Tabs>
        )}

        {/* Search Bar and Profile */}
        <Flex
          align="center"
          gap={4}
          direction={isMobile ? 'row' : 'row'}
          w="100%"
          justify={isMobile ? 'center' : 'center'}
        >
          {/* Search Bar */}
          <InputGroup size="md" w="full" maxW={isMobile ? 'none' : '250px'}>
            <Input placeholder="Search Here" borderRadius="md" />
            <InputRightElement>
              <SearchIcon color="gray.500" />
            </InputRightElement>
          </InputGroup>

          {/* Profile Menu */}
          <Menu>
            <MenuButton>
              <Avatar
                size="sm"
                name="Sankalpa Dahal"
                src=""
                borderWidth="2px"
                borderColor="gray.200"
                cursor="pointer"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>


        </Flex>

      </Flex>
    </Box>
  );
};

export default SuperNavbar;
