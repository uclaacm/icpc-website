import React from 'react';
import { Box, Heading, Link, Image } from '@chakra-ui/react';

const sponsors = [
  { name: 'Jane Street', link: 'https://www.janestreet.com/', img: 'static/sponsors/Jane_Street_Capital_Logo.svg' },
  { name: 'Traversal', link: 'https://www.traversal.com/', img: 'static/sponsors/traversal-full-logo.png' },
  { name: 'HRT', link: 'https://www.hudsonrivertrading.com/', img: 'static/sponsors/hrt-full-logo.png' },
  { name: 'Citadel', link: 'https://www.citadel.com/', img: 'static/sponsors/citadel.webp' },
  { name: 'X-Camp', link: 'https://x-camp.academy/', img: 'static/sponsors/x-camp.webp' },
];

const SponsorCarousel = () => (
  <Box py={10} position="relative" width="100%" overflow="hidden">
    {/* Inject keyframes + pause-on-hover */}
    <style>{`
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .sponsor-track {
        display: flex;
        align-items: center;
        width: max-content;
        animation: marquee 22s linear infinite;
      }
      .sponsor-track:hover {
        animation-play-state: paused;
      }
    `}</style>

    <Heading as="p" textAlign="center" mb={8}>
      Sponsored by
    </Heading>

    {/* Fade edges */}
    <Box
      position="absolute"
      left={0} top="60px" bottom={0}
      width="100px"
      zIndex={1}
      pointerEvents="none"
      style={{ background: 'linear-gradient(to right, white, transparent)' }}
    />
    <Box
      position="absolute"
      right={0} top="60px" bottom={0}
      width="100px"
      zIndex={1}
      pointerEvents="none"
      style={{ background: 'linear-gradient(to left, white, transparent)' }}
    />

    <Box overflow="hidden">
      {/*
        The track contains sponsors duplicated exactly once.
        The animation runs from 0 to -50% (one full copy width),
        then instantly resets to 0 — which looks identical, giving
        a perfectly seamless infinite loop with no JS involved.
      */}
      <div className="sponsor-track">
        {[...sponsors, ...sponsors].map((s, i) => (
          <Link
            key={i}
            href={s.link}
            isExternal
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            px="40px"
            py={2}
            transition="all 0.25s ease"
            _hover={{ transform: 'scale(1.08)', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}
          >
            <Image
              src={s.img}
              alt={s.name}
              height="52px"
              maxWidth="180px"
              objectFit="contain"
              filter="grayscale(30%)"
              transition="filter 0.25s ease"
              _hover={{ filter: 'grayscale(0%)' }}
            />
          </Link>
        ))}
      </div>
    </Box>
  </Box>
);

export default SponsorCarousel;
