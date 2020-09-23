import React, { useMemo, Component } from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Button,
  Box,
} from '@chakra-ui/core';
import Container from 'component/container';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const RegionalsContainer = () => {
  return (
    <div className="regionals">
      <Helmet>
        <title>ICPC Regionals | ACM ICPC @ UCLA</title>
        <meta name="description" content="Learn more about the ICPC Regionals and UCLA's own team." />
        <meta name="keywords" content="competition,regionals,team,acm,icpc,ucla,competitive,programming" />
      </Helmet>
      <Container>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={["2xl", "3xl"]}>ICPC Regionals</Heading>
          <Flex direction="row" wrap="wrap" justify="center" align="center">
            <Image size="40%" src="/static/regionals/2019.jpeg" />
            <Image size="40%" src="/static/regionals/2018.jpeg" />
            {/* <Carousel> */}
            {/*   <div> */}
            {/*     <Image size="80%" src="/static/regionals/2019.jpeg" /> */}
            {/*     <p className="legend">2019 Team</p> */}
            {/*   </div> */}
            {/*   <div> */}
            {/*     <Image size="80%" maxSize="60px" src="/static/regionals/2018.jpeg" /> */}
            {/*     <p className="legend">2018 Team</p> */}
            {/*   </div> */}
            {/* </Carousel> */}
          </Flex>
          <Heading as="h2" fontSize={["lg", "xl"]}>About</Heading>
          <p>coming soon!</p>
          <Flex wrap="wrap" justify="center" align="center">
          </Flex>
          <Heading as="h2" fontSize={["lg", "xl"]}>Upcoming Dates</Heading>
          <p>coming soon!</p>
          <Flex wrap="wrap" justify="center" align="center">
          </Flex>
          <Heading as="h2" fontSize={["lg", "xl"]}>FAQ</Heading>
          <Container narrow>
            <Accordion>
              <AccordionItem>
                <AccordionHeader>
                  <Box flex="1" textAlign="left">
                    How do I apply?
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum turpis eu justo iaculis tristique. Fusce sit amet ornare nisl, ut mollis dui. Maecenas ullamcorper massa a mi scelerisque dignissim. Fusce sit amet commodo metus. Aenean ut fermentum tellus.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
              <AccordionHeader>
                <Box flex="1" textAlign="left">
                  Can you pick your own teams?
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum turpis eu justo iaculis tristique. Fusce sit amet ornare nisl, ut mollis dui. Maecenas ullamcorper massa a mi scelerisque dignissim. Fusce sit amet commodo metus. Aenean ut fermentum tellus.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </Container>
        </Stack>
      </Container>
    </div>
  );
}

export default RegionalsContainer;

