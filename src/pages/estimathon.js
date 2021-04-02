import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Image,
  Stack,
  Text,
  AspectRatioBox,
  Box,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/core';
import Container from 'components/container';

const EstimathonContainer = () => (
  <div className="estimathon">
    <Helmet>
      <title>Estimathon | ACM ICPC at UCLA</title>
      <meta name="description" content="Estimate the coolest and most random things to win prizes!" />
      <meta name="keywords" content="estimathon,acm,icpc,ucla,competitive,programming" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Estimathon | ACM ICPC at UCLA" />
      <meta property="og:description" content="Estimate the coolest and most random things to win prizes!" />
      <meta property="og:url" content="https://icpc.uclaacm.com/estimathon" />
      <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
      <meta property="og:site_name" content="ACM ICPC at UCLA" />
    </Helmet>
    <Container narrow>
      <center>
        <Image src="/static/estimathon_banner.png" />
        <br />
      <Heading as="h2" fontSize={['2xl', '3xl']} textAlign="center" py={4}>Public Scoreboard</Heading>
        <div style={{"margin": "0 auto", "width": "100%", "height": "436px", "overflow": "hidden"}}>
          <iframe style={{"margin": "-32px 0"}} height="500px" width="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVacUbBaAMZqU_Fm9exoy51JZ-n7yiA29DdVb97i4YTUYvz0dgiunapjoXwne6ua_CovztLMhnLqTI/pubhtml?gid=1311685791&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>
      </center>
    </Container>
  </div>
);

export default EstimathonContainer;
