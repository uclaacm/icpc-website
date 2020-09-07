import React from 'react';
import {useMediaQuery} from 'hooks';
import {Link} from 'react-router-dom';
import {
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Box,
  Divider,
} from '@chakra-ui/core';
import Container from 'component/container'

const HomeContainer = () => {
  return (
    <div>
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
      <Container>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={["2xl", "3xl"]}>Who We Are</Heading>
          <Heading as="h2" fontSize={["lg", "xl"]}>Algorithmic thinking, problem solving</Heading>
          <Text fontSize={["sm", "md"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum turpis eu justo iaculis tristique. Fusce sit amet ornare nisl, ut mollis dui. Maecenas ullamcorper massa a mi scelerisque dignissim. Fusce sit amet commodo metus. Aenean ut fermentum tellus. In feugiat laoreet felis, vitae dictum mi tincidunt et. Vestibulum mollis hendrerit nisl, dictum gravida velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam efficitur malesuada est eu tempus. Suspendisse vulputate ipsum id nunc ullamcorper auctor. Donec fringilla leo ut risus sodales, quis lobortis felis faucibus. Curabitur sed rhoncus risus. Nulla porta dignissim felis eleifend faucibus.
          </Text>
          <Stack isInline flexWrap="wrap" justify="center" p={4}>
            <Button variantColor="red" variant="outline" my={2}>Something Here</Button>
            <Button variantColor="red" variant="outline" my={2}>Something Here</Button>
            <Button variantColor="red" variant="outline" my={2}>Something Here</Button>
          </Stack>
        </Stack>
      </Container>
      <Divider p={3} borderColor="red.500" />
      <Container>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={["2xl", "3xl"]}>What We Do</Heading>
          <Heading as="h2" fontSize={["lg", "xl"]}>Party constantly</Heading>
          <Text fontSize={["sm", "md"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum turpis eu justo iaculis tristique. Fusce sit amet ornare nisl, ut mollis dui. Maecenas ullamcorper massa a mi scelerisque dignissim. Fusce sit amet commodo metus. Aenean ut fermentum tellus. In feugiat laoreet felis, vitae dictum mi tincidunt et. Vestibulum mollis hendrerit nisl, dictum gravida velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam efficitur malesuada est eu tempus. Suspendisse vulputate ipsum id nunc ullamcorper auctor. Donec fringilla leo ut risus sodales, quis lobortis felis faucibus. Curabitur sed rhoncus risus. Nulla porta dignissim felis eleifend faucibus.
          </Text>
          <Stack isInline flexWrap="wrap" justify="center" p={4}>
            <Button variantColor="red" variant="outline" my={2}>Something Here</Button>
            <Button variantColor="red" variant="outline" my={2}>Something Here</Button>
            <Button variantColor="red" variant="outline" my={2}>Something Here</Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default HomeContainer;

