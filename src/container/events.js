import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";
import {
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Button,
  Badge,
  SimpleGrid,
  Box,
  Link,
} from '@chakra-ui/core';
import {
  FaFacebook,
  FaDiscord,
  FaMedium,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Container from 'component/container';

const UpcomingEvents = () => {
  const eventsData = [
    {
      image: "/static/regionals/2018.jpeg",
      name: "Intro to CP #1",
      date: "Oct. 05",
      time: "7 pm - 9 pm PT",
      location: "Zoom",
      description: "Dynamic Programming",
      facebook: "https://facebook.com",
      discord: "https://discord.com",
    },
    {
      image: "/static/regionals/2018.jpeg",
      name: "Coding Interview #1",
      date: "Oct. 07",
      time: "6 pm - 8 pm PT",
      location: "Zoom",
      description: "Linked Lists",
      facebook: "https://facebook.com",
      discord: "https://discord.com",
    },
    {
      image: "/static/regionals/2018.jpeg",
      name: "Advanced Training #2",
      date: "Oct. 10",
      time: "7 pm - 9 pm PT",
      location: "Zoom",
      description: "Strings",
      facebook: "https://facebook.com",
      discord: "https://discord.com",
    },
  ];

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
              color="brand.800"
            >
              {event.date} &bull; {event.time} &bull; {event.location}
            </Text>
          </Flex>
          <Heading as="h4" fontSize={["md", "lg"]} mt={2}>{event.name}</Heading>
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
}

const AllEvents = () => {
  const eventsData = [
    {
      image: "/static/regionals/2018.jpeg",
      name: "Intro to CP",
      quarter: "Fall 2020",
      description: "From climbing coding leaderboards to competing in ICPC regionals to constructing clever algorithms with clever friends, the Competitive Programming journey starts here. Write your first contest solution and learn what it takes to start solving challenging and often beautiful algorithms problems!",
    },
    {
      image: "/static/regionals/2018.jpeg",
      name: "Coding Interview Crash Course (Interview Track)",
      quarter: "Fall 2020",
      description: "Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!",
    },
    {
      image: "/static/regionals/2018.jpeg",
      name: "Advaned Training",
      quarter: "Fall 2020",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
  ];

  return (
    <SimpleGrid minChildWidth="300px" maxChildWidth="300px" textAlign="center" spacing="16px" justifyContent="center">
      {eventsData.map((event, index) => (
        <Box key={index}  rounded="lg" overflow="hidden" p={2}>
          <Image src={event.image} rounded="lg" />
          <Flex align="baseline" mt={2}>
            <Badge variantColor="teal">{event.quarter}</Badge>
          </Flex>
          <Heading as="h4" fontSize={["md", "lg"]} mt={2}>{event.name}</Heading>
          <Text>{event.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

const EventsContainer = (props) => {
  return (
    <div className="events">
      <Helmet>
        <title>Events | ACM ICPC @ UCLA</title>
        <meta name="description" content="Learn more about our current and upcoming events." />
        <meta name="keywords" content="events,acm,icpc,ucla,competitive,programming" />
      </Helmet>
      <Container>
        <Heading as="h1" fontSize={["2xl", "3xl"]} textAlign="center" py={4}>Events</Heading>
        <Stack pb={10} spacing={10}>
          <Stack align="center">
            <Heading as="h2" fontSize={["lg", "xl"]}>Upcoming</Heading>
            <UpcomingEvents />
          </Stack>
          <Stack align="center">
            <Heading as="h2" id="all-events" fontSize={["lg", "xl"]}>All Events and Workshops</Heading>
            <AllEvents />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default EventsContainer;
export { UpcomingEvents };

