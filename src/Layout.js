import React, { Component } from "react";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Feed,
    Statistic,
    Segment,
    Visibility,
    Input
} from 'semantic-ui-react'

import Routes from "./Routes";
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from "react-router-dom";


export default class Layout extends Component {
    
    render(){
 
       return (<Routes/>)
    }
}
