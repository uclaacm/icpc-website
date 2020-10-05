import React, { useMemo, Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Image,
  Stack,
  Text,
  List,
  ListItem,
  Box,
} from '@chakra-ui/core';
import Container from 'components/container';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const RegionalsContainer = () => (
  <div className="regionals">
    <Helmet>
      <title>ICPC Regionals | ACM ICPC @ UCLA</title>
      <meta name="description" content="Learn more about the ICPC Regionals and UCLA's own team." />
      <meta name="keywords" content="competition,regionals,team,acm,icpc,ucla,competitive,programming" />
    </Helmet>
    <Container narrow>
      <Heading as="h1" fontSize={['2xl', '3xl']} textAlign="center" py={4}>ICPC Regionals</Heading>
      <Stack pb={10} spacing={10}>
        {/* <Flex direction="row" wrap="wrap" justify="space-around" align="center"> */}
        <Stack shouldWrapChildren isInline spacing={4}>
          <Image src="/static/regionals/2019.jpeg" />

          <Image src="/static/regionals/2018.jpeg" />
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
          {/* </Flex> */}
        </Stack>
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}>About</Heading>
          <Text>
            The International Collegiate Programming Contest (ICPC) is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world. It is often considered to be the ”Olympics of Programming Competitions”, featuring contestants from over 2,000 universities that are spread across 80 countries and six continents.
          </Text>
          <Text>
            The ICPC features several levels of competition:
            <List styleType="disc">
              <ListItem>Regional Contests</ListItem>
              <ListItem>Regional/National Championships</ListItem>
              <ListItem>The World Finals</ListItem>
            </List>
          </Text>
          <Text>
            In November 2019, UCLA sent 5 teams to the ICPC Southern California Regional Contest at Riverside Community College. As a school, we put on an extremely strong performance with UCLA’s top three teams placing 4th, 6th, and 8th in the region. The team composed of Lucas Xia, Arihant Jain, Justin Li, and coach Justin Li thereby qualified for the prestigious 2020 ICPC North American Championship(NAC) hosted by Georgia Tech in Atlanta. At NAC in February, the team went on to solve 5 problems, which placed them in 32nd place in the nation out of the 59 teams in attendance.
          </Text>
        </Stack>
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}>Latest Update (09/25/20)</Heading>
          <Text>
            Stay tuned for updates on ICPC Regionals 2020. We will post all and any information we have here.
          </Text>
        </Stack>
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}>FAQ</Heading>
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
                  While all our events and workshops are open to all, selection for the UCLA ICPC regionals team is based solely on performance in the annual tryouts (we ICPC officers have to try out too!) Each year, the top 12-15 performers in the tryout are invited to represent UCLA at the Southern California ICPC Regionals.

                  It is also worth mentioning that this tryout process is completely different from the application to join us as an officer! You need not be an expert at competitive programming to join us. All you need is a passion for teaching and problem-solving!
                  </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader>
                  <Box flex="1" textAlign="left">
                      Can I pick my own team?
                    </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Absolutely! Team formation to left to be an organic process amongst the selected contests. Contestants form teams as they wish, typically after practicing together as a big group and identifying each individual’s strengths and weaknesses. However, each contestant must tryout individually.
                  </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader>
                  <Box flex="1" textAlign="left">
                      Do I need to be an ICPC officer to tryout?
                    </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Not at all! The tryout process is completely independent of the ICPC officers application process. Selection for the UCLA ICPC regionals team is based solely on performance in the annual tryouts (we ICPC officers have to try out too!) Each year, the top 12-15 performers in the tryout are invited to represent UCLA at the Southern California ICPC Regionals.
                  </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Container>
        </Stack>
      </Stack>
    </Container>
  </div>
);

export default RegionalsContainer;
