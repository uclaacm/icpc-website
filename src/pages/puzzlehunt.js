import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Stack,
} from '@chakra-ui/core';

import Container from 'components/container';


const PuzzleHuntContainer = () => (
    <div className="puzzlehunt">
        <Helmet>
            <title>Puzzle Hunt | ACM ICPC at UCLA</title>
            <meta name="description" content="Learn more about our upcoming Puzzle Hunt event." />
            <meta name="keywords" content="puzzlehunt,acm,icpc,ucla,competitive,programming" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Puzzle Hunt | ACM ICPC at UCLA" />
            <meta property="og:description" content="Learn more about our upcoming Puzzle Hunt event" />
            <meta property="og:url" content="https://icpc.uclaacm.com/puzzlehunt" />
            <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
            <meta property="og:site_name" content="ACM ICPC at UCLA" />
        </Helmet>
        <Container>
        <Stack align="center" padding={10}>
            <Heading as='h1' fontSize={['lg', 'xl']}>ACM Cyber x ICPC PuzzleHunt Teaser </Heading>
            <Heading as="h3" fontSize={['md']}>Please fill out this <a style={{color:'blue'}} href="https://forms.gle/sKgz32HKA57Xu7ry7">form</a> with your answer for a chance to win $10</Heading>
            <embed src='/static/puzzlehunt-promo-problem.pdf' width='100%' height='800px'></embed>
        </Stack>
        </Container>
    </div>
)

export default PuzzleHuntContainer;