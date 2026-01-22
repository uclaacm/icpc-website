import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Badge,
  Box,
} from '@chakra-ui/react';

import Container from 'components/container';
import { EventCard, EventDescriptionCard } from 'components/eventcard';
import { allEvents, pastEvents } from 'data';

/* =========================
   HARD-CODED UPCOMING EVENT
   ========================= */

const hardcodedUpcomingEvents = [
  {
    name: 'Break The Binary',
    description: 'To kick off winter quarter, ICPC is proud to present the 3rd edition of Break the Binary in collaboration with ACM W. Get ready for a Pokémon-themed 🙀🙀🙀  puzzle hunt packed with logic, patterns, and clever problem-solving. Work in teams to tackle a sequence of puzzles inspired by the Pokémon universe — no coding required and beginner-friendly! Furthermore, there will be free food, awesome prizes, and a chance to network with professors!',
    image: '/static/event/btb26.png', // placeholder path
    start_time: new Date('2026-01-24T10:00:00'),
    end_time: new Date('2026-01-24T16:30:00'),
    location: 'De Neve Plaza Room, The Hill',
    quarter: 'Winter 2026',
    discord: 'https://forms.gle/ZT2oqEFrCRqgXQQf8',
  },
];

const UpcomingEvents = () => {
  return (
    <Flex
      wrap="wrap"
      direction="row"
      textAlign="center"
      justify="space-evenly"
      w="100%"
    >
      {hardcodedUpcomingEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </Flex>
  );
};

/* =========================
   EXISTING COMPONENTS
   ========================= */

const AllEvents = () => {
  const eventsData = allEvents;
  return (
    <Flex wrap="wrap" direction="row" textAlign="center" justify="space-evenly" w="100%">
      {eventsData.map((event, index) => (
        <EventDescriptionCard key={index} event={event} />
      ))}
    </Flex>
  );
};

const PastEvents = () => {
  const eventsData = pastEvents;
  return (
    <Flex wrap="wrap" textAlign="center" justify="space-evenly">
      {eventsData.map((event, index) => (
        <Box key={index} w={["100%", "400px"]} rounded="lg" p={6}>
          <Image src={event.image} rounded="lg" />
          <Stack isInline mt={2} spacing={2}>
            {typeof event.quarter !== "undefined" &&
              event.quarter.split('/').map((qtr, idx) => (
                <Badge key={idx} colorScheme="teal">
                  {qtr}
                </Badge>
              ))}
          </Stack>
          <Heading as="h4" fontSize={['md', 'lg']} mt={2}>
            {event.name}
          </Heading>
          <Text>{event.description}</Text>
        </Box>
      ))}
    </Flex>
  );
};

const EventsContainer = () => (
  <div className="events">
    <Helmet>
      <title>Events | ACM ICPC at UCLA</title>
      <meta name="description" content="Learn more about our current and upcoming events." />
      <meta name="keywords" content="events,acm,icpc,ucla,competitive,programming" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Events | ACM ICPC at UCLA" />
      <meta property="og:description" content="Learn more about ACM ICPC's current and upcoming events." />
      <meta property="og:url" content="https://icpc.uclaacm.com/events" />
      <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
      <meta property="og:site_name" content="ACM ICPC at UCLA" />
    </Helmet>

    <Container>
      <Heading as="h1" fontSize={['2xl', '3xl']} textAlign="center" py={4}>
        Events
      </Heading>

      <Stack pb={10} spacing={10}>
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}>
            Upcoming
          </Heading>
          <UpcomingEvents />
        </Stack>

        <Stack align="center">
          <Heading as="h2" id="all-events" fontSize={['lg', 'xl']}>
            All Events and Workshops
          </Heading>
          <AllEvents />
        </Stack>
      </Stack>
    </Container>
  </div>
);

export { UpcomingEvents };
export default EventsContainer;
