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
} from '@chakra-ui/react';
import Container from 'components/container';
import Sponsor from "components/sponsor";
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
          <Heading as="h1" fontSize={['2xl', '3xl']}>who are we?</Heading>
          <Heading as="h2" textAlign="center" fontSize={['md', 'lg']}>algorithmic thinking, problem solving</Heading>
          <Text textAlign="justify" fontSize={['sm', 'md']}>
            We are a group of problem solvers at heart! ACM ICPC at UCLA is a student-led organization whose mission is to promote algorithmic thinking and help build proficient problem solvers.
            While we mostly dabble in competitive programming, we have grown to encompass algorithmic and creative thinking in general whether that helps you in answering those challenging
            coding interview questions or become a smarter and better programmer. We work diligently toward the shared goal of spreading the love of competitive programming and creative thinking
            to the greater UCLA community. From weekly workshops on competitive programming and technical interview preparation, to our own in-house puzzle hunts and beginner-friendly
            programming contests, everything we do revolves around the central theme of critical algorithmic thinking.
          </Text>
          <Text textalign="center" fontSize={['sm', 'md']}>
            We have the following:
            </Text>
        </Stack>
      </Container>

      <Divider p={3} borderColor="brand.500" />

      <Container>
        <Flex
          direction={isMobile ? "column" : "row"}
          justify="space-between"
          align="stretch"
          wrap="wrap"
          px={3}
          py={6}
          gap={6}
        >
          {/* Workshops Column */}
          <Box
            as={Link}
            to="/workshops"  // Adjust this path to your actual route
            flex="1"
            minW={isMobile ? "100%" : "30%"}
            mb={isMobile ? 6 : 0}
            textAlign="center"
            p={4}
            borderRadius="md"
            boxShadow="sm"
            cursor="pointer"
            _hover={{ boxShadow: "lg", bg: "pink.50" }}
            transition="all 0.3s ease"
          >
            <Heading fontSize={['xl', '2xl']} mb={3}>Workshops</Heading>
            <Image
              mx="auto"
              objectFit="contain"
              src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
              alt="Workshops"
              maxHeight="200px"
              mb={3}
            />
            <Text fontSize={['sm', 'md']} px={2}>
              Explore our regularly held workshops to practice for interviews, competitive projects, and more.
            </Text>
          </Box>

          {/* Events Column */}
          <Box
            as={Link}
            to="/events"  // Adjust this path to your actual route
            flex="1"
            minW={isMobile ? "100%" : "30%"}
            mb={isMobile ? 6 : 0}
            textAlign="center"
            p={4}
            borderRadius="md"
            boxShadow="sm"
            cursor="pointer"
            _hover={{ boxShadow: "lg", bg: "pink.50" }}
            transition="all 0.3s ease"
          >
            <Heading fontSize={['xl', '2xl']} mb={3}>Events</Heading>
            <Image
              mx="auto"
              objectFit="contain"
              src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"
              alt="Events"
              maxHeight="200px"
              mb={3}
            />
            <Text fontSize={['sm', 'md']} px={2}>
              Checkout out the events we will be hosting throughout the year.
            </Text>
          </Box>

          {/* Competitions Column */}
          <Box
            as={Link}
            to="/icpc"  // Adjust this path to your actual route
            flex="1"
            minW={isMobile ? "100%" : "30%"}
            mb={isMobile ? 6 : 0}
            textAlign="center"
            p={4}
            borderRadius="md"
            boxShadow="sm"
            cursor="pointer"
            _hover={{ boxShadow: "lg", bg: "pink.50" }}
            transition="all 0.3s ease"
          >
            <Heading fontSize={['xl', '2xl']} mb={3}>Competitions</Heading>
            <Image
              mx="auto"
              objectFit="contain"
              src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
              alt="Competitions"
              maxHeight="200px"
              mb={3}
            />
            <Text fontSize={['sm', 'md']} px={2}>
              Try out for our competitiion team to participate in the International Collegiate Programming Contest.
            </Text>
          </Box>
        </Flex>
      </Container>

      <Divider p={3} borderColor="brand.500" />

      <Container narrow>
        <Stack p={3} spacing={3} textAlign="center" align="center">
          <Heading as="p">Sponsored by</Heading>
          <Flex alignItems="center" justifyContent="space-between" direction="row" maxWidth={isMobile?null:"850px"} wrap="wrap">
            <Sponsor sponsor_name="Jane Street" external_link="https://www.janestreet.com/" img_src="static/sponsors/Jane_Street_Capital_Logo.svg" />
          </Flex>
        </Stack>
        <br/>      
      </Container>
    </div>
  );
};

export default HomeContainer;
