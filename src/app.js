import React, {Component, Suspense, lazy} from 'react';
import {useMediaQuery} from './hooks';
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
  Text,
  Box,
  Image,
  Stack,
  Button,
  Heading,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/core';
import Container from 'component/container';
import MainContent from 'component/maincontent';

const HomeContainer = lazy(() => import('container/home'));
const EventsContainer = lazy(() => import('container/events'));
const RegionalsContainer = lazy(() => import('container/regionals'));
const TeamContainer = lazy(() => import('container/team'));
const ContactContainer = lazy(() => import('container/contact'));
const FallbackView = (
  <h1>Loading</h1>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();
  const isMobile = !useMediaQuery('(min-width: 500px)');

  return (
    <Box
      as="nav"
      bg='primary'
      color="secondary"
      p={4}
      position="fixed"
      width="100vw"
      borderBottom="2px"
      borderColor="red.500"
      zIndex={9999}
    >
      <Container>
        <Flex
          alignItems='center'>
          <NavLink exact to='/'>
            <Stack isInline justify="center" alignItems="center">
              <Image src="/static/icon/logo64.png" size="32px" />
              {!isMobile && (
                <Heading as="h3" fontSize="24px">
                  acm.
                  <span style={{
                    background: "-webkit-linear-gradient(#ff8383 40%, #d73762 100%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                  }}>icpc</span>
                </Heading>
              )}
            </Stack>
          </NavLink>
          <Box mx='auto' />
          {!isMobile && (
            <Stack isInline>
              <NavLink to='/events' activeStyle={{color: "red"}}>
                <Button size="sm" variant="transparent" _hover={{color: "red.500"}}>
                  Events
                </Button>
              </NavLink>
              <NavLink to='/icpc' activeStyle={{color: "red"}}>
                <Button size="sm" variant="transparent" _hover={{color: "red.500"}}>
                  Regionals
                </Button>
              </NavLink>
              <NavLink to='/team' activeStyle={{color: "red"}}>
                <Button size="sm" variant="transparent" _hover={{color: "red.500"}}>
                  Our Team
                </Button>
              </NavLink>
              <NavLink to='/contact' activeStyle={{color: "red"}}>
                <Button size="sm" variant="transparent" _hover={{color: "red.500"}}>
                  Contact
                </Button>
              </NavLink>
              <Box mx='2px' />
              <Button
                size="sm"
                variantColor="red"
                variant="solid"
                onClick={() =>
                    toast({
                      title: "Applications are not open.",
                      description: "Hi! Applications are not open yet. Check back around Novemeber.",
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    })
                }
              >
                Apply Now!
              </Button>
            </Stack>
          )}
          {isMobile && (
            <Stack isInline>
              <Button
                size="sm"
                variantColor="red"
                variant="solid"
                onClick={() =>
                    toast({
                      title: "Applications are not open.",
                      description: "Hi! Applications are not open yet. Check back around Novemeber.",
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    })
                }
              >
                Apply Now!
              </Button>
              <Box mx='2px' />
              {!isOpen && (
                <IconButton ref={btnRef} size="sm" variantColor="red" aria-label="Open menu" icon="triangle-down" onClick={onOpen} />
              )}
              {isOpen && (
                <IconButton ref={btnRef} size="sm" variantColor="red" aria-label="Close menu" icon="triangle-up" onClick={onClose} />
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
              bg="primary"
              color="secondary"
            >
              {/* <DrawerCloseButton /> */}
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <Stack>
                  <NavLink to='/events' activeStyle={{color: "red"}}>
                    <Button size="sm" variant="transparent" _hover={{color: "red.500"}}>
                      Events
                    </Button>
                  </NavLink>
                  <NavLink to='/icpc' activeStyle={{color: "red"}}>
                    <Button size="sm" variant="transparent" _hover={{color: "red.500"}}>
                      Regionals
                    </Button>
                  </NavLink>
                  <NavLink to='/team' activeStyle={{color: "red"}}>
                    <Button size="sm" variant="transparent" _hover={{color: "red.500"}}>
                      Our Team
                    </Button>
                  </NavLink>
                  <NavLink to='/contact' activeStyle={{color: "red"}}>
                    <Button size="sm" variant="transparent" _hover={{color: "red.500"}}>
                      Contact
                    </Button>
                  </NavLink>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  )
};

const Footer = () => {
  return (
    <Box p={3} bg="primary" color="secondary" style={{marginBottom: '0px', bottom: '0px', left: '0px', right: '0px'}}>
      <Container>
        <Heading>Some Text</Heading>
      </Container>
    </Box>
  );
};

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Suspense fallback={FallbackView}>
        <Switch>
          <MainContent>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route exact path="/events">
              <EventsContainer />
            </Route>
            <Route exact path="/icpc">
              <RegionalsContainer />
            </Route>
            <Route exact path="/team">
              <TeamContainer />
            </Route>
            <Route exact path="/contact">
              <ContactContainer />
            </Route>
            <Redirect to="/" />
          </MainContent>
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
