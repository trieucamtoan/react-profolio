import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { Button } from 'react-bootstrap';
import avatar from '../pictures/image-circle.png'
import GFC from '../pictures/GreenFoodChallenge-logo.jpg'
import Tokimon from '../pictures/Tokimon-logo.jpg'
import TTT from '../pictures/Tic-tac-toe.png'
class Landing extends Component {
  render(){
    return (
      <div style = {{height: '100%', width : '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col = {12}>
            <img src = {avatar} alt="avatar" class = "avatar-img"/>
            <div className = "banner-text">
              <h1> Software Developer </h1>
              <h2> Software System | Artifical Intelligence | Computer Systems | Networking </h2>

              <div className = "social-links">

                <a href = "http://google.com" rel = "noopener noreferrer" target = "_blank">
                  <i className = "fa fa-linkedin-square"  aria-hidden = "true"/>
                </a>

                <a href = "http://google.com" rel = "noopener noreferrer" target = "_blank">
                  <i className = "fa fa-github-square"  aria-hidden = "true"/>
                </a>
              </div>

            </div>
          </Cell>

            <Cell col = {12}>
              <div className = "banner-text">
                <h3> Projects </h3>
                <Cell col = {12}>
                  <h4> Green Food Challenge </h4>
                  <img src = {GFC} alt="gfc" class = "gfc-img"/>
                  <img src = {Tokimon} alt="tokimon" class = "tokimon-img"/>
                  <img src = {TTT} alt="ttt" class = "ttt-img"/>
                </Cell>

              </div>



            </Cell>
          </Grid>
      </div>


    )
  }
}

export default Landing;
