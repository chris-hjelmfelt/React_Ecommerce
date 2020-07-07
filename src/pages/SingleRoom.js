import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';


export default class SingleRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }
  
  static contextType = RoomContext;
  
  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
      <div className="error">
        <h3>No such room could be found ... </h3>
        <Link to='/rooms' className='btn-primary'>back to rooms </Link>        
      </div>
      )
    }
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
      <StyledHero img={mainImg || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </StyledHero>   
      <section className="single-room">
        <div className="single-room-images">
        {defaultImg.map((item, index) => {
          return <img key={index} src={item} alt="room images" />;
        })}
        {/* Above displays only the images other than the Hero image. this displays all:
        {images.map((item, index) => {
          return <img key={index} src={item} alt="room images" />;
        })}
        */}
        </div>        
      </section>
      
      </>   
    )
  }
}
