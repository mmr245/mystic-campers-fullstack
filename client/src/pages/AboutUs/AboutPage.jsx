import React from 'react';
import { Link } from 'react-router-dom';
import BigfootTent from '../../assets/images/banner/bigfoot-camp-banner.jpg';
import BigfootBook from '../../assets/images/decorative/lore2.png';
import MonsterTeam from '../../assets/images/decorative/team2.png';


const About = () => {
  return (
    <>
        <img src={BigfootTent} className= "banner" alt="Bigfoot walking through forest near a tent" />
        
        <section>
            <h1 className="header-text">About Mystic Campers</h1>
            <p className="body-text">Welcome to Mystic Campers—where the wild meets the weird! We’re more than just a camping gear company; we create immersive outdoor experiences infused with mystery and adventure. From high-quality gear to interactive scavenger hunts and VR explorations, we fuel your curiosity and invite you to embrace the unknown. Whether you seek magical discoveries or unstoppable strength, Mystic Campers is your guide to exploring the uncharted. Gear up and get exploring!</p>
        </section>

        <section className='aboutgrid'>
            <div className="about">
                <img src={BigfootBook} className='about' alt="Bigfoot reading a book" />
                <h2 className='txtlink'><Link to="/lore">Our Lore</Link></h2>
                <p className="body-text">Discover the legends that inspire our gear. From Bigfoot’s hidden trails to the glowing eyes in the
                    dark, our products are crafted with stories in mind.</p>
            </div>
            <div className="about">
                <img src={MonsterTeam} className='about' alt="Bigfoot, Mothman, and Wendigo together" />
                <h2 className='txtlink'><Link to="/team">Meet The Team</Link></h2>
                <p className="body-text">Get to know the explorers, designers, and cryptid hunters behind Mystic Campers.</p>
            </div>
        </section>
    </>
  );
};

export default About;