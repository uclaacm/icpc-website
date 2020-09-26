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
  PseudoBox,
  Divider,
  SimpleGrid,
  Tooltip,
  useToast,
} from '@chakra-ui/core';
import Container from 'component/container'

const AllMembers = () => {
  const membersData = [
    {
      image: "/static/member/placeholder.png",
      name: "Nikil Selvam",
      position: "President",
      description: "Hey! I’m Nikil, a 3rd year majoring in CS & Math. I hail from Qatar (bonus points if you know this desert in the Middle East!). Badminton player, ML enthusiast, keyboardist, Factorio novice, and a die-hard Roger Federer fan :)",
      fun_facts: {
        'ice cream': 'Cookies and Cream',
        'professor': 'Darwiche',
        'editor': 'Emacs',
        'TV show in the last year': 'The Crown',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Jacob Zhang",
      position: "Officer",
      description: "I'm a Math/CS Double Major interested in analysis, combinatorics, algorithms, and programming languages. In addition to ICPC workshops, I teach Olympiad problem-solving at LAMC. I enjoy running, rock climbing, and Chinese music.",
      fun_facts: {
        'ice cream': 'Salted Caramel',
        'professor': 'Eggert',
        'editor': 'VS Code',
        'TV show in the last year': 'Silicon Valley',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Lucas Xia",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
      fun_facts: {
        'ice cream': '',
        'professor': '',
        'editor': '',
        'TV show in the last year': 'The Crown',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Suraj Vathsa",
      position: "Officer",
      description: "I’m a Junior studying CS at UCLA. At ACM @ UCLA ICPC, I’ve taught Interview Track for the past couple of quarters . Apart from coding, you can catch me reading books, playing FIFA, watching soccer and working out at the gym!",
      fun_facts: {
        'ice cream': 'Strawberry',
        'professor': 'Darwiche',
        'editor': 'Vim',
        'TV show in the last year': 'Parks and Rec',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Ana Gu",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
      fun_facts: {
        'ice cream': '',
        'professor': '',
        'editor': '',
        'TV show in the last year': 'The Crown',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Alvin Nguyen",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
      fun_facts: {
        'ice cream': '',
        'professor': '',
        'editor': '',
        'TV show in the last year': 'The Crown',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Justin Li",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
      fun_facts: {
        'ice cream': '',
        'professor': '',
        'editor': '',
        'TV show in the last year': 'The Crown',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Rohit Nema",
      position: "Officer",
      description: "Hi I'm Rohit, a 3rd year Computer Science and Math major. I'm currently involved in Cryptography research and trying to dip my feet in competitive programming. I like to watch anime and play basketball. ",
      fun_facts: {
        'ice cream': 'Mint Chocolate Chip',
        'professor': 'Ostrovsky',
        'editor': 'Vim',
        'TV show in the last year': 'Kaguya-sama',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Bill Liu",
      position: "Officer",
      description: "Hi there! I'm Bill, a 3rd year CS major who loves to teach algorithms and make iOS apps! Outside of tech, I enjoy 🎨 painting, 🤺 fencing, and 🎮 gaming!",
      fun_facts: {
        'ice cream': 'Mango',
        'professor': 'Eggert',
        'editor': 'Emacs',
        'TV show in the last year': 'The Boys',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Rishi Sankar",
      position: "Officer",
      description: "I'm Rishi, and I'm a sophomore studying CS/math from the Bay Area. My hobbies include watching movies, going out to eat, running, and playing table tennis. I also enjoy playing video games like Minecraft, Smash Bros, and, recently, Among Us.",
      fun_facts: {
        'ice cream': 'Cookie Dough',
        'professor': 'Eggert',
        'editor': 'Sublime Text',
        'TV show in the last year': 'Avatar The Last Airbender',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Tony Xia",
      position: "Officer",
      description: "I'm a sophomore CS&Math major interested in CP, math, and ML. All of these are math-heavy, so I really enjoy playing the violin to relax, as it only requires me to count to 4 (or 6 in rarer cases).",
      fun_facts: {
        'ice cream': 'Vanilla + Oreo',
        'professor': 'The great professors are all equally great',
        'editor': 'VS Code',
        'TV show in the last year': 'The Big Bang Theory',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Saarthak Sharma",
      position: "Officer",
      description: "I am a second-year CS Major at UCLA. I am relatively new to competitive programming but am extremely interested and trying my best to be a part of the great ACM ICPC community.",
      fun_facts: {
        'ice cream': 'Chocolate Chip',
        'professor': 'Reinman',
        'editor': 'VS Code',
        'TV show in the last year': 'Breaking Bad',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Arjun Kallapur",
      position: "Officer",
      description: "Hi I'm Arjun and I am a 4th year CS major! I'm super passionate about teaching and learning new things. Catch me gardening, listening to pop music, and trying to (and mostly failing to) cook.",
      fun_facts: {
        'ice cream': 'Chocolate',
        'professor': 'Eggert',
        'editor': 'VS Code',
        'TV show in the last year': 'The Bachelor',
      },
    },
    {
      image: "/static/member/placeholder.png",
      name: "Arihant Jain",
      position: "Officer",
      description: "An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!",
      fun_facts: {
        'ice cream': '',
        'professor': '',
        'editor': '',
        'TV show in the last year': 'The Crown',
      },
    },
  ];

  let fun_facts = ['ice cream', 'professor', 'editor', 'TV show in the last year'];
  let rand_fact = fun_facts[Math.floor(Math.random() * 4)];

  return (
    <SimpleGrid minChildWidth="300px" textAlign="center" spacing="16px" justifyContent="center">
      {membersData.map((member, index) => (
        <Box key={index} rounded="lg" overflow="hidden" p={2}>
          <center>
            <Tooltip hasArrow label={"favorite "+rand_fact+": "+member.fun_facts[rand_fact]} placement="top">
              <Image size="128px" src={member.image} rounded="lg" />
            </Tooltip>
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
        <Heading as="h1" fontSize={["2xl", "3xl"]} textAlign="center" py={4}>Our Team</Heading>
        <Stack pb={10} spacing={10}>
          <AllMembers />
        </Stack>
      </Container>
    </div>
  );
}

export default TeamContainer;

