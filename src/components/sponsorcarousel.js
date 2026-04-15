import React, { useRef, useEffect, useState } from 'react';
import { Box, Heading, Link, Image } from '@chakra-ui/react';

const sponsors = [
  { name: 'Jane Street', link: 'https://www.janestreet.com/', img: 'static/sponsors/Jane_Street_Capital_Logo.svg' },
  { name: 'Traversal', link: 'https://www.traversal.com/', img: 'static/sponsors/traversal-full-logo.png' },
  { name: 'HRT', link: 'https://www.hudsonrivertrading.com/', img: 'static/sponsors/hrt-full-logo.png' },
  { name: 'Citadel', link: 'https://www.citadel.com/', img: 'static/sponsors/citadel.webp' },
  { name: 'X-Camp', link: 'https://x-camp.academy/', img: 'static/sponsors/x-camp.webp' },
];

// Duplicate for seamless infinite scroll
const track = [...sponsors, ...sponsors, ...sponsors];

const SponsorCarousel = () => {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.6; // px per frame

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Width of one set of sponsors
    const singleSetWidth = container.scrollWidth / 3;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Reset seamlessly when we've scrolled one full set
        if (posRef.current >= singleSetWidth) {
          posRef.current -= singleSetWidth;
        }
        container.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <Box
      py={10}
      px={0}
      overflow="hidden"
      position="relative"
      width="100%"
      _before={{
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '80px',
        background: 'linear-gradient(to right, white, transparent)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '80px',
        background: 'linear-gradient(to left, white, transparent)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <Heading as="p" textAlign="center" mb={8}>
        Sponsored by
      </Heading>

      {/* Outer mask */}
      <Box overflow="hidden" width="100%">
        {/* Scrolling track */}
        <Box
          ref={containerRef}
          display="flex"
          alignItems="center"
          gap="60px"
          willChange="transform"
          style={{ width: 'max-content' }}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {track.map((s, i) => (
            <Link
              key={i}
              href={s.link}
              isExternal
              flexShrink={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              px={4}
              py={2}
              borderRadius="12px"
              transition="all 0.25s ease"
              _hover={{
                transform: 'scale(1.08)',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
              }}
            >
              <Image
                src={s.img}
                alt={s.name}
                maxWidth="300px"
                objectFit="contain"
                filter="grayscale(30%)"
                transition="filter 0.25s ease"
                _hover={{ filter: 'grayscale(0%)' }}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SponsorCarousel;
