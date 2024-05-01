import { Box, Flex, Heading, Text, Input, Button, VStack, HStack, Tag } from '@chakra-ui/react';
import { FaSearch, FaEnvelope } from 'react-icons/fa';

const developers = [
  { id: 1, name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node.js'] },
  { id: 2, name: 'Jane Smith', location: 'London, UK', technologies: ['Angular', 'Java'] },
  { id: 3, name: 'Carlos Diaz', location: 'Madrid, Spain', technologies: ['Vue', 'Python'] },
];

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Heading mb={2}>Welcome to Particles</Heading>
        <Text fontSize="lg">Discover top software talent across the globe.</Text>
      </Flex>
      <Box mb={5}>
        <Input placeholder="Search developers..." size="lg" leftIcon={<FaSearch />} />
      </Box>
      <VStack spacing={4} align="stretch">
        {developers.map(dev => (
          <Box key={dev.id} p={5} shadow="md" borderWidth="1px">
            <HStack justifyContent="space-between">
              <VStack align="start">
                <Text fontWeight="bold">{dev.name}</Text>
                <Text>{dev.location}</Text>
                <HStack>
                  {dev.technologies.map(tech => (
                    <Tag key={tech} size="sm" variant="solid" colorScheme="teal">{tech}</Tag>
                  ))}
                </HStack>
              </VStack>
              <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="solid">
                Message
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;