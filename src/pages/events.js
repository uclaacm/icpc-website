import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Container from "components/container";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const loremPic = "https://picsum.photos/900/900"


const featuredEvents = [
  {
    title: "Codesprint",
    description: loremIpsum,
    bgColor: "gray.50",
    link: "#",
    imageSrc: loremPic,
  },
  {
    title: "Break the Binary",
    description: loremIpsum,
    bgColor: "brand.50",
    link: "#",
    imageSrc: loremPic,
  },
  {
    title: "Estimathon",
    description: loremIpsum,
    bgColor: "gray.50",
    link: "#",
    imageSrc: loremPic,
  },
];

const EventsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      setActiveIndex(Math.round(scrollLeft / width));
    };
    const node = scrollRef.current;
    node.addEventListener("scroll", handleScroll);
    return () => node.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="events">
      <Box
        position="relative"
        h="95vh"
        overflowX="auto"
        whiteSpace="nowrap"
        ref={scrollRef}
        sx={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* Event sections */}
        {featuredEvents.map((event, index) => (
          <Flex
            key={index}
            h="100%"
            w="100%"
            align="center"
            justify="center"
            direction="column"
            display="inline-flex"
            bg={event.bgColor}
            sx={{
              scrollSnapAlign: "start",
            }}
          >
            <Container>
              <Heading as="h1" size="2xl" mb={6} textAlign="center" px={4}>
                {event.title}
              </Heading>
              <Text fontSize="xl" textAlign="center" whiteSpace="pre-line" px={4} mb={6}>
                {event.description}
              </Text>
              {/* Event image */}
              <Center>
                <Image
                  src={event.imageSrc}
                  alt={event.title}
                  borderRadius="md"
                  mb={2}
                  maxH="300px"
                />
              </Center>
              <Box textAlign="center" mt={8}>
                <Button
                  as="a"
                  href={event.link}
                  colorScheme="blue"
                  size="lg"
                >
                  Learn More
                </Button>
              </Box>
            </Container>
          </Flex>
        ))}
      </Box>

      {/* Pagination dots */}
      <Flex
        position="absolute"
        bottom={8}
        right={8}
        gap={2}
        zIndex={1}
      >
        {featuredEvents.map((_, idx) => (
          <Box
            key={idx}
            w={4}
            h={4}
            borderRadius="full"
            bg={activeIndex === idx ? "blue.400" : "gray.300"}
            border="2px solid"
            borderColor="white"
            transition="background 0.3s"
          />
        ))}
      </Flex>
    </div>
  );
};

export default EventsContainer;
