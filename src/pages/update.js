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
  Grid,
  GridItem,
  Textarea,
  Input,
  Select
} from '@chakra-ui/react';
import Container from 'components/container';
import { UpcomingEvents } from 'pages/create';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useMediaQuery } from 'hooks';
var uuid = require("uuid");

class UpdateContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventData: {
        image: undefined,
        name: undefined,
        day: undefined,
        date: undefined,
        time: undefined,
        location: undefined,
        description: undefined,
        link: undefined,
        discord: undefined,
      }
    }
    this.setCurrentEvent = this.setCurrentEvent.bind(this);
  }

  setCurrentEvent(event){
    this.setState({eventData: event});
  }
  
  render(){
    // const toast = useToast();
    // const isMobile = !useMediaQuery('(min-width: 768px)');
    return (
      <div className="home" >
        <Helmet>
          <title>Home | ACM ICPC at UCLA</title>
          <meta name="description" content="Welcome to ACM ICPC at UCLA. Learn more about who we are and why we do what we do!" />
          <meta name="keywords" content="acm,icpc,ucla,competitive,programming" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Home | ACM ICPC at UCLA" />
          <meta property="og:description" content="Welcome to ACM ICPC at UCLA. Learn more about who we are and why we do what we do!" />
          <meta property="og:url" content="https://icpc.uclaacm.com/" />
          <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
          <meta property="og:site_name" content="ACM ICPC at UCLA" />
        </Helmet>
        <Flex alignItems="flex-start" justifyContent="center" flexDirection="row">
          <Container w="50%">
            <Stack p={3} spacing={3} align="center" >
              <Heading as="h1" fontSize={['2xl', '3xl']}>Upcoming Events</Heading>
              <UpcomingEvents setCurrentEvent={this.setCurrentEvent}/>
            </Stack>
          </Container>
          <Container w="45%" className="update-form">
            <EventForm eventData={this.state.eventData} />
          </Container>
          
        </Flex>
      </div>
    );
  };
}

class EventForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      eventData: props.eventData,
      time: new Date()
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
    console.log(this.state.eventData);
    let res = await fetch('https://guarded-reaches-79446.herokuapp.com/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...this.state.eventData,
        start_time: this.state.eventData.start_time.toString(),
        end_time: this.state.eventData.end_time.toString()
      })
    });
    location.reload();
    console.log((await res.json()));
  }

  async deleteEvent(event){
    console.log(this.state.eventData);
    let res = await fetch('https://guarded-reaches-79446.herokuapp.com/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...this.state.eventData,
        start_time: this.state.eventData.start_time.toString(),
        end_time: this.state.eventData.end_time.toString()
      })
    });
    location.reload();
    console.log((await res.json()));
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(JSON.stringify(this.props));
    if(prevProps != this.props){
      this.setState({eventData: this.props.eventData});
    }
  }

  render(){
    return (
      // <Stack p={3} spacing={3} align="center" position="sticky" right="0">
      <Stack p={3} spacing={3} align="center">
        <Heading as="h1" fontSize={['2xl', '3xl']}>Details</Heading>
        <Button colorScheme="red" onClick={this.deleteEvent.bind(this)}>Delete</Button>
        <Input
            id="name" 
            placeholder={this.state.eventData.name===undefined ? "name": this.state.eventData.name} 
            value={this.state.eventData.name===undefined ? "": this.state.eventData.name}
            onChange={this.handleChange.bind(this)} />
        <label>
          From:
          <DatePicker 
              selected={this.state.eventData.start_time===undefined ? new Date() : this.state.eventData.start_time} 
              onChange={(date)=>{this.setState({eventData: {...this.state.eventData, start_time: date}})}} 
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeSelect 
              className="datepickers"/>
        </label>
        <label>
          To:
          <DatePicker 
              selected={this.state.eventData.end_time===undefined ? new Date() : this.state.eventData.end_time} 
              onChange={(date)=>{this.setState({eventData: {...this.state.eventData, end_time: date}})}} 
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeSelect 
              className="datepickers"/>
        </label>
        <Input id='location' 
            placeholder={this.state.eventData.location===undefined ? "location": this.state.eventData.location} 
            value={this.state.eventData.location===undefined ? "": this.state.eventData.location}
            onChange={this.handleChange.bind(this)}/>
        <Text mb="8px">description:</Text>
        <Textarea
            id='description' 
            placeholder={this.state.eventData.description===undefined ? "description": this.state.eventData.description}
            value={this.state.eventData.description===undefined ? "": this.state.eventData.description}
            size="sm"
            onChange={this.handleChange.bind(this)}
          
        />
        <Input 
            id='link' 
            placeholder={this.state.eventData.link===undefined ? "link": this.state.eventData.link} 
            value={this.state.eventData.link===undefined ? "": this.state.eventData.link}
            onChange={this.handleChange.bind(this)}/>
        <Input 
            id='discord'
            placeholder={this.state.eventData.discord===undefined ? "discord": this.state.eventData.discord} 
            value={this.state.eventData.discord===undefined ? "": this.state.eventData.discord}
            onChange={this.handleChange.bind(this)}/>

          <Input 
            id='image' 
            placeholder={this.state.eventData.image===undefined ? "image": this.state.eventData.image} 
            value={this.state.eventData.image===undefined ? "": this.state.eventData.image}
            onChange={this.handleChange.bind(this)}/>
        <Button colorScheme="blue" onClick={this.submitForm.bind(this)}>Submit</Button>
      </Stack>
    );
  }
}


export default UpdateContainer;
