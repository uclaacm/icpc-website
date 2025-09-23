import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  Image,
  VStack,
  Button,
  Circle,
} from "@chakra-ui/react";
import Carousel from 'components/competitionCarousel';

// TODO Put this in data js
// TODO Make this more intuitive to work with
// --- 1. Enhanced Data Structure (Adjusted Colors for Lighter Theme) ---
const featuredEvents = [
  {
    title: "Codesprint",
    description:
      "Our flagship coding contest, Codesprint LA, is one of the largest college-run competitions of its kind. With over 700 participants last year and a total prize pool of over a $2000, it’s an event you won’t want to miss.",
    cta: "Visit the Website",
    isLink: true,
    link: "https://codesprintla.uclaacm.com",
    carouselCards: [
      "/static/event/codesprint/2025/groupphoto.png",
      "/static/event/codesprint/2025/j.png"
    ],
    theme: {
      // Lighter, more vibrant tones
      mainBg: "white", // White background for the slide itself
      textColor: "gray.800", // Darker text for contrast on light background
      blob1: "purple.200", // Lighter purple
      blob2: "pink.200", // Lighter pink
      gradient: "linear(to-r, pink.300, purple.400)", // Lighter button gradient
      hoverGradient: "linear(to-r, pink.400, purple.500)", // Slightly darker on hover
      buttonTextColor: "white", // White text on button
      paginationActive: "purple.400", // Active pagination dot
      paginationInactive: "gray.300", // Inactive pagination dot
    },
  },
  {
    title: "Break the Binary",
    description:
      "An annual themed puzzle hunt hosted with ACM-W. Teams of 3–4 take on 10–15 puzzles combining creativity, logic, and teamwork, with a focus on broadening participation in STEM.",
    cta: "See the Puzzles",
    isLink: true,
    link: "https://break-the-binary.github.io/website25/",
    carouselCards: [
      "/static/event/btb/2025/group.jpg",
      "/static/event/btb/2025/singleteamfocus.jpeg",
      "/static/event/btb/2025/otherteamfocus.jpeg",
      "/static/event/btb/2025/whole.jpg",
      "/static/event/btb/2025/wholea2.jpeg"
    ],
    theme: {
      mainBg: "white",
      textColor: "gray.800",
      blob1: "teal.200",
      blob2: "blue.200",
      gradient: "linear(to-r, teal.300, blue.400)",
      hoverGradient: "linear(to-r, teal.400, blue.500)",
      buttonTextColor: "white",
      paginationActive: "blue.400",
      paginationInactive: "gray.300",
    },
  },
  {
    title: "Estimathon",
    description:
      "Test your estimation skills in our fast-paced, brain-teasing challenge! Teams of 1–3 will tackle a series of Fermi estimation questions, putting your intuition and reasoning to the test.",
    cta: "",
    isLink: false,
    link: "#",
    carouselCards: [
      "/static/event/estimathon/2025/group.JPG",
    ],
    theme: {
      mainBg: "white",
      textColor: "gray.800",
      blob1: "orange.200",
      blob2: "red.200",
      gradient: "linear(to-r, orange.300, red.400)",
      hoverGradient: "linear(to-r, orange.400, red.500)",
      buttonTextColor: "white",
      paginationActive: "red.400",
      paginationInactive: "gray.300",
    },
  },
];

const EventsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    const handleScroll = () => {
      const width = node.clientWidth || node.offsetWidth;
      const scrollLeft = node.scrollLeft;
      setActiveIndex(Math.round(scrollLeft / width));
    };
    node.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => node.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const node = scrollRef.current;
      if (!node) return;
      node.scrollTo({ left: activeIndex * node.clientWidth, behavior: "auto" });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  const goToIndex = useCallback((idx) => {
    const node = scrollRef.current;
    if (!node) return;
    const width = node.clientWidth || node.offsetWidth;
    node.scrollTo({ left: idx * width, behavior: "smooth" });
    setActiveIndex(idx);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        goToIndex(Math.min(activeIndex + 1, featuredEvents.length - 1));
      } else if (e.key === "ArrowLeft") {
        goToIndex(Math.max(activeIndex - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, goToIndex]);

  // Get the current event's theme for dynamic styling
  const currentTheme = featuredEvents[activeIndex].theme;

  return (
    <Box position="relative" className="events">
      <Box
        h="95vh"
        overflowX="auto"
        overflowY="hidden"
        ref={scrollRef}
        sx={{
          display: "flex",
          scrollSnapType: "x mandatory",
          "&::-webkit-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {featuredEvents.map((event, index) => (
          <Box
            key={index}
            flex="0 0 100%"
            minH="100%"
            bg={event.theme.mainBg} // Use the theme's mainBg for the slide
            color={event.theme.textColor} // Use the theme's textColor
            position="relative"
            overflow="hidden"
            sx={{ scrollSnapAlign: "start" }}
          >
            {/* Background Blobs */}
            <Circle
              position="absolute"
              top="-50px"
              left="-100px"
              size={{ base: "250px", md: "400px" }}
              bg={event.theme.blob1}
              opacity={0.3}
              filter="blur(100px)"
            />
            <Circle
              position="absolute"
              bottom="-80px"
              right="-120px"
              size={{ base: "300px", md: "500px" }}
              bg={event.theme.blob2}
              opacity={0.25}
              filter="blur(120px)"
            />

            <Flex
              maxW="7xl"
              mx="auto"
              h="100%"
              align="center"
              justify="space-between"
              px={{ base: 6, md: 8 }}
              position="relative"
              zIndex={1}
              direction={{ base: "column-reverse", md: "row" }}
            >
              {/* Left Column: Text & CTA */}
              <VStack
                align={{ base: "center", md: "flex-start" }}
                textAlign={{ base: "center", md: "left" }}
                spacing={6}
                maxW="lg"
                mt={{ base: 8, md: 0 }}
              >
                <Heading as="h1" size={{ base: "2xl", md: "3xl" }} fontWeight="extrabold">
                  {event.title}
                </Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} >
                  {event.description}
                </Text>

                <Link href={event.link} isExternal={event.isLink} _hover={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    px={10}
                    mt={4}
                    bgGradient={event.theme.gradient}
                    color={event.theme.buttonTextColor}
                    isDisabled={!event.isLink}
                    _hover={event.isLink ? { bgGradient: event.theme.hoverGradient, transform: 'translateY(-2px)' } : {}}
                    _disabled={{
                      bg: "gray.300", // Lighter disabled state
                      color: "gray.600",
                      cursor: "not-allowed",
                      opacity: 0.7,
                    }}
                  >
                    {event.cta}
                  </Button>
                </Link>
              </VStack>

              {/* Right Column: Carousel */}
              <Box
                flexShrink={0}
                ml={{ md: 10 }}
                mt={{ base: 8, md: 0 }}
                h="400px"
                w={{ base: 'full', sm: '400px', md: '500px' }}
              >
                <Box
                  w="full"
                  maxW="full"
                  position="relative"
                >
                  <Carousel cards={event.carouselCards} />
                </Box>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>

      {/* Pagination dots (using currentTheme for colors) */}
      <Flex position="absolute" bottom={8} left={0} right={0} justify="center" gap={3} zIndex={1}>
        {featuredEvents.map((_, idx) => (
          <Box
            key={idx}
            w={3}
            h={3}
            borderRadius="full"
            bg={activeIndex === idx ? currentTheme.paginationActive : currentTheme.paginationInactive}
            transition="background 0.3s"
            cursor="pointer"
            role="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToIndex(idx)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default EventsContainer;
