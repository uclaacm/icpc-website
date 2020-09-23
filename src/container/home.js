import React from 'react';
import {useMediaQuery} from 'hooks';
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
  useToast,
} from '@chakra-ui/core';
import Container from 'component/container';
import { UpcomingEvents } from 'container/events';

const HomeContainer = () => {
  const toast = useToast();
  return (
    <div className="home">
      <Helmet>
        <title>Home | ACM ICPC @ UCLA</title>
        <meta name="description" content="Welcome to ACM ICPC at UCLA. Learn more about who we are and why we do what we do!" />
        <meta name="keywords" content="acm,icpc,ucla,competitive,programming" />
      </Helmet>
      <Box bg="#F9BABC">
        <Image
          mx="auto"
          objectFit="cover"
          src="/static/banner.png"
          alt="ICPC Banner"
          width="100%"
          maxWidth="80em"
        />
      </Box>
      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={["2xl", "3xl"]}>who we are</Heading>
          <Heading as="h2" fontSize={["md", "lg"]}>Algorithmic thinking, problem solving</Heading>
          <Text fontSize={["sm", "md"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum turpis eu justo iaculis tristique. Fusce sit amet ornare nisl, ut mollis dui. Maecenas ullamcorper massa a mi scelerisque dignissim. Fusce sit amet commodo metus. Aenean ut fermentum tellus. In feugiat laoreet felis, vitae dictum mi tincidunt et. Vestibulum mollis hendrerit nisl, dictum gravida velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam efficitur malesuada est eu tempus. Suspendisse vulputate ipsum id nunc ullamcorper auctor. Donec fringilla leo ut risus sodales, quis lobortis felis faucibus. Curabitur sed rhoncus risus. Nulla porta dignissim felis eleifend faucibus.
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
          <Heading as="h1" fontSize={["2xl", "3xl"]}>what we do</Heading>
          <Heading as="h2" fontSize={["md", "lg"]}>Party constantly</Heading>
          <Text fontSize={["sm", "md"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum turpis eu justo iaculis tristique. Fusce sit amet ornare nisl, ut mollis dui. Maecenas ullamcorper massa a mi scelerisque dignissim. Fusce sit amet commodo metus. Aenean ut fermentum tellus. In feugiat laoreet felis, vitae dictum mi tincidunt et. Vestibulum mollis hendrerit nisl, dictum gravida velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam efficitur malesuada est eu tempus. Suspendisse vulputate ipsum id nunc ullamcorper auctor. Donec fringilla leo ut risus sodales, quis lobortis felis faucibus. Curabitur sed rhoncus risus. Nulla porta dignissim felis eleifend faucibus.
          </Text>
          <Stack isInline flexWrap="wrap" justify="center" p={4}>
            <Flex wrap="wrap" justify="center" align="center">
              <Link to={{
                pathname: "events",
                hash: "#all-events",
              }}>
                <Button m={3} variantColor="brand" variant="outline">All Events</Button>
              </Link>
              <Button
                m={3}
                variantColor="brand"
                variant="outline"
                onClick={() =>
                    toast({
                      title: "Applications are not open.",
                      description: "Hi! Applications are not open yet (-_-;) . Check back around Novemeber.",
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    })
                }
              >
                Join Us!
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Container>
      <Divider p={3} borderColor="brand.500" />
      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={["2xl", "3xl"]}>Upcoming Events</Heading>
          <UpcomingEvents />
        </Stack>
      </Container>
    </div>
  );
}

export default HomeContainer;

