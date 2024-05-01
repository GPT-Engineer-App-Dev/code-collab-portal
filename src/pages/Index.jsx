import { Box, Flex, Heading, Input, Text, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const developers = [
  { id: 1, name: 'John Doe', location: 'New York', technologies: ['React', 'Node.js'] },
  { id: 2, name: 'Jane Smith', location: 'San Francisco', technologies: ['Angular', 'Python'] },
  { id: 3, name: 'William Johnson', location: 'London', technologies: ['Vue', 'PHP'] },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterBg = useColorModeValue('gray.200', 'gray.600');

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.technologies.join(', ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>Welcome to the Developer Marketplace</Heading>
        <Text fontSize="lg">Find and connect with developers around the world.</Text>
        <Flex mt={4} mb={4}>
          <Input
            placeholder="Search by name, location, or technology"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="lg"
          />
          <Button leftIcon={<FaSearch />} colorScheme="blue" ml={2}>
            Search
          </Button>
        </Flex>
        <VStack spacing={4} align="stretch">
          {filteredDevelopers.map(dev => (
            <Flex key={dev.id} bg={filterBg} p={4} align="center" justify="space-between">
              <Box>
                <Heading size="md">{dev.name}</Heading>
                <Text>{dev.location}</Text>
                <Text>{dev.technologies.join(', ')}</Text>
              </Box>
              <Button as={Link} to={`/developer/${dev.id}`} colorScheme="teal">View Profile</Button>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;