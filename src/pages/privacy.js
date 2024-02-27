import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Image,
    Stack,
    Text,
    List,
    ListItem,
    Box,
    Flex,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaDiscord,
} from 'react-icons/fa';
import Container from 'components/container';
import { EventCard, EventDescriptionCard } from 'components/eventcard';
// import * as AWS from "aws-sdk";
import { allEvents, pastEvents } from 'data';

// const docClient = new AWS.DynamoDB.DocumentClient();

const PrivacyPolicy = (props) => (
    <div className="regionals">
    <Helmet>
      <title>ICPC | ACM ICPC at UCLA</title>
      <meta name="description" content="Our privacy policy." />
      <meta name="keywords" content="competition,regionals,team,acm,icpc,ucla,competitive,programming" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ICPC | ACM ICPC at UCLA" />
      <meta property="og:description" content="Our privacy policy." />
      <meta property="og:url" content="https://icpc.uclaacm.com/icpc" />
      <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
      <meta property="og:site_name" content="ACM ICPC at UCLA" />
    </Helmet>
    <Container narrow>
      <Heading as="h1" fontSize={['5xl']} textAlign="center" py={4}>Privacy Policy</Heading>
      <Stack pb={10} spacing={10} align="center">
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}>About</Heading>
          <Text>Privacy Policy</Text>

          <Heading as="h2" fontSize={['lg', 'xl']}>About</Heading>
          <Text>Privacy Policy</Text>

          <Heading as="h2" fontSize={['lg', 'xl']}>About</Heading>
          <Text>Privacy Policy</Text>

          <Heading as="h2" fontSize={['lg', 'xl']}>About</Heading>
          <Text>Privacy Policy</Text>

          <Heading as="h2" fontSize={['lg', 'xl']}>About</Heading>
          <Text>Privacy Policy</Text>

          <Heading as="h2" fontSize={['lg', 'xl']}>About</Heading>
          <Text>Privacy Policy</Text>

        </Stack>
      </Stack>
    </Container>
  </div>
);

export default PrivacyPolicy;
