import React, { useMemo, Component } from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
import {
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Button,
  Box,
  Divider,
  SimpleGrid,
  useToast,
} from '@chakra-ui/core';
import Container from 'component/container'

const AllMembers = () => {
  const membersData = [
    {
      image: "/static/member/placeholder.png",
      name: "Nikil Selvam",
      position: "President",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
    {
      image: "/static/member/placeholder.png",
      name: "Coding Interview",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
    {
      image: "/static/member/placeholder.png",
      name: "Advaned Training",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
    {
      image: "/static/member/placeholder.png",
      name: "Advaned Training",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
    {
      image: "/static/member/placeholder.png",
      name: "Advaned Training",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
    {
      image: "/static/member/placeholder.png",
      name: "Advaned Training",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
    {
      image: "/static/member/placeholder.png",
      name: "Advaned Training",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
    {
      image: "/static/member/placeholder.png",
      name: "Advaned Training",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
    },
  ];

  return (
    <SimpleGrid minChildWidth="300px" textAlign="center" spacing="16px" justifyContent="center">
      {membersData.map((member, index) => (
        <Box key={index} rounded="lg" overflow="hidden" p={2}>
          <center>
            <Image size="128px" src={member.image} rounded="lg" />
          </center>
          <Heading as="h4" fontSize={["md", "lg"]} mt={2}>{member.name}</Heading>
          <Text fontSize={["sm", "md"]} mt={2}>{member.position}</Text>
          <Text>{member.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

const TeamContainer = () => {
  return (
    <div className="team">
      <Helmet>
        <title>Our Team | ACM ICPC @ UCLA</title>
        <meta name="description" content="Meet Our Team for ACM ICPC at UCLA." />
        <meta name="keywords" content="team,acm,icpc,ucla,competitive,programming" />
      </Helmet>
      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={["2xl", "3xl"]}>Our Team</Heading>
          <AllMembers />
          <Heading as="h2" fontSize={["lg", "xl"]}>Intro to CP</Heading>
          <Flex wrap="wrap" justify="center" align="center">
          </Flex>
          <Heading as="h2" fontSize={["lg", "xl"]}>Interview</Heading>
          <Flex wrap="wrap" justify="center" align="center">
          </Flex>
          <Heading as="h2" fontSize={["lg", "xl"]}>Advanced</Heading>
        </Stack>
      </Container>
    </div>
  );
}

export default TeamContainer;

