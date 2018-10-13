import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Segment from '../components/Segment'

import Typography from '@material-ui/core/Typography';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import { withStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  bigH: {
      color: 'white',
      font: '300 20vmin/50vh roboto',
      textAlign: 'center',
  },
  smallH: {
      color: 'white',
      font: '900 20vmin/50vh Lato',
      textAlign: 'center',
  },
  flexContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 10vh'
  },
  flexChild: {
    textAlign: 'center',
  },
  mainPaper: {
    backgroundColor: theme.palette.background.paper,
  },
  eachPost: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    margin: '0 5vh 24px 5vh'
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

class SliderContainer extends Component {
  sliderChange = (index, element) => {
      this.props.onClick(index);
  }

  render() {
    const blogEntries=[
      {title: 'How to fall in love',
      description: 'Follow these steps to unleash the passion in you...',
    date: 'December 17, 1994', },
    {title: 'Unlease the Power Within',
    description: 'Attend the ultimate seminar that will change your life...',
  date: 'November 11, 2017', },
    ];
    const {classes} = this.props
    return (
      <Carousel selectedItem={this.props.sliderSelectedItem}
         showThumbs={false} axis='vertical'
         showStatus={false}
         showIndicators={false}
         useKeyboardArrows={true}
         showArrows={false}
         onChange={this.sliderChange}
         >
        <Segment imgname={'welcome'}>
          <div className={classes.flexContainer}>
            <Typography className={classes.bigH} component="h1" variant="h1" gutterBottom>
              HELLO
            </Typography>
          </div>
        </Segment>
        <Segment imgname={'adventure'}></Segment>
        <Segment imgname={'life'}>
          <div className={classes.flexContainer}>
            <Grid container spacing={24}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <Typography component="h2" variant="h1" gutterBottom>
                      Latest News
                  </Typography>
                  <Grid container spacing={40} className={classes.cardGrid}>
                      {blogEntries.map(post => (
                        <Grid item key={post.title} xs={24}>
                          <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                              <CardContent>
                                <Typography component="h2" variant="h5">
                                  {post.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                  {post.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                  {post.description}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                  Continue reading...
                                </Typography>
                              </CardContent>
                            </div>
                            <Hidden xsDown>
                              <CardMedia
                                className={classes.cardMedia}
                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                title="Image title"
                              />
                            </Hidden>
                          </Card>
                        </Grid>
                      ))}
                  </Grid>
                </Grid>
            </Grid>
          </div>
        </Segment>
        <Segment imgname={'contact'}></Segment>
      </Carousel>
    );
  }
}

SliderContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderContainer);
