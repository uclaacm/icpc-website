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
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaDiscord,
} from 'react-icons/fa';
import Container from 'components/container';
<<<<<<< HEAD
import {EventCard, EventDescriptionCard} from 'components/eventcard';
import * as AWS from "aws-sdk";
import { allEvents, pastEvents, upcomingEvents } from 'data';
=======
import EventCard from 'components/eventcard';
// import * as AWS from "aws-sdk";
import { allEvents, pastEvents } from 'data';
>>>>>>> newserver

// const docClient = new AWS.DynamoDB.DocumentClient();

const UpcomingEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  
  useEffect(()=>{
    (async ()=>{
<<<<<<< HEAD
      // let res = await fetch('https://guarded-reaches-79446.herokuapp.com/events');
      // let eventsData = await res.json();
      // eventsData = eventsData.map(event => ({
      //   ...event,
      //   start_time: new Date(event.start_time),
      //   end_time: new Date(event.end_time)
      // }));
      // eventsData.sort((a,b) => {return a.start_time - b.start_time});
      // const firstUpcomingEvent = eventsData.findIndex(event => event.end_time > (new Date()));
      // if (firstUpcomingEvent !== -1) {
      //   setEventsData(eventsData.splice(firstUpcomingEvent, firstUpcomingEvent+6)); 
      // }
      let tempData = upcomingEvents;
      tempData = tempData.map(event => {
        if (event.start_time !== undefined) 
          return {
            ...event,
            start_time: new Date(event.start_time),
            end_time: new Date(event.end_time)
          };
        else
          return event;
      });
      // console.log(tempData);
      // tempData.sort((a,b) => {return a.start_time - b.start_time});
      // const firstUpcomingEvent = tempData.findIndex(event => event.end_time > (new Date()));
      // console.log(firstUpcomingEvent);
      // if (firstUpcomingEvent !== -1) {
        // console.log(tempData.splice(firstUpcomingEvent, firstUpcomingEvent+6));
        // setEventsData(tempData.splice(firstUpcomingEvent, firstUpcomingEvent+6)); 
      // }
      setEventsData(tempData); 
=======
      let res = await fetch('https://clammy-waiting-dragon.glitch.me/events');
      let eventsData = await res.json();
      eventsData = eventsData.map(event => ({
        ...event,
        start_time: new Date(event.start_time),
        end_time: new Date(event.end_time)
      }));
      eventsData.sort((a,b) => {return a.start_time - b.start_time});
      const firstUpcomingEvent = eventsData.findIndex(event => event.end_time > (new Date()));
      if (firstUpcomingEvent !== -1) {
        setEventsData(eventsData.splice(firstUpcomingEvent, firstUpcomingEvent+4)); 
      }
>>>>>>> newserver
      // setEventsData(eventsData.splice(0, 4));
    })()
  }, []);

  function hourToString(hour){
    return ((hour%12) === 0 ? '12' : (hour % 12)) + ((hour < 12) ? ' AM' : ' PM');
  }

  if (eventsData.length === 0) 
    return (<Heading size='lg'>Loading...</Heading>);
  return (
    <Flex wrap="wrap" direction="row" textAlign="center" justify="space-evenly" w={"100%"}>
      {eventsData.map((event, index) => (
        <EventCard key={index} event={event}></EventCard>
      ))}
    </Flex>
  );
};

const AllEvents = () => {
  const eventsData = allEvents;
  return (
    <Flex wrap="wrap" direction="row" textAlign="center" justify="space-evenly" w={"100%"}>
      {eventsData.map((event, index) => (
        <EventDescriptionCard key={index} event={event}></EventDescriptionCard>
      ))}
    </Flex>
  );
  return (
    <Flex wrap="wrap" textAlign="center" justify="space-evenly">
      {eventsData.map((event, index) => (
        <Box key={index} w={["100%", "400px"]} rounded="lg" p={6}>
          <Image src={event.image} rounded="lg" />
            <Stack isInline mt={2} spacing={2}>
            {typeof event.quarter !== "undefined" && 
                  event.quarter.split('/').map((qtr, index) => (
                    <Badge key={index} colorScheme="teal">{qtr}</Badge>
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
                    <Badge key={index} colorScheme="teal">{qtr}</Badge>
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
        {/* <Stack align="center">
          <Heading as="h2" id="past-events" fontSize={['lg', 'xl']}>Past Events and Workshops </Heading>
          <PastEvents />
        </Stack> */}
      </Stack>
    </Container>
  </div>
);

export { UpcomingEvents };
export default EventsContainer;
