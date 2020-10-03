import React, {
  Fragment, Suspense, lazy,
} from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink,
  withRouter,
  useLocation,
} from 'react-router-dom';

import {
  Flex,
  Box,
  SimpleGrid,
  Image,
  Link,
  Stack,
  Button,
  Heading,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useToast,
} from '@chakra-ui/core';
import {
  FaFacebook,
  FaDiscord,
  FaMedium,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';
import Container from 'components/container';
import MainContent from 'components/maincontent';
import { useMediaQuery } from './hooks';

const HomeContainer = lazy(() => import('pages/home'));
const EventsContainer = lazy(() => import('pages/events'));
const RegionalsContainer = lazy(() => import('pages/regionals'));
const TeamContainer = lazy(() => import('pages/team'));
const FallbackView = (
  <h1>Loading</h1>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();
  const isMobile = !useMediaQuery('(min-width: 768px)');

  const MenuContent = () => {
    return (
      <Fragment>
        <NavLink to='/events' activeStyle={{color: '#ff5479'}}>
          <Button fontWeight="semibold" fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            events
          </Button>
        </NavLink>
        <NavLink to='/icpc' activeStyle={{color: '#ff5479'}}>
          <Button fontWeight='semibold' fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            regionals
          </Button>
        </NavLink>
        <NavLink to='/team' activeStyle={{color: '#ff5479'}}>
          <Button fontWeight='semibold' fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            team
          </Button>
        </NavLink>
      </Fragment>
    )};

  return (
    <Box
      as="nav"
      bg="secondary"
      color="primary"
      p={4}
      position="fixed"
      width="100vw"
      borderBottom="2px"
      borderColor="brand.500"
      zIndex={9999}
    >
      <Container>
        <Flex
          alignItems="center"
        >
          <NavLink exact to="/">
            <Stack
              isInline
              justify="center"
              alignItems="center"
            >
              {!isMobile && (
                <Image h="32px" src="static/icon/acmicpc.png" />
              )}
              {isMobile && (
                <Image h="32px" src="static/icon/logo64.png" />
              )}
            </Stack>
          </NavLink>
          <Box mx="auto" />
          {!isMobile && (
            <Stack isInline>
              <MenuContent />
              <Box mx="2px" />
              <Button
                fontFamily="heading"
                fontWeight="semibold"
                size="sm"
                variantColor="brand"
                variant="solid"
                onClick={() =>
                    toast({
                      title: "Applications are not open.",
                      description: "Hi, thanks for showing interest! Applications are not open yet (-_-;). Check back around Novemeber for the ACM Intern/Officer Application Form.",
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    })}
              >
                apply now!
              </Button>
            </Stack>
          )}
          {isMobile && (
            <Stack isInline>
              <Button
                fontFamily="heading"
                fontWeight="semibold"
                size="sm"
                variantColor="brand"
                variant="solid"
                onClick={() =>
                  toast({
                    title: "Applications are not open.",
                    description: "Hi, thanks for showing interest! Applications are not open yet (-_-;). Check back around Novemeber for the ACM Intern/Officer Application Form.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  })}
              >
                apply
              </Button>
              {!isOpen && (
                <IconButton ref={btnRef} size="sm" variantColor="brand" aria-label="Open menu" icon="triangle-down" onClick={onOpen} />
              )}
              {isOpen && (
                <IconButton ref={btnRef} size="sm" variantColor="brand" aria-label="Close menu" icon="triangle-up" onClick={onClose} />
              )}
            </Stack>
          )}
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent
              bg="secondary"
              color="primary"
            >
              {/* <DrawerCloseButton /> */}
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <Stack>
                  <MenuContent />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  )
};

const Footer = () => (
  <Box
    p={3}
    bg="primary"
    color="secondary"
    style={{
      marginBottom: '0px', bottom: '0px', left: '0px', right: '0px',
    }}
  >
    <Container narrow>
      <SimpleGrid minChildWidth="180px" textAlign="center" spacing="16px">
        <Box>
          <Heading my={2} fontSize="sm">find us on social media</Heading>
          <Stack isInline justifyContent="center">
            <Link href="https://www.facebook.com/groups/ucla.icpc" isExternal>
              <Box as={FaFacebook} size={8} />
            </Link>
            <Link href="https://discord.gg/eWmzKsY" isExternal>
              <Box as={FaDiscord} size={8} />
            </Link>
            <Link href="https://www.instagram.com/acm.ucla" isExternal>
              <Box as={FaInstagram} size={8} />
            </Link>
            <Link href="https://medium.com/techatucla" isExternal>
              <Box as={FaMedium} size={8} />
            </Link>
            <Link href="https://github.com/uclaacm" isExternal>
              <Box as={FaGithub} size={8} />
            </Link>
          </Stack>
        </Box>
        <Box>
          <Heading my={2} fontSize="sm">reach us at</Heading>
          <Heading my={2} fontSize="sm" fontWeight="regular" as="a" href="mailto:uclaicpc@gmail.com">uclaicpc@gmail.com</Heading>
        </Box>
        <Box>
          <Button
            as="a"
            href="http://eepurl.com/c5pE6P"
            target="_blank"
            fontFamily="heading"
            fontWeight="semibold"
            size="sm"
            variantColor="brand"
            variant="solid"
            my={2}
          >
            join the ACM mailing list
          </Button>
        </Box>
      </SimpleGrid>
      <Link href="https://www.netlify.com" isExternal>
        <Image padding="10px" margin="auto" src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
      </Link>
      <Box my="16px" />
      <Heading width="100%" textAlign="center" fontSize="sm" fontWeight="regular">
        © ACM ICPC at UCLA 2020
      </Heading>
    </Container>
  </Box>
);

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Suspense fallback={FallbackView}>
        <MainContent>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/events" component={EventsContainer} />
            <Route exact path="/icpc" component={RegionalsContainer} />
            <Route exact path="/team" component={TeamContainer} />
            <Redirect to="/" />
          </Switch>
        </MainContent>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
