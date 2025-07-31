import React, {
  Fragment, Suspense, lazy,
} from 'react';
import {
  Routes,
  Route,
  Navigate,
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
} from '@chakra-ui/react';
import {
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  FaFacebook,
  FaDiscord,
  FaMedium,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';
import Container from 'components/container';
import MainContent from 'components/maincontent';
import { useMediaQuery, usePersistedState } from './hooks';
import { isatty } from 'tty';
const { createHash } = require('crypto');



const HomeContainer = lazy(() => import('pages/home'));
const EventsContainer = lazy(() => import('pages/events'));
const RegionalsContainer = lazy(() => import('pages/regionals'));
const TeamContainer = lazy(() => import('pages/team'));
const CreateContainer = lazy(() => import("pages/create"));
// import CreateContainer from './pages/create';
const UpdateContainer = lazy(() => import("pages/update"));
const LoginContainer = lazy(() => import("pages/login"));
const PrivacyPolicyContainer = lazy(() => import("pages/privacy"));

const FallbackView = (
  <h1>Loading</h1>
);

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();
  const isMobile = !useMediaQuery('(min-width: 768px)');
  const location = useLocation();
  const isAdmin = props.admin;

  const MenuContent = () => {
    return (
      <Fragment>
        <NavLink to='/' style={({isActive}) => ({color: isActive ? '#ff5479' : 'inherit'})}>
          <Button fontWeight="semibold" fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            home
          </Button>
        </NavLink>
        <NavLink end to='/events' style={({isActive}) => ({color: isActive ? '#ff5479' : 'inherit'})}>
          <Button fontWeight="semibold" fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            events
          </Button>
        </NavLink>
        <NavLink end to='/icpc' style={({isActive}) => ({color: isActive ? '#ff5479' : 'inherit'})}>
          <Button fontWeight='semibold' fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            competition
          </Button>
        </NavLink>
        <NavLink end to='/team' style={({isActive}) => ({color: isActive ? '#ff5479' : 'inherit'})}>
          <Button fontWeight='semibold' fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            team
          </Button>
        </NavLink>
        <a href="https://codesprintla.uclaacm.com/">
          <Button fontWeight='semibold' fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            codesprint
          </Button>
        </a>
        
      </Fragment>
    )};


  const HiddenContent = () => {
    return (
      <Fragment>
        <NavLink end to='/update' style={({isActive}) => ({color: isActive ? '#ff5479' : 'inherit'})}>
          <Button fontWeight="semibold" fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            update
          </Button>
        </NavLink>
        <NavLink to='/create' style={({isActive}) => ({color: isActive ? '#ff5479' : 'inherit'})}>
          <Button fontWeight="semibold" fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            create
          </Button>
        </NavLink>
        <NavLink exact to='/' style={({isActive}) => ({color: isActive ? '#ff5479' : 'inherit'})} onClick={props.logout}>
          <Button fontWeight="semibold" fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
            log out
          </Button>
        </NavLink>
      </Fragment>
    )};

  return (
    <Box
      as="nav"
      bg="secondary"
      color="primary"
      py={4}
      px={0}
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
          <NavLink end to="/">
            <Stack
              isInline
              justify="center"
              alignItems="center"
            >
              <Image h="32px" src="static/icon/acmicpc.png" />
            </Stack>
          </NavLink>
          <Box mx="auto" />
          {!isMobile && (
            <Stack isInline>
              <MenuContent />
              {isAdmin && (<HiddenContent />)}
            </Stack>
          )}
          {isMobile && (
            <Stack isInline>
              {!isOpen && (
                <IconButton ref={btnRef} size="sm" colorScheme="brand" aria-label="Open menu" icon={<TriangleDownIcon />} onClick={onOpen} />
              )}
              {isOpen && (
                <IconButton ref={btnRef} size="sm" colorScheme="brand" aria-label="Close menu" icon={<TriangleUpIcon />} onClick={onClose} />
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
                  {isAdmin && (<HiddenContent />)}
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
              <Box as={FaFacebook} w={8} h={8} />
            </Link>
            <Link href="https://discord.gg/3a6kx2y9" isExternal>
              <Box as={FaDiscord} w={8} h={8} />
            </Link>
            <Link href="https://www.instagram.com/acm.ucla" isExternal>
              <Box as={FaInstagram} w={8} h={8} />
            </Link>
            <Link href="https://medium.com/techatucla" isExternal>
              <Box as={FaMedium} w={8} h={8} />
            </Link>
            <Link href="https://github.com/uclaacm" isExternal>
              <Box as={FaGithub} w={8} h={8} />
            </Link>
          </Stack>
        </Box>
        <Box>
          <Heading my={2} fontSize="sm">reach us at</Heading>
          <Heading my={2} fontSize="sm" fontWeight="regular" as="a" href="mailto:icpc@uclaacm.com">icpc@uclaacm.com</Heading>
        </Box>
        <Box>
          <Button
            as="a"
            href="http://eepurl.com/c5pE6P"
            target="_blank"
            fontFamily="heading"
            fontWeight="semibold"
            size="sm"
            colorScheme="brand"
            variant="solid"
            rounded="lg"
            py={5}
            my={2}
          >
            join the ACM mailing list
          </Button>
          <NavLink end to='/privacy' style={({isActive}) => ({color: isActive ? '#ff5479' : 'inherit'})}>
            <Button fontWeight='semibold' fontFamily="heading" size="sm" variant="transparent" _hover={{color: "brand.500"}}>
              privacy policy
            </Button>
          </NavLink>
        </Box>
      </SimpleGrid>
      <Link href="https://www.netlify.com" isExternal>
        <Image padding="10px" margin="auto" src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
      </Link>
      <Box my="16px" />
      <Heading width="100%" textAlign="center" fontSize="sm" fontWeight="regular">
        © ACM ICPC at UCLA 2024
      </Heading>
    </Container>
  </Box>
);

const App = () => {
  let [_, __] = usePersistedState("_", 0);
  const isAdmin = () => {
    return createHash('sha256').update(_).digest('hex') === '749f09bade8aca755660eeb17792da880218d4fbdc4e25fbec279d7fe9f65d70';
  }
  const handle_cred = (e) => {
    __(e.target.value);
  };
  const logout = (e) => {
    __(0);
  }

  return (
    <div>
      <Navbar admin={isAdmin()} logout={logout}/>
      <Suspense fallback={FallbackView}>
        <MainContent>
          <Routes>
            <Route exact path="/" element={<HomeContainer />} />
            <Route exact path="/events" element={<EventsContainer />} />
            <Route exact path="/icpc" element={<RegionalsContainer />} />
            <Route exact path="/team" element={<TeamContainer />} />
            <Route exact path="/privacy" element={<PrivacyPolicyContainer />} />
            <Route exact path="/admin" element={<LoginContainer isAdmin={isAdmin()} onChange={handle_cred}/>} />
            <Route exact path="/create" element={isAdmin() ? <CreateContainer/> : <Navigate to="/admin" />} />
            <Route exact path="/update" element={isAdmin() ? <UpdateContainer/> : <Navigate to="/admin" />} />
            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
        </MainContent>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
