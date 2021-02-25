import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Image,
  Stack,
  Text,
  AspectRatioBox,
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
          <Tooltip hasArrow label={`favorite ${randFact}: ${member.funFacts[randFact]}`} placement="top">
            <center>
              <AspectRatioBox maxW="152px" ratio={1}>
                <Box p="4px" rounded="50%" borderColor="brand.500" borderWidth="8px">
                  <Image size="128px" src={member.image} rounded="50%" />
                </Box>
              </AspectRatioBox>
            </center>
          </Tooltip>
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
      <title>Our Team | ACM ICPC at UCLA</title>
      <meta name="description" content="Meet Our Team for ACM ICPC at UCLA." />
      <meta name="keywords" content="team,acm,icpc,ucla,competitive,programming" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Team | ACM ICPC at UCLA" />
      <meta property="og:description" content="Meet Our Team for ACM ICPC at UCLA." />
      <meta property="og:url" content="https://icpc.uclaacm.com/team" />
      <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
      <meta property="og:site_name" content="ACM ICPC at UCLA" />
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
