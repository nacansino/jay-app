import React, { Component } from 'react';
import Slider from "react-slick";
import Segment from '../components/Segment'

import Typography from '@material-ui/core/Typography';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

import Fade from 'react-reveal/Fade'

class SliderContainer extends Component {
  render() {
    return (
      <Carousel showThumbs={false} axis='vertical' showStatus={false} useKeyboardArrows={true} showArrows={false}>
        <Segment imgname={'main'}></Segment>
        <Segment imgname={'adventure'}></Segment>
        <Segment imgname={'life'}></Segment>
      </Carousel>
    );
  }
}

export default SliderContainer;
