import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Badge,
  SimpleGrid,
  Box,
  Link,
  Input,
  Textarea,
  Button
} from '@chakra-ui/core';
import {
  FaFacebook,
  FaDiscord,
} from 'react-icons/fa';
import Container from 'components/container';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import HomeContainer from './update';

class UpcomingEvents extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        eventsData: null,
    }
  }
  render(){
    const start = 0;
    return (
      <Flex wrap="wrap" textAlign="center" justify="space-evenly" >
        {this.state.eventsData ? this.state.eventsData.map((event, index) => (
          <Box key={index} w={["100%", "400px"]} rounded="lg" p={6} onClick={()=>{this.props.setCurrentEvent(event)}}>
            <Image src={event.image} rounded="lg" />
            <Flex align="baseline" mt={2}>
              <Text
                ml={2}
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="brand.600"
              >
                {((new Intl.DateTimeFormat('en-US', {weekday: 'short'})).format(event.start_time)).toString()}
                {' '}
                &bull;
                {' '}
                {((new Intl.DateTimeFormat('en-US', {month: 'short'}).format(event.start_time))).toString() + ' ' + event.start_time.getDate()}
                {' '}
                &bull;
                {' '}
                {event.start_time.getHours() + ' - ' + event.end_time.getHours()}
                {' '}
                &bull;
                {' '}
                {event.location}
              </Text>
            </Flex>
            <Heading as="h4" fontSize={['md', 'lg']} mt={2}>{event.name}</Heading>
            <Stack isInline justifyContent="center" my={2}>
              <Link href={event.facebook} isExternal>
                <Box as={FaFacebook} size={6} />
              </Link>
              <Link href={event.discord} isExternal>
                <Box as={FaDiscord} size={6} />
              </Link>
            </Stack>
            <Text>{event.description}</Text>
          </Box>
        )) : <p>getting events...</p>}
      </Flex>
    );
  }
  async componentDidMount(){
    let res = await fetch('https://guarded-reaches-79446.herokuapp.com/events'//, //{
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    );
    console.log(res.status);
    let eventsData = await res.json()
    this.setState({
        eventsData: eventsData.map((item) => ({
          ...item,
          start_time: new Date(item.start_time),
          end_time: new Date(item.end_time)
        }))
    });
  }
}

const eventData = {
  name: "",
  start_time: new Date(),
  end_time: new Date(),
  location: "", 
  description: "",
  facebook: "",
  discord: "",
}
const CreateContainer = (props) => (
  <div className="events">
    <Container>
      <Stack pb={10} spacing={10}>
        <EventForm eventData={eventData}></EventForm>
      </Stack>
    </Container>
  </div>
);

class EventForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      eventData: props.eventData
    }
  }
  
  handleChange(event){
     if(this.state.eventData){
       this.setState({eventData: {...this.state.eventData, [event.target.id]: event.target.value }});
     } else {
      this.setState({eventData: {[event.target.placeholder]: event.target.value }});
     }
  }

  async submitForm(event){
    if (!this.state.eventData.name){
      alert("Event name is required")
      return
    }
    let res = await fetch('https://guarded-reaches-79446.herokuapp.com/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pkey: uuidv4(), 
        ...this.state.eventData,
        start_time: this.state.eventData.start_time.toString(),
        end_time: this.state.eventData.end_time.toString()
      })
    });
    alert('Created!');
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(JSON.stringify(this.props));
    if(prevProps != this.props){
      this.setState({eventData: this.props.eventData});
    }
  }

  render(){
    return (
      <Stack p={3} spacing={3} align="center">
        <Heading as="h1" fontSize={['2xl', '3xl']}>Details</Heading>
        <Input id="name" placeholder="name" onChange={this.handleChange.bind(this)} />
        <label>
          From: 
          <DatePicker 
              selected={this.state.eventData.start_time===undefined ? new Date() : this.state.eventData.start_time} 
              onChange={(date)=>{this.setState({eventData: {...this.state.eventData, start_time: date}})}} 
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeSelect 
              className="datepickers"
              />
        </label>
        <label>
          To:
          <DatePicker 
              selected={this.state.eventData.end_time===undefined ? new Date() : this.state.eventData.end_time} 
              onChange={(date)=>{this.setState({eventData: {...this.state.eventData, end_time: date}})}} 
              dateFormat="MM/dd/yyyy h:mm aa"
              className="datepickers"
              showTimeSelect />
        </label>
        <Input id='location' placeholder="location" onChange={this.handleChange.bind(this)}/>
        <Text mb="8px">description:</Text>
        <Textarea
          id='description' placeholder="description"
          size="sm"
          onChange={this.handleChange.bind(this)}
        />
        <Input id='facebook' placeholder="facebook" onChange={this.handleChange.bind(this)}/>
        <Input id='discord'placeholder="discord" onChange={this.handleChange.bind(this)}/>
        <Input id='image'placeholder="image" onChange={this.handleChange.bind(this)}/>
        <Button colorScheme="blue" onClick={this.submitForm.bind(this)}>Submit</Button>
      </Stack>
    );
  }
}
export { UpcomingEvents };
export default CreateContainer;
