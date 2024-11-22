'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Box, Text } from '@chakra-ui/react';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <Box display="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <Box flex="2" ml={{ base: 0, md: '240px' }} p={4} className='mt-14 lg:mt-0'>
        <Text fontSize="2xl" fontWeight="bold" >
          Good Morning, <span className='font-bold text-[#7c35d9]'>Sankalpa Dahal</span>
        </Text>
        <Text>Here are your stats for today <span className='font-bold text-[#744aac]'>Nov 22, 2024</span></Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
