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
} from '@chakra-ui/react';
import Container from 'components/container';
import Carousel from 'components/competitionCarousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import { carouselCards } from 'data';

const AboutAndCarousel = () => {
  return (
    <Box py={8} px={4}>
      {/* Main container */}
      <Box maxW="1200px" mx="auto" w="full">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 8, lg: 12 }}
          align="center"
          justify="center"
        >
          {/* Carousel Section - 50% */}
          <Box 
            flex={{ base: 1, lg: '0 0 50%' }} 
            w="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box 
              w="full" 
              maxW="600px"
              position="relative"
            >
              <Carousel cards={carouselCards} />
            </Box>
          </Box>
          {/* About Section - 50% */}
          <Box 
            flex={{ base: 1, lg: '0 0 50%' }}
            pl={{ base: 0, lg: 6 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing={4} textAlign="center" align="center">
              <Box>
                <Heading 
                  as="h2" 
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  fontWeight="bold"
                  color="gray.800"
                  lineHeight="1.2"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '3px',
                    bg: 'linear-gradient(90deg, #EC4899, #F472B6)',
                    borderRadius: 'full'
                  }}
                >
                  About ICPC
                </Heading>
              </Box>
              
              <Text 
                fontSize={{ base: 'sm', lg: 'md' }}
                lineHeight="1.6"
                color="gray.600"
                maxW="600px"
                textAlign="center"
              >
                The International Collegiate Programming Contest (ICPC) is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure.
              </Text>
              
              <Text 
                fontSize={{ base: 'xs', lg: 'sm' }}
                lineHeight="1.5"
                color="gray.500"
                textAlign="center"
              >
                It is the oldest, largest, and most prestigious programming contest in the world, featuring contestants from over 2,000 universities across 80 countries and six continents.
              </Text>
              
              <Box pt={1}>
                <Flex 
                  direction={{ base: 'column', sm: 'row' }}
                  gap={3}
                  justify="center"
                  align="center"
                >
                  <Box textAlign="center">
                    <Text fontSize="lg" fontWeight="bold" color="pink.500">2000+</Text>
                    <Text fontSize="xs" color="gray.500">Universities</Text>
                  </Box>
                  <Box textAlign="center">
                    <Text fontSize="lg" fontWeight="bold" color="pink.600">80</Text>
                    <Text fontSize="xs" color="gray.500">Countries</Text>
                  </Box>
                  <Box textAlign="center">
                    <Text fontSize="lg" fontWeight="bold" color="pink.700">6</Text>
                    <Text fontSize="xs" color="gray.500">Continents</Text>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

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
      <Stack pb={10} spacing={10} align="center">
        <AboutAndCarousel/>
        <Stack align="center">
          <Heading as="h2" fontSize={['lg', 'xl']}> News</Heading>
          <Heading as="h4" fontSize={['md']}> 2023-2024 North America Championship</Heading>
          <List styleType="disc" width="100%" pb={10}>
            <ListItem>UCLA Stroopwafel (William Zhao, Kevin Sheng, and Xuanhao Cui) placed 24th.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2023-2024 Regionals</Heading>
          <List styleType="disc" width="100%" pb={10}>
            <ListItem>UCLA's teams placed 1st, 2nd, 3rd, 5th, 7th, and 15th.</ListItem>
            <ListItem>UCLA Stroopwafel (William Zhao, Kevin Sheng, and Xuanhao Cui) qualified for the North American Championship.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2022-2023 World Finals</Heading>
          <List styleType="disc" width="100%" pb={10}>
            <ListItem>UCLA Tortellini (Jason Liu, Nikil Roashan Selvam, and Rishi Sankar) competed in Luxor, Egypt.</ListItem>
            <ListItem>Congratulations to Jason Liu, Nikil Roashan Selvam, and Rishi Sankar for their amazing performance at ICPC World Finals in Luxor, solving 5 problems and placing 52nd out of 130 teams.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2022-2023 North American Championship</Heading>
          <List styleType="disc" width="100%" pb={10}>
            <ListItem>UCLA Tortellini (Jason Liu, Nikil Roashan Selvam, and Rishi Sankar) placed 15th qualifying for the World Finals.</ListItem>
            <ListItem>Congratulations to Jason Liu, Nikil Roashan Selvam, and Rishi Sankar for their first solve on problem G.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2022-2023 Regionals</Heading>
          <List styleType="disc" width="100%" pb={10}>
          <ListItem>UCLA's teams placed 2nd, 3rd, 4th, 8th, 14th, and 23rd.</ListItem>
          <ListItem>UCLA Tortellini (Jason Liu, Nikil Roashan Selvam, and Rishi Sankar) qualified for the North American Championship.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2020-2021 World Finals</Heading>
          <List styleType="disc" width="100%" pb={10}>
            <ListItem>UCLA Ice-cream Sandwich (Lucas Xia, Jacob Zhang, and Arihant Jain) competed in Dhaka, Bangladesh.</ListItem>
            <ListItem>Congratulations to Arihant Jain, Jacob Zhang, and Lucas Xia for their amazing performance at ICPC World Finals in Dhaka, solving 6 problems and placing 34th out of 132 teams.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2021-2022 Regionals</Heading>
          <List styleType="disc" width="100%" pb={10}>
            <ListItem>UCLA's teams placed 2nd, 4th, 8th, 9th, and 13th.</ListItem>
            <ListItem>UCLA Lemon Meringue (Jacob Zhang, Arihant Jain, and Nikil Selvam) qualified for the North American Championship.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2020-2021 North American Championship</Heading>
          <List styleType="disc" width="100%" pb={10}>
            <ListItem>UCLA Ice-cream Sandwich (Lucas Xia, Jacob Zhang, and Arihant Jain) placed 17th qualifying for the World Finals.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2020-2021 North America Division Championships</Heading>
          <List styleType="disc" width="100%" pb={10}>
            <ListItem>UCLA's teams placed 3rd and 9th.</ListItem>
            <ListItem>UCLA Ice-cream Sandwich (Lucas Xia, Jacob Zhang, and Arihant Jain) qualified for the North American Championship.</ListItem>
          </List>
          <Heading as="h4" fontSize={['md']}> 2020-2021 Regionals</Heading>
          <List styleType="disc" width="100%" pb={5}>
            <ListItem>UCLA's teams placed 2nd, 5th, 8th, 13th, and 15th.</ListItem>
            <ListItem>UCLA Ice-cream Sandwich (Lucas Xia, Jacob Zhang, and Arihant Jain) and UCLA Gingerbread (Nikil Selvam, Justin Li, Ho Lyun Jeong), qualified for the North America Division Championships.</ListItem>
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
    </Container>
  </div>
);

export default RegionalsContainer;
