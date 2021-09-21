import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Button,
  Box,
  Divider,
  useToast,
} from '@chakra-ui/core';
import Container from 'components/container';
import { UpcomingEvents } from 'pages/events';

import { useMediaQuery } from 'hooks';

const HomeContainer = () => {
  const toast = useToast();
  const isMobile = !useMediaQuery('(min-width: 768px)');
  return (
    <div className="home">
      <Helmet>
        <title>Home | ACM ICPC at UCLA</title>
        <meta name="description" content="Welcome to ACM ICPC at UCLA. Learn more about who we are and why we do what we do!" />
        <meta name="keywords" content="acm,icpc,ucla,competitive,programming" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | ACM ICPC at UCLA" />
        <meta property="og:description" content="Welcome to ACM ICPC at UCLA. Learn more about who we are and why we do what we do!" />
        <meta property="og:url" content="https://icpc.uclaacm.com/" />
        <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
        <meta property="og:site_name" content="ACM ICPC at UCLA" />
      </Helmet>
      <Box bg="#FCEDF3">
        {!isMobile && (
          <Image
            mx="auto"
            objectFit="fit"
            src="/static/banner.png"
            alt="ICPC Banner"
            maxHeight="500px"
          />
        )}
        {isMobile && (
          <Image
            mx="auto"
            objectFit="fit"
            src="/static/banner-mobile.png"
            alt="ICPC Banner"
            width="100%"
          />
        )}
      </Box>
      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={['2xl', '3xl']}>Upcoming Events</Heading>
          <UpcomingEvents />
        </Stack>
      </Container>
      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={['2xl', '3xl']}>who we are</Heading>
          <Heading as="h2" textAlign="center" fontSize={['md', 'lg']}>algorithmic thinking, problem solving</Heading>
          <Text textAlign="justify" fontSize={['sm', 'md']}>
            We are a group of problem solvers at heart! ACM ICPC at UCLA is a student-led organization whose mission is to promote algorithmic thinking and help build proficient problem solvers.
            While we mostly dabble in competitive programming, we have grown to encompass algorithmic and creative thinking in general whether that helps you in answering those challenging 
            coding interview questions or become a smarter and better programmer. We work diligently toward the shared goal of spreading the love of competitive programming and creative thinking
            to the greater UCLA community. From weekly workshops on competitive programming and technical interview preparation, to our own in-house puzzle hunts and beginner-friendly
            programming contests, everything we do revolves around the central theme of critical algorithmic thinking.
          </Text>
          <Text textalign="center" fontSize={['sm', 'md']}>
          Click below to find out more about us:
            </Text>
          <Flex wrap="wrap" justify="center" align="center">
            <Link to="team">
              <Button m={3} variantColor="brand" variant="outline">Meet Our Team</Button>
            </Link>
            <Link to="icpc">
              <Button m={3} variantColor="brand" variant="outline">ICPC Regionals</Button>
            </Link>
            <Link to={{
                pathname: 'events',
                hash: '#all-events',
              }}
              >
                <Button m={3} variantColor="brand" variant="outline">Learn More About our Events</Button>
            </Link>
          </Flex>
        </Stack>
      </Container>
      <Divider p={3} borderColor="brand.500" />
      
    </div>
  );
};

export default HomeContainer;
