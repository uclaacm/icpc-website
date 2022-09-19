import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
  Link,
  Flex,
  Button,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Drawer,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaDiscord,
} from 'react-icons/fa';
import {
  ImLink
} from 'react-icons/im';

const EventCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const hourToString = (hour) => {
    return ((hour%12) === 0 ? '12' : (hour % 12)) + ((hour < 12) ? ' AM' : ' PM');
  }

  const eventTime = () => {
    let weekday = ((Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(props.event.start_time))).toString();
    let date = ((Intl.DateTimeFormat('en-US', {month: 'short'}).format(props.event.start_time))).toString() + ' ' + props.event.start_time.getDate();
    let time = hourToString(props.event.start_time.getHours()) + ' - ' + hourToString(props.event.end_time.getHours());
    return weekday + ' | ' + date + ' | ' + time;
  }

  const EventTitle = () => {
    return (<Heading
      color={'brand.600'}
      fontSize={'2xl'}
      fontFamily={'body'}
      align={'left'}>
      {props.event.name}
    </Heading>);
  };
  const EventLinks = () => {
    return (
      <Stack isInline justifyContent="start" my={2}>
        <Link href={props.event.link} isExternal>
          <Box as={ImLink} h={6} w={6} />
        </Link>
        <Link href={props.event.discord} isExternal>
          <Box as={FaDiscord} h={6} w={6} />
        </Link>
      </Stack>
    );
  };
  const EventTimeAndLocation = (p) => {
    return (
      <Flex align="baseline" justify="start" mt={2}>
        <Text
          textTransform="uppercase"
          fontSize="sm"
          fontWeight={p.fontWeight}
          color="black"
          noOfLines={2}
          align='left'
        >
          {eventTime()} <br/> {props.event.location}
        </Text>
      </Flex>
    );
  };

  return (
    <Center py={6} w={["100%", "30%"]}>
      <Box
        h={'450px'}
        w={'full'}
        boxShadow={'lg'}
        rounded={'md'}
        bg={'white'}
        p={6}
        overflowY={'hidden'}>
        <Center
          h={'210px'}
          bg={'white'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          overflow={'hidden'}>
          <Image
            h={"100%"}
            src={props.event.image}
            fit={'cover'}
          />
        </Center>
        <Stack
          mt={10}
        >
          <EventTitle />
          <EventLinks />
          <EventTimeAndLocation />
          <Button onClick={onOpen}>Details</Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader><EventTitle /></ModalHeader>
              <ModalCloseButton />
              <ModalBody mt={"0px"} mb={'10px'}>
                <Center
                  h={'210px'}
                  bg={'white'}
                  mb={2}
                  pos={'relative'}
                  overflow={'hidden'}>
                  <Image
                    h={"100%"}
                    src={props.event.image}
                    layout={'fill'}
                  />
                </Center>
                <EventLinks />
                <EventTimeAndLocation fontWeight="bold" />
                <Text>{props.event.description}</Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Stack>
      </Box>
    </Center>
  );
}

export default EventCard;