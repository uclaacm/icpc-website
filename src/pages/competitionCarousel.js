'use client'
import React from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
}

export default function Carousel() {
  const [slider, setSlider] = React.useState(null)
  
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })
  
  const cards = [
    '/static/regionals/2024.jpg',
    '/static/regionals/nac_2025.jpg',
    '/static/regionals/j_concentrate.jpg',
    '/static/regionals/andy_prize.jpg',
    '/static/regionals/2021.jpg',
    '/static/regionals/2019.jpeg',
  ]
  
  return (
    <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'} borderRadius={'xl'} boxShadow={'2xl'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        size="lg"
        bg="rgba(255, 255, 255, 0.8)"
        opacity={0}
        _hover={{ opacity: 1 }}
        transition="opacity 0.3s"
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="24px" />
      </IconButton>
      
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        size="lg"
        bg="rgba(255, 255, 255, 0.8)"
        opacity={0}
        _hover={{ opacity: 1 }}
        transition="opacity 0.3s"
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="24px" />
      </IconButton>
      
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'400px'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}