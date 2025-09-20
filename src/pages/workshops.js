import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Flex,
  Heading,
  Image,
  VStack,
  Text,
  Box,
  Divider,
} from '@chakra-ui/react';
import Container from 'components/container';

// A reusable card component for each track
const TrackCard = ({ title, text, imageUrl, imageOnLeft = false }) => {
  return (
    <Box
      p={{ base: 6, md: 8 }}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.200"
      boxShadow="md"
      bg="white"
      overflow="hidden"
    >
      <Flex
        // This is the key change:
        // On desktop (md), it becomes 'row-reverse' if imageOnLeft is true.
        // On mobile (base), it's always 'column-reverse' to keep the image on top.
        direction={{ base: 'column-reverse', md: imageOnLeft ? 'row-reverse' : 'row' }}
        gap={{ base: 6, md: 8 }}
        align="center"
      >
        {/* Left/Right Side: Text Content */}
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4}>
            {title}
          </Heading>
          <Text color="gray.600">
            {text}
          </Text>
        </Box>

        {/* Right/Left Side: Image */}
        <Box flexShrink={0} w={{ base: '100%', md: '250px' }}>
          <Image
            src={imageUrl}
            alt={`Illustration for ${title}`}
            borderRadius="md"
            objectFit="cover"
            boxSize="250px"
            mx="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

const WorkshopsContainer = () => {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

  const tracks = [
    {
      title: "Interview Track",
      text: loremIpsum,
      imageUrl: "https://picsum.photos/1600/900",
      imageOnLeft: false,
    },
    {
      title: "Training",
      text: loremIpsum,
      imageUrl: "https://picsum.photos/1600/900",
      imageOnLeft: true,
    },
    {
      title: "Project Track",
      text: loremIpsum,
      imageUrl: "https://picsum.photos/1600/900",
      imageOnLeft: false,
    }
  ];

  return (
    <div className="workshops">
      <Helmet>
        <title>Workshops</title>
      </Helmet>

      {/* Using your custom Container for consistent page width and padding */}
      <Container maxW="container.lg" py={12}>
        <VStack spacing={8} align="stretch">

          {/* Main Title Section */}
          <Box textAlign="center">
            <Heading as="h1" fontSize={['2xl', '3xl']} textAlign="center" py={4}>Workshops</Heading>
          </Box>

          {/* Map over the tracks array to render a card for each one */}
          {tracks.map((track) => (
            <TrackCard
              key={track.title}
              title={track.title}
              text={track.text}
              imageUrl={track.imageUrl}
              imageOnLeft={track.imageOnLeft}
            />
          ))}

        </VStack>

        <Box h="50px" />
      </Container>
    </div>
  );
};

export default WorkshopsContainer;
