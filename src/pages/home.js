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
        <meta property="og:image" itemprop="image" content="/static/icon/logo256.png" />
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
          <Heading as="h1" fontSize={['2xl', '3xl']}>who we are</Heading>
          <Heading as="h2" textAlign="center" fontSize={['md', 'lg']}>algorithmic thinking, problem solving</Heading>
          <Text textAlign="justify" fontSize={['sm', 'md']}>
            We are a group of problem solvers at heart! ACM ICPC at UCLA is a student-led organization whose mission is to promote algorithmic thinking and help build proficient problem solvers. While we mostly dabble in competitive programming, we have grown to encompass algorithmic and creative thinking in general whether that helps you in answering those challenging coding interview questions or become a smarter and better programmer. We work diligently toward the shared goal of spreading the love of competitive programming and creative thinking to the greater UCLA community. We are also connected to the ICPC competition. Click below to find out more about the event.
          </Text>
          <Flex wrap="wrap" justify="center" align="center">
            <Link to="team">
              <Button m={3} variantColor="brand" variant="outline">Meet Our Team</Button>
            </Link>
            <Link to="icpc">
              <Button m={3} variantColor="brand" variant="outline">ICPC Regionals</Button>
            </Link>
          </Flex>
        </Stack>
      </Container>
      <Divider p={3} borderColor="brand.500" />
      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={['2xl', '3xl']}>what we do</Heading>
          <Text textAlign="justify" fontSize={['sm', 'md']}>
            We are rooted in creative problem solving. From weekly workshops on competitive programming and technical interview preparation, to our own in-house puzzle hunts and beginner-friendly programming contests, everything we do revolves around the central theme of critical algorithmic thinking. Regardless of whether you are a complete beginner to programming (or even CS!), or have multiple years of experience in competitive programming, we have something to help you grow! All you need is the passion/interest!</Text>
            { /* If you would like to join us as an officer and help teach/organize any of our workshops or events, apply to ICPC through the general ACM application linked below! We look forward to seeing your application. */ }
          <Stack isInline flexWrap="wrap" justify="center" p={4}>
            <Flex wrap="wrap" justify="center" align="center">
              <Link to={{
                pathname: 'events',
                hash: '#all-events',
              }}
              >
                <Button m={3} variantColor="brand" variant="outline">Learn More About our Events</Button>
              </Link>
              {/* <Button */}
              {/*   m={3} */}
              {/*   variantColor="brand" */}
              {/*   variant="outline" */}
              {/*   onClick={() => toast({ */}
              {/*     title: 'Applications are not open.', */}
              {/*     description: 'Hi, thanks for showing interest! Applications are not open yet (-_-;). Check back around Novemeber for the ACM Intern/Officer Application Form.', */}
              {/*     status: 'error', */}
              {/*     duration: 5000, */}
              {/*     isClosable: true, */}
              {/*   })} */}
              {/* > */}
              {/*   Join Us! */}
              {/* </Button> */}
            </Flex>
          </Stack>
        </Stack>
      </Container>
      <Divider p={3} borderColor="brand.500" />
      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={['2xl', '3xl']}>Upcoming Events</Heading>
          <UpcomingEvents />
        </Stack>
      </Container>
    </div>
  );
};

export default HomeContainer;
