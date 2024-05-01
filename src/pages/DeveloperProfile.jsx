import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const developers = [
  { id: 1, name: 'John Doe', location: 'New York', technologies: ['React', 'Node.js'], bio: 'Experienced Full Stack Developer.' },
  { id: 2, name: 'Jane Smith', location: 'San Francisco', technologies: ['Angular', 'Python'], bio: 'Frontend Specialist.' },
  { id: 3, name: 'William Johnson', location: 'London', technologies: ['Vue', 'PHP'], bio: 'Backend Expert.' },
];

const DeveloperProfile = () => {
  const { id } = useParams();
  const developer = developers.find(dev => dev.id.toString() === id);

  if (!developer) {
    return <Box p={5}><Text>No developer found.</Text></Box>;
  }

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading>{developer.name}</Heading>
        <Text>{developer.location}</Text>
        <Text>{developer.technologies.join(', ')}</Text>
        <Text>{developer.bio}</Text>
        <Button colorScheme="blue">Message</Button>
      </VStack>
    </Box>
  );
};

export default DeveloperProfile;