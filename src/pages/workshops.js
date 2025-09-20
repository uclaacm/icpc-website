import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Button,
  Box,
  Divider,
  useToast,
} from '@chakra-ui/react';
import Container from 'components/container';
import Sponsor from "components/sponsor";
import { UpcomingEvents } from 'pages/events';

import { useMediaQuery } from 'hooks';

const WorkshopsContainer = () => {
  const toast = useToast();
  const isMobile = !useMediaQuery('(min-width: 768px)');
  return (
    <div className="workshops">
    </div>
  );
};

export default WorkshopsContainer;
