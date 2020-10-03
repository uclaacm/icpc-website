import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Badge,
  SimpleGrid,
  Box,
  Link,
} from '@chakra-ui/core';
import {
  FaFacebook,
  FaDiscord,
} from 'react-icons/fa';
import Container from 'components/container';

import { upcomingEvents, allEvents } from 'data';

const UpcomingEvents = () => {
  const eventsData = upcomingEvents;
  return (
    <SimpleGrid minChildWidth="300px" textAlign="center" spacing="16px" justifyContent="center">
      {eventsData.map((event, index) => (
        <Box key={index} rounded="lg" overflow="hidden" p={2}>
          <Image src={event.image} rounded="lg" />
          <Flex align="baseline" mt={2}>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="brand.600"
            >
              {event.date}
              {' '}
              &bull;
              {' '}
              {event.time}
              {' '}
              &bull;
              {' '}
              {event.location}
            </Text>
          </Flex>
          <Heading as="h4" fontSize={['md', 'lg']} mt={2}>{event.name}</Heading>
          <Stack isInline justifyContent="center" my={2}>
            <Link href={event.facebook} isExternal>
              <Box as={FaFacebook} size={6} />
            </Link>
            <Link href={event.discord} isExternal>
              <Box as={FaDiscord} size={6} />
            </Link>
          </Stack>
          <Text>{event.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const AllEvents = () => {
  const eventsData = allEvents;
  return (
    <SimpleGrid minChildWidth="300px" maxChildWidth="300px" textAlign="center" spacing="16px" justifyContent="center">
      {eventsData.map((event, index) => (
        <Box key={index} rounded="lg" overflow="hidden" p={2}>
          <Image src={event.image} rounded="lg" />
          <Flex align="baseline" mt={2}>
            <Badge variantColor="teal">{event.quarter}</Badge>
          </Flex>
          <Heading as="h4" fontSize={['md', 'lg']} mt={2}>{event.name}</Heading>
          <Text>{event.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const EventsContainer = (props) => (
  <div className="events">
    <Helmet>
      <title>Events | ACM ICPC @ UCLA</title>
      <meta name="description" content="Learn more about our current and upcoming events." />
      <meta name="keywords" content="events,acm,icpc,ucla,competitive,programming" />
    </Helmet>
    <Container>
      <Heading as="h1" fontSize={['2xl', '3xl']} textAlign="center" py={4}>Events</Heading>
      <Stack pb={10} spacing={10}>
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}>Upcoming</Heading>
          <UpcomingEvents />
        </Stack>
        <Stack align="center">
          <Heading as="h2" id="all-events" fontSize={['lg', 'xl']}>All Events and Workshops</Heading>
          <AllEvents />
        </Stack>
      </Stack>
    </Container>
  </div>
);

export { UpcomingEvents };
export default EventsContainer;