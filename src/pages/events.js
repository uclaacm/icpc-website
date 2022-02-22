import React, { useEffect, useState } from 'react';
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
import * as AWS from "aws-sdk";
import { upcomingEvents, allEvents, pastEvents } from 'data';

const docClient = new AWS.DynamoDB.DocumentClient();

const UpcomingEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  
  useEffect(()=>{
    (async ()=>{
      let res = await fetch('http://ec2-18-237-233-117.us-west-2.compute.amazonaws.com:4000/events');
      let eventsData = await res.json();
      const sortedEventsData = eventsData.map(event => ({
        ...event,
        start_time: new Date(event.start_time),
        end_time: new Date(event.end_time)
      })).sort((a,b) => a.start_time < b.start_time);
      const firstUpcomingEvent = sortedEventsData.findIndex(event => event.start_time > (new Date(2020)));
      setEventsData(sortedEventsData.splice(firstUpcomingEvent, firstUpcomingEvent+4)); 
    })()
  });

  function hourToString(hour){
    return ((hour%12) === 0 ? '12' : (hour % 12)) + ((hour < 12) ? ' AM' : ' PM');
  }
  return (
    <Flex wrap="wrap" textAlign="center" justify="space-evenly">
      {eventsData.map((event, index) => (
        <Box key={index} w={["100%", "400px"]} rounded="lg" p={6}>
          <Image src={event.image} rounded="lg" />
          <Flex align="baseline" mt={2}>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="brand.600"
            >
              {((new Intl.DateTimeFormat('en-US', {weekday: 'short'})).format(event.start_time)).toString()}
              {' '}
              &bull;
              {' '}
              {((new Intl.DateTimeFormat('en-US', {month: 'short'}).format(event.start_time))).toString() + ' ' + event.start_time.getDate()}
              {' '}
              &bull;
              {' '}
              {hourToString(event.start_time.getHours()) + ' - ' + hourToString(event.end_time.getHours())}
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
    </Flex>
  );
};

const AllEvents = () => {
  const eventsData = allEvents;
  return (
    <Flex wrap="wrap" textAlign="center" justify="space-evenly">
      {eventsData.map((event, index) => (
        <Box key={index} w={["100%", "400px"]} rounded="lg" p={6}>
          <Image src={event.image} rounded="lg" />
            <Stack isInline mt={2} spacing={2}>
            {typeof event.quarter !== "undefined" && 
                  event.quarter.split('/').map((qtr, index) => (
                    <Badge key={index} variantColor="teal">{qtr}</Badge>
                  ))}
          </Stack>
          <Heading as="h4" fontSize={['md', 'lg']} mt={2}>{event.name}</Heading>
          <Text>{event.description}</Text>
        </Box>
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
                  event.quarter.split('/').map((qtr, index) => (
                    <Badge key={index} variantColor="teal">{qtr}</Badge>
                  ))}
          </Stack>
          <Heading as="h4" fontSize={['md', 'lg']} mt={2}>{event.name}</Heading>
          <Text>{event.description}</Text>
        </Box>
      ))}
    </Flex>
  );
};

const EventsContainer = (props) => (
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
        <Stack align="center">
          <Heading as="h2" id="past-events" fontSize={['lg', 'xl']}>Past Events and Workshops </Heading>
          <PastEvents />
        </Stack>
      </Stack>
    </Container>
  </div>
);

export { UpcomingEvents };
export default EventsContainer;
