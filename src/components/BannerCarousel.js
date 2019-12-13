import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button, Container, Card, CardMedia} from '@material-ui/core'

class BannerCarousel extends React.Component{

    state = {
        items : [
          {
              name: "Random Name #1",
              description: "Probably the most random thing you have ever seen!",
                thumbnail: "https://cf.shopee.co.id/file/9ffa19efc9265e6655af01e17cbffa37_xxhdpi",
          },
          {
              name: "Random Name #2",
              description: "Hello World!",
              thumbnail: "https://cf.shopee.co.id/file/8bb1856f0c216ec88d709a32ad861a08",
          }
        ],
        banners:[
            'https://cf.shopee.co.id/file/c8234650fc82ba7d43ee66b7d5063628_xxhdpi',
            'https://cf.shopee.co.id/file/9ffa19efc9265e6655af01e17cbffa37_xxhdpi',
            'https://cf.shopee.co.id/file/fdc1d30baf0ea1bc30e32a6066e19ab2',
        ],
        autoPlay: true,
        timer: 800,
        animation: "slide",
        indicators: true
      }

    render(){
        return(
            <Container style={{paddingTop:'16px', }}>
                <Carousel
                autoPlay={this.state.autoPlay}
                timer={this.state.timer}
                animation={this.state.animation}
                indicators={this.state.indicators}
            >
            {
                this.state.banners.map( (item, index) => (
                    <CarouselItem key={index} item={item} />
                ))
            }
          </Carousel>
            </Container>
        )
    }
}

const CarouselItem = (props)=>
{
    return (
        <>
        {/* <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
 
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper> */}

        <Card>
            <CardMedia style={{height:'350px' , }}
                image={props.item}
                // title={props.item.name}
                />
        </Card>
        </>
    )
}

export default BannerCarousel