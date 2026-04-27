import React, { useState, useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Container,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// ─── Event Data ────────────────────────────────────────────────────────────────
// status options:
//   'open'     – registration is live; provide registrationUrl
//   'upcoming' – not yet open; optionally provide registrationOpens date string
//   'closed'   – registration has ended (used for past events)
//
// tab options:
//   'upcoming' – shown in the Upcoming tab
//   'past'     – shown in the Past tab

const events = [
  // ── Upcoming ──────────────────────────────────────────────────────────────
  {
    id: 1,
    tab: 'upcoming',
    name: 'CodeSprintLA 2026',
    description:
      'CodeSprintLA 2026 is a 3-person team competition from 11:30AM-4:30PM PDT. We have three divisions: a novice-friendly Beginner Division, an intermediate difficulty High School Division, and a challenging Open Division. We are excited to be giving out $2100+ in prizes across these rounds 🫰 💵 \n The contest will be held virtually for non-UCLA participants, with an in-person option for UCLA students. If you\'re interested, click learn more.',
    date: 'May 9, 2026',
    time: '9:00 AM – 5:00 PM',
    location: 'De Neve Plaza Room',
    image: "/static/event/banner_2026.png",
    registrationUrl: 'https://codesprintla.uclaacm.com/',
    learnMoreUrl: 'https://codesprintla.uclaacm.com/',
    status: 'open',
  },
  {
    id: 2,
    tab: 'upcoming',
    name: 'Interview Prep Boot Camp',
    description:
      "ACM ICPC is hosting an Interview Prep Boot Camp this quarter! We've prepared a series of workshops on more niche interview topics outside of algorithms, a curated set of practice problems, and spots for mock technical interviews! This is a great opportunity to get some practice alongside peers and test your live problem-solving skills in a friendly, low-stakes environment.",
    date: 'May 17, 2026',
    time: '1:00 PM – 6:30 PM',
    location: 'Engineering VI',
    image: "/static/event/s26_interview_event.png",
    registrationUrl: null,
    learnMoreUrl: 'https://docs.google.com/document/d/1ScsJaGIcoq8K-DrO3pfhatx5L6ACuHPgPA8MyWz7cEo/edit?usp=sharing',
    status: 'upcoming',
    registrationOpens: 'May 4, 2026'
  },

  // ── Past ──────────────────────────────────────────────────────────────────
  {
    id: 3,
    tab: 'past',
    name: 'Estimathon 2026',
    description:
    "Want to win MONEY for getting the WRONG answer? Pull up to Estimathon!!! \n You’ll compete with your team of up to 3 to come up with the best confidence intervals to difficult math and science questions like, what's the volume of the earth's oceans in cubic km; or, how many social security numbers are prime? It is a mind-bending mixture of math, trivia, and pure unadulterated fun, and the perfect way to start your quarter!",
    date: 'April 26, 2026',
    time: '2:30 PM – 5:00 PM',
    location: 'De Neve Plaza Room',
    image: "/static/event/estimathon.png",
    registrationUrl: null,
    learnMoreUrl: null,
    status: 'closed',
  },
  {
    id: 4,
    tab: 'past',
    name: 'Break the Binary 2026',
    description:
      'Get ready for a Pokémon-themed 🙀🙀🙀  puzzle hunt packed with logic, patterns, and clever problem-solving. Work in teams to tackle a sequence of puzzles inspired by the Pokémon universe — no coding required and beginner-friendly! Furthermore, there will be free food, awesome prizes, and a chance to network with professors!!',
    date: 'Januaray 24th, 2026',
    time: '10:00 AM – 4:30 PM',
    location: 'De Neve Plaza Room',
    image: "/static/event/btb26.png",
    registrationUrl: null,
    learnMoreUrl: null,
    status: 'closed',
  },
];

// ─── Event Slide ───────────────────────────────────────────────────────────────
const EventSlide = ({ event, isActive }) => {
  return (
    <Box
      w="100%"
      flexShrink={0}
      px={{ base: 4, md: 8 }}
      opacity={isActive ? 1 : 0.4}
      transition="opacity 0.4s ease"
      pointerEvents={isActive ? 'auto' : 'none'}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        bg="white"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="0 4px 40px rgba(0,0,0,0.10)"
        border="1.5px solid"
        borderColor="gray.100"
        minH={{ base: 'auto', md: '340px' }}
        maxW="900px"
        mx="auto"
      >
        {/* Image / Placeholder */}
        <Box
          w={{ base: '100%', md: '42%' }}
          minH={{ base: '200px', md: '340px' }}
          bg="gray.100"
          position="relative"
          overflow="hidden"
          flexShrink={0}
        >
          {event.image ? (
            <Image
              src={event.image}
              alt={event.name}
              objectFit="cover"
              w="100%"
              h="100%"
              position="absolute"
              top={0}
              left={0}
            />
          ) : (
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              gap={2}
              color="gray.400"
              position="absolute"
              top={0}
              left={0}
            >
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(135deg, gray.50 0%, gray.200 100%)"
              />
              <Box position="relative" zIndex={1} textAlign="center">
                <Box fontSize="4xl" mb={2} style={{ filter: 'grayscale(1) opacity(0.3)' }}>
                  📸
                </Box>
                <Text fontSize="xs" color="gray.400" fontFamily="heading">
                  Event Image
                </Text>
              </Box>
            </Flex>
          )}
        </Box>

        {/* Content */}
        <Flex direction="column" justify="space-between" p={{ base: 6, md: 8 }} flex={1}>
          <Box>
            <Heading
              fontFamily="heading"
              fontWeight="bold"
              fontSize={{ base: 'xl', md: '2xl' }}
              color="primary"
              mb={3}
              lineHeight="1.2"
            >
              {event.name}
            </Heading>
            <Text fontFamily="body" fontSize="sm" color="gray.600" lineHeight="1.75" mb={5}>
              {event.description}
            </Text>
          </Box>

          <Box>
            <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 1, sm: 4 }} mb={6}>
              <Box>
                <Text
                  fontFamily="heading"
                  fontWeight="semibold"
                  fontSize="xs"
                  color="gray.400"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  mb={0.5}
                >
                  Date
                </Text>
                <Text fontFamily="body" fontSize="sm" color="primary" fontWeight="semibold">
                  {event.date}
                </Text>
              </Box>
              <Box>
                <Text
                  fontFamily="heading"
                  fontWeight="semibold"
                  fontSize="xs"
                  color="gray.400"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  mb={0.5}
                >
                  Time
                </Text>
                <Text fontFamily="body" fontSize="sm" color="primary" fontWeight="semibold">
                  {event.time}
                </Text>
              </Box>
              <Box>
                <Text
                  fontFamily="heading"
                  fontWeight="semibold"
                  fontSize="xs"
                  color="gray.400"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  mb={0.5}
                >
                  Location
                </Text>
                <Text fontFamily="body" fontSize="sm" color="primary" fontWeight="semibold">
                  {event.location}
                </Text>
              </Box>
            </Flex>

            {event.status === 'open' && event.registrationUrl ? (
              <Flex gap={3} align="center" wrap="wrap">
                <Button
                  as="a"
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="brand"
                  fontFamily="heading"
                  fontWeight="semibold"
                  size="md"
                  rounded="lg"
                  px={7}
                  _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
                  transition="all 0.2s"
                >
                  Register Now
                </Button>
                {event.learnMoreUrl && (
                  <Button
                    as="a"
                    href={event.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    fontFamily="heading"
                    fontWeight="semibold"
                    size="md"
                    rounded="lg"
                    px={7}
                    borderColor="gray.300"
                    color="primary"
                    _hover={{ borderColor: 'brand.500', color: 'brand.500' }}
                    transition="all 0.2s"
                  >
                    Learn More
                  </Button>
                )}
              </Flex>
            ) : event.status === 'upcoming' ? (
              <Box>
                <Flex gap={3} align="center" wrap="wrap" mb={event.registrationOpens ? 2 : 0}>
                  <Button
                    isDisabled
                    fontFamily="heading"
                    fontWeight="semibold"
                    size="md"
                    rounded="lg"
                    px={7}
                    bg="brand.50"
                    color="brand.500"
                    border="1.5px solid"
                    borderColor="brand.200"
                    cursor="not-allowed"
                    _disabled={{ opacity: 1 }}
                  >
                    Registration Not Yet Open
                  </Button>
                  {event.learnMoreUrl && (
                    <Button
                      as="a"
                      href={event.learnMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      fontFamily="heading"
                      fontWeight="semibold"
                      size="md"
                      rounded="lg"
                      px={7}
                      borderColor="gray.300"
                      color="primary"
                      _hover={{ borderColor: 'brand.500', color: 'brand.500' }}
                      transition="all 0.2s"
                    >
                      Learn More
                    </Button>
                  )}
                </Flex>
                {event.registrationOpens && (
                  <Text fontFamily="heading" fontSize="xs" color="gray.400" mt={2}>
                    Opens {event.registrationOpens}
                  </Text>
                )}
              </Box>
            ) : (
              <Flex gap={3} align="center" wrap="wrap">
                <Button
                  isDisabled
                  fontFamily="heading"
                  fontWeight="semibold"
                  size="md"
                  rounded="lg"
                  px={7}
                  bg="gray.100"
                  color="gray.400"
                  cursor="not-allowed"
                  _disabled={{ opacity: 1 }}
                >
                  Registration Closed
                </Button>
                {event.learnMoreUrl && (
                  <Button
                    as="a"
                    href={event.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    fontFamily="heading"
                    fontWeight="semibold"
                    size="md"
                    rounded="lg"
                    px={7}
                    borderColor="gray.300"
                    color="primary"
                    _hover={{ borderColor: 'brand.500', color: 'brand.500' }}
                    transition="all 0.2s"
                  >
                    Learn More
                  </Button>
                )}
              </Flex>
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

// ─── Carousel ──────────────────────────────────────────────────────────────────
const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const startX = useRef(null);
  const trackRef = useRef(null);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(items.length - 1, c + 1));

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    startX.current = null;
  };

  if (items.length === 0) {
    return (
      <Box textAlign="center" py={16}>
        <Text fontFamily="body" fontSize="md" color="gray.400">
          No events to show here yet.
        </Text>
      </Box>
    );
  }

  return (
    <Box position="relative">
      {/* Arrow buttons — desktop only */}
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
      >
        <Button
          onClick={prev}
          isDisabled={current === 0}
          variant="ghost"
          size="lg"
          rounded="full"
          color="primary"
          _hover={{ bg: 'brand.50', color: 'brand.500' }}
          _disabled={{ opacity: 0.2, cursor: 'not-allowed' }}
          aria-label="Previous event"
        >
          <ChevronLeftIcon w={7} h={7} />
        </Button>
      </Box>
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
      >
        <Button
          onClick={next}
          isDisabled={current === items.length - 1}
          variant="ghost"
          size="lg"
          rounded="full"
          color="primary"
          _hover={{ bg: 'brand.50', color: 'brand.500' }}
          _disabled={{ opacity: 0.2, cursor: 'not-allowed' }}
          aria-label="Next event"
        >
          <ChevronRightIcon w={7} h={7} />
        </Button>
      </Box>

      {/* Slide track */}
      <Box
        overflow="hidden"
        mx={{ base: 0, md: 12 }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        ref={trackRef}
      >
        <Flex
          transition="transform 0.45s cubic-bezier(0.77,0,0.175,1)"
          transform={`translateX(-${current * 100}%)`}
        >
          {items.map((event, i) => (
            <EventSlide key={event.id} event={event} isActive={i === current} />
          ))}
        </Flex>
      </Box>

      {/* Dot indicators */}
      <Flex justify="center" gap={2} mt={8}>
        {items.map((_, i) => (
          <Box
            key={i}
            as="button"
            onClick={() => setCurrent(i)}
            w={i === current ? '24px' : '8px'}
            h="8px"
            borderRadius="full"
            bg={i === current ? 'brand.500' : 'gray.300'}
            transition="all 0.3s ease"
            _hover={{ bg: i === current ? 'brand.500' : 'gray.400' }}
            aria-label={`Go to event ${i + 1}`}
          />
        ))}
      </Flex>

      {/* Counter */}
      <Text
        textAlign="center"
        fontFamily="heading"
        fontSize="xs"
        color="gray.400"
        mt={4}
        letterSpacing="wider"
      >
        {current + 1} / {items.length}
      </Text>
    </Box>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────
const TABS = ['upcoming', 'past'];

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = events.filter((e) => e.tab === 'upcoming');
  const pastEvents = events.filter((e) => e.tab === 'past');
  const visibleEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <Box bg="gray.50" minH="100vh" pt={{ base: 24, md: 28 }} pb={16}>
      <Container maxW="container.xl">
        {/* Header */}
        <Box textAlign="center" mb={{ base: 8, md: 10 }}>
          <Heading
            fontFamily="heading"
            fontWeight="bold"
            fontSize={{ base: '3xl', md: '4xl' }}
            color="primary"
            mb={3}
          >
            Events
          </Heading>
          <Box h="3px" w="48px" bg="brand.500" mx="auto" borderRadius="full" mb={4} />
          <Text fontFamily="body" fontSize="md" color="gray.500" maxW="500px" mx="auto">
            Workshops, contests, and competitions — everything happening with ACM ICPC at UCLA.
          </Text>
        </Box>

        {/* Tabs */}
        <Flex justify="center" mb={{ base: 8, md: 10 }}>
          <Flex
            bg="white"
            border="1.5px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={1}
            gap={1}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <Button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  fontFamily="heading"
                  fontWeight="semibold"
                  fontSize="sm"
                  size="sm"
                  px={6}
                  py={5}
                  rounded="lg"
                  bg={isActive ? 'brand.500' : 'transparent'}
                  color={isActive ? 'white' : 'gray.500'}
                  _hover={isActive ? {} : { bg: 'gray.50', color: 'primary' }}
                  transition="all 0.2s"
                >
                  {tab === 'upcoming' ? 'Upcoming' : 'Past'}
                </Button>
              );
            })}
          </Flex>
        </Flex>

        {/* Carousel — keyed to tab so it resets to slide 0 on tab switch */}
        <Carousel key={activeTab} items={visibleEvents} />
      </Container>
    </Box>
  );
};

export default EventsPage;
