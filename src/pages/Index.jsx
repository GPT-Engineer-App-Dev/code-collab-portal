import { Box, Flex, Heading, Text, Input, Button, VStack, HStack, Tag } from '@chakra-ui/react';
import { FaSearch, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const developers = [
  { id: 1, name: 'Alice Johnson', location: 'New York, USA', technologies: ['React', 'Node.js'] },
  { id: 2, name: 'Bob Smith', location: 'Berlin, Germany', technologies: ['Angular', 'Java'] },
  { id: 3, name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: ['Vue', 'Python'] },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">Welcome to the Developer Marketplace</Heading>
        <Text fontSize="lg">Find and connect with top freelance developers!</Text>
        <Flex mt={4}>
          <Input
            placeholder="Search by name, location, or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="lg"
          />
          <Button leftIcon={<FaSearch />} colorScheme="blue" ml={2}>
            Search
          </Button>
        </Flex>
        <VStack spacing={4} mt={4}>
          {filteredDevelopers.map(dev => (
            <Box key={dev.id} p={5} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">{dev.name}</Heading>
              <Text>{dev.location}</Text>
              <HStack spacing={2}>
                {dev.technologies.map(tech => (
                  <Tag key={tech} size="sm" variant="solid" colorScheme="green">{tech}</Tag>
                ))}
              </HStack>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" mt={3} size="sm">
                Message
              </Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;