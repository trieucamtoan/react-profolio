import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab : 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return (
        <div className = "projects-grid">
              <Card shadow = {5} style = {{minWidth: '300', margin: 'auto'}}>
                <CardTitle style = {{color : 'white', height: '176px', background :
                'url(http://www.watchosicongallery.com/icons/almighty-tic-tac-toe-2015-06-04/512.png) center / cover'}} >Tic-Tac-Toe</CardTitle>
                <CardText>
                  Implemented with JavaFX
                </CardText>
                <CardActions border>
                  <Button colored >Github</Button>
                  <Button colored >LiveDemo</Button>
                </CardActions>
                <CardMenu style = {{color : '#fff'}}>
                  <IconButton name = "share" />
                </CardMenu>
              </Card>

              <Card shadow = {5} style = {{minWidth: '300', margin: 'auto'}}>
                <CardTitle style = {{color : 'white', height: '176px', background :
                'url(https://i.pinimg.com/originals/e2/35/5d/e2355d3cbbc886313de8d644de8e2d15.jpg) center / cover'}} >Tokimon</CardTitle>
                <CardText>
                  Implemented with JavaFX
                </CardText>
                <CardActions border>
                  <Button colored >Github</Button>
                  <Button colored >CodePen</Button>
                  <Button colored >LiveDemo</Button>
                </CardActions>
                <CardMenu style = {{color : '#fff'}}>
                  <IconButton name = "share" />
                </CardMenu>
              </Card>


              <Card shadow = {5} style = {{minWidth: '300', margin: 'auto'}}>
                <CardTitle style = {{color : 'white', height: '176px', background :
                'url(http://creativeoverflow.net/wp-content/uploads/2016/11/money-20.png) center / cover'}} ></CardTitle>
                <CardText>
                  Implemented with JavaFX
                </CardText>
                <CardActions border>
                  <Button colored >Github</Button>
                  <Button colored >CodePen</Button>
                  <Button colored >LiveDemo</Button>
                </CardActions>
                <CardMenu style = {{color : '#fff'}}>
                  <IconButton name = "share" />
                </CardMenu>
              </Card>

              <Card shadow = {5} style = {{minWidth: '300', margin: 'auto'}}>
                <CardTitle style = {{color : 'white', height: '176px', background :
                'url(https://www.brandcrowd.com/gallery/brands/pictures/picture12690664338217.jpg) center / cover'}} >Green Food Challenge </CardTitle>
                <CardText>
                  Implemented with JavaFX
                </CardText>
                <CardActions border>
                  <Button colored >Github</Button>
                  <Button colored >CodePen</Button>
                  <Button colored >LiveDemo</Button>
                </CardActions>
                <CardMenu style = {{color : '#fff'}}>
                  <IconButton name = "share" />
                </CardMenu>
              </Card>
        </div>
      )
    } else if (this.state.activeTab === 1){
      return (
        <div className = "projects-grid">
          <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style = {{color : 'black', height: '176px', background :
            'url(https://steemitimages.com/640x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1513747110/anf4fdgsgjzjlpnocie5.png) center / cover'}} ></CardTitle>
            <CardText>
              Java App Connect 4 implemented with Monte Carlo Tree Search Algorithm
            </CardText>
            <CardActions border>
              <Button colored >Github</Button>
              <Button colored >CodePen</Button>
              <Button colored >LiveDemo</Button>
            </CardActions>
            <CardMenu style = {{color : '#fff'}}>
              <IconButton name = "share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2){
      return (
        <div className = "projects-grid">
          <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style = {{color : 'white', height: '176px', background :
            'url(https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/6600810/600/400/m2/fpnw/wm0/logo-source-41-.jpg?1561626625&s=759158d598ea85354c6dc38b1dfdfb0f) center / cover'}} ></CardTitle>
            <CardText>
              What Should I Eat App using Ruby On Rails and PostGreSQL
            </CardText>
            <CardActions border>
              <Button colored >Github</Button>
              <Button colored >CodePen</Button>
              <Button colored >LiveDemo</Button>
            </CardActions>
            <CardMenu style = {{color : '#fff'}}>
              <IconButton name = "share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3){
      return (
        <div className = "projects-grid">
          <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style = {{color : 'white', height: '176px', background :
            'url(http://www.watchosicongallery.com/icons/almighty-tic-tac-toe-2015-06-04/512.png) center / cover'}} >Tic-Tac-Toe</CardTitle>
            <CardText>
              Implemented with JavaFX
            </CardText>
            <CardActions border>
              <Button colored >Github</Button>
              <Button colored >CodePen</Button>
              <Button colored >LiveDemo</Button>
            </CardActions>
            <CardMenu style = {{color : '#fff'}}>
              <IconButton name = "share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }


  render(){
    return (
      <div className = "category-tabs">
        <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab : tabId})} ripple>
          <Tab>Software</Tab>
          <Tab>Artifical Intelligence</Tab>
          <Tab>Web Development</Tab>
          <Tab>Database</Tab>
          </Tabs>

          <Grid>
            <Cell col = {12}>
              <div classname = "content"> {this.toggleCategories()} </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
