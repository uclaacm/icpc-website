import React, { useMemo, Component } from 'react';
import { Link } from 'react-router-dom';
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
  Divider,
} from '@chakra-ui/react';
import Container from 'components/container';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const RegionalsContainer = () => (
  <div className="regionals">
    <Helmet>
      <title>ICPC | ACM ICPC at UCLA</title>
      <meta name="description" content="Learn more about the ICPC Regionals and UCLA's own team." />
      <meta name="keywords" content="competition,regionals,team,acm,icpc,ucla,competitive,programming" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ICPC | ACM ICPC at UCLA" />
      <meta property="og:description" content="Learn more about the ICPC Regionals and UCLA's own team." />
      <meta property="og:url" content="https://icpc.uclaacm.com/icpc" />
      <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
      <meta property="og:site_name" content="ACM ICPC at UCLA" />
    </Helmet>
    <Container narrow>
      <Heading as="h1" fontSize={['5xl']} textAlign="center" py={4}>ICPC</Heading>
      <Stack pb={10} spacing={10} align="center">
        <Stack direction={['column', 'row']} align="center" justify='space-between'>
          <Image src="/static/regionals/2021.jpg" width={["100%", "49%"]} />
          <Image src="/static/regionals/2019.jpeg" width={["100%", "49%"]} />
        </Stack>
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}>About</Heading>
          <Text>
            The International Collegiate Programming Contest (ICPC) is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. It is the oldest, largest, and most prestigious programming contest in the world, featuring contestants from over 2,000 universities that are spread across 80 countries and six continents.

          </Text>
        </Stack>
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}> UCLA ICPC Achievements</Heading>

          <Heading
            as="h4"
            fontSize={['md', 'md']}
            textAlign="left"
            alignSelf="flex-start"
            pb={2}
            borderBottom="2px solid"
            borderColor="gray.300"
          >
            2024-2025
          </Heading>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> North America Championship
          </Heading>
          <List styleType="disc" width="100%" pb={2} ml={8}>
            <ListItem> UCLA Three Musketeers (Andy Polizzotto, Zhenting Zhu, and Harry Zhou) placed 4th, qualifying for the World Finals. </ListItem>
            <ListItem>First solved Problem E.</ListItem>
          </List>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> Regionals
          </Heading>
          <List styleType="disc" width="100%" pb={1} ml={8}>
            <ListItem>
              <ListItem>UCLA's teams placed 1st, 3rd, 9th, 12th , 14th, 18th, 31th.</ListItem>
              <ListItem>UCLA Three Musketeers qualified for the North American Championship.</ListItem>
            </ListItem>
          </List>

          <Divider my={6} />

          <Heading
            as="h4"
            fontSize={['md', 'md']}
            textAlign="left"
            alignSelf="flex-start"
            pb={2}
            borderBottom="2px solid"
            borderColor="gray.300"
          >
            2023-2024
          </Heading>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> North America Championship
          </Heading>
          <List styleType="disc" width="100%" pb={2} ml={8}>
            <ListItem>
              UCLA Stroopwafel (William Zhao, Kevin Sheng, and Xuanhao Cui) placed 24th.
            </ListItem>
          </List>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> Regionals
          </Heading>
          <List styleType="disc" width="100%" pb={1} ml={8}>
            <ListItem>
              <ListItem>UCLA's teams placed 1st, 2nd, 3rd, 5th, 7th, and 15th.</ListItem>
              <ListItem>UCLA Stroopwafel qualified for the North American Championship.</ListItem>
            </ListItem>
          </List>


          <Divider my={6} />

          <Heading
            as="h4"
            fontSize={['md', 'md']}
            textAlign="left"
            alignSelf="flex-start"
            pb={2}
            borderBottom="2px solid"
            borderColor="gray.300"
          >
            2022-2023
          </Heading>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> World Finals – Luxor, Egypt
          </Heading>
          <List styleType="disc" width="100%" pb={2} ml={8}>
            <ListItem>
              UCLA Tortellini (Jason Liu, Nikil Roashan Selvam, and Rishi Sankar) solved 5 problems and placed 52nd out of 130 teams.
            </ListItem>
          </List>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> North America Championship
          </Heading>
          <List styleType="disc" width="100%" pb={2} ml={8}>
            <ListItem>
              UCLA Tortellini placed 15th qualifying for the World Finals.
            </ListItem>
            <ListItem>First solved Problem G  </ListItem>
          </List>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> Regionals
          </Heading>
          <List styleType="disc" width="100%" pb={1} ml={8}>
            <ListItem>
              <ListItem>UCLA's teams placed 2nd, 3rd, 4th, 8th, 14th, and 23rd.</ListItem>
              <ListItem>UCLA Tortellini qualified for the North American Championship.</ListItem>
            </ListItem>
          </List>

          <Divider my={6} />

          <Heading
            as="h4"
            fontSize={['md', 'md']}
            textAlign="left"
            alignSelf="flex-start"
            pb={2}
            borderBottom="2px solid"
            borderColor="gray.300"
          >
            2021-2022
          </Heading>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> Regionals
          </Heading>
          <List styleType="disc" width="100%" pb={1} ml={8}>
            <ListItem>
              <ListItem>UCLA's teams placed 2nd, 4th, 8th, 9th, and 13th.</ListItem>
              <ListItem>UCLA Lemon Meringue (Jacob Zhang, Arihant Jain, and Nikil Selvam) qualified for the North American Championship.</ListItem>
            </ListItem>
          </List>

          <Divider my={6} />


          <Heading
            as="h4"
            fontSize={['md', 'md']}
            textAlign="left"
            alignSelf="flex-start"
            pb={2}
            borderBottom="2px solid"
            borderColor="gray.300"
          >
            2020-2021
          </Heading>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> World Finals – Dhaka, Bangladesh
          </Heading>
          <List styleType="disc" width="100%" pb={2} ml={8}>
            <ListItem>
              UCLA Ice-cream Sandwich (Lucas Xia, Jacob Zhang, and Arihant Jain) solved 6 problems, placing 34th out of 132 teams
            </ListItem>
          </List>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> North America Championship
          </Heading>
          <List styleType="disc" width="100%" pb={2} ml={8}>
            <ListItem>
              UCLA Ice-cream Sandwich placed 17th, qualifying for the World Finals.
            </ListItem>
          </List>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> North America Division Championships
          </Heading>
          <List styleType="disc" width="100%" pb={2} ml={8}>
            <ListItem>
              UCLA's teams placed 3rd and 9th.
            </ListItem>
            <ListItem>
              UCLA Ice-cream Sandwich qualified for the North American Championship.
            </ListItem>
          </List>
          <Heading as="h4" fontSize={['sm']} textAlign="left" alignSelf="flex-start"> Regionals
          </Heading>
          <List styleType="disc" width="100%" pb={1} ml={8}>
            <ListItem>
              <ListItem>UCLA's teams placed 2nd, 5th, 8th, 13th, and 15th.</ListItem>
              <ListItem>UCLA Ice-cream Sandwich and UCLA Gingerbread (Nikil Selvam, Justin Li, Ho Lyun Jeong) qualified for the North American Championship.</ListItem>
            </ListItem>
          </List>


        </Stack>
        <Stack align="center" w="100%" pb={10}>
          <Heading as="h2" fontSize={['lg', 'xl']}>FAQ</Heading>
          <Container narrow w="100%">
            <Accordion allowToggle defaultIndex={[]}>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: '#ff5479' }}>
                    <Box flex="1" textAlign="left">
                      How do I apply?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  While all our events and workshops are open to all, selection for the UCLA ICPC regionals team is based solely on performance in the annual tryouts (we ICPC officers have to try out too!) Each year, the top 12-15 performers in the tryout are invited to represent UCLA at the Southern California ICPC Regionals.

                  It is also worth mentioning that this tryout process is completely different from the application to join us as an officer! You need not be an expert at competitive programming to join us. All you need is a passion for teaching and problem-solving!
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: '#ff5479' }}>
                    <Box flex="1" textAlign="left">
                      Can I pick my own team?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Absolutely! Team formation to left to be an organic process amongst the selected contests. Contestants form teams as they wish, typically after practicing together as a big group and identifying each individual’s strengths and weaknesses. However, each contestant must tryout individually.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: '#ff5479' }}>
                    <Box flex="1" textAlign="left">
                      Do I need to be an ICPC officer to tryout?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Not at all! The tryout process is completely independent of the ICPC officers application process. Selection for the UCLA ICPC regionals team is based solely on performance in the annual tryouts (we ICPC officers have to try out too!) Each year, the top 12-15 performers in the tryout are invited to represent UCLA at the Southern California ICPC Regionals.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Container>
        </Stack>



      </Stack>
    </Container >
  </div >
);

export default RegionalsContainer;
