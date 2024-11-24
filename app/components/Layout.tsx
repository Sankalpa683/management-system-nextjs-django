import { Box, Flex, Heading, Button } from "@chakra-ui/react"

export default function Layout() {
  return (
    <Box bg="white" p={4} borderBottom="1px" borderColor="gray.200">
      <Flex justify="space-between" align="center">
        <Heading size="lg">Store Management System</Heading>
        <Button>Logout</Button>
      </Flex>
    </Box>
  )
}

