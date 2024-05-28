import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Event Management App</Text>
        <Text>Welcome to the Event Management App. Start by creating or managing your events.</Text>
      </VStack>
    </Container>
  );
};

export default Index;