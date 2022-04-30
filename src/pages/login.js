import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    useLocation,
    Redirect,
} from "react-router-dom";
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
} from '@chakra-ui/core';
import Container from 'components/container';
import { UpcomingEvents } from 'pages/create';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { usePersistedState } from 'hooks';
var uuid = require("uuid");
const { createHash } = require('crypto');

function LoginContainer(props) {

    if (props.isAdmin) {
        return <Redirect to="/update" />;
    } else {
        return (
            <div id='pw-frame'>
                <img src='/static/icon/acmicpc.png'/>
                <h1>Event Editor</h1>
                <h3>Access is locked to ACM ICPC Officers only. Please enter your password:</h3>
                <div id='pw'>
                    <Input onChange={props.onChange}/>
                </div>
            </div>
        );
    }
    
}

export default LoginContainer;
