import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Image,
  Stack,
  Text,
  Box,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/core';
import Container from 'components/container';

import { members as membersData } from 'data';

const AllMembers = () => {
  const funFacts = ['ice cream', 'professor', 'editor', 'TV show in the last year'];
  const randFact = funFacts[Math.floor(Math.random() * 4)];

  return (
    <SimpleGrid minChildWidth="300px" textAlign="center" spacing="16px" justifyContent="center">
      {membersData.map((member, index) => (
        <Box key={index} rounded="lg" overflow="hidden" p={2}>
          <center>
            <Tooltip hasArrow label={`favorite ${randFact}: ${member.funFacts[randFact]}`} placement="top">
              <Image size="128px" src={member.image} rounded="lg" />
            </Tooltip>
          </center>
          <Heading as="h4" fontSize={['md', 'lg']} mt={2}>{member.name}</Heading>
          <Text fontSize={['sm', 'md']} mt={2}>{member.position}</Text>
          <Text>{member.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const TeamContainer = () => (
  <div className="team">
    <Helmet>
      <title>Our Team | ACM ICPC @ UCLA</title>
      <meta name="description" content="Meet Our Team for ACM ICPC at UCLA." />
      <meta name="keywords" content="team,acm,icpc,ucla,competitive,programming" />
    </Helmet>
    <Container narrow>
      <Heading as="h1" fontSize={['2xl', '3xl']} textAlign="center" py={4}>Our Team</Heading>
      <Stack pb={10} spacing={10}>
        <AllMembers />
      </Stack>
    </Container>
  </div>
);

export default TeamContainer;
