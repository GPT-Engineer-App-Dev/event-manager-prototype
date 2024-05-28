import { Container, Text, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { useEvents, useVenues, useComments } from "../integrations/supabase/index.js";

const Index = () => {
  const { data: events, isLoading: eventsLoading, isError: eventsError } = useEvents();
  const { data: venues, isLoading: venuesLoading, isError: venuesError } = useVenues();
  

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Event Management App</Text>
        <Text>Welcome to the Event Management App. Start by creating or managing your events.</Text>
        
        {eventsLoading && <Spinner />}
        {eventsError && <Alert status="error"><AlertIcon />Failed to load events</Alert>}
        {events && events.map(event => (
          <VStack key={event.id} spacing={2} align="start">
            <Text fontSize="lg">{event.name}</Text>
            <Text>{event.description}</Text>
            <Text>{event.date}</Text>
            <Text>Venue: {event.venue?.name}</Text>
            <Text>Comments:</Text>
            {event.comments?.map(comment => (
              <Text key={comment.id} pl={4}>- {comment.content}</Text>
            ))}
          </VStack>
        ))}

        {venuesLoading && <Spinner />}
        {venuesError && <Alert status="error"><AlertIcon />Failed to load venues</Alert>}
        {venues && venues.map(venue => (
          <VStack key={venue.id} spacing={2} align="start">
            <Text fontSize="lg">{venue.name}</Text>
            <Text>{venue.location}</Text>
            <Text>{venue.description}</Text>
          </VStack>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;