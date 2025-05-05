import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import FindAdventure from '../../assets/images/banner/findadventure-banner.jpg';
import Wallowa600 from '../../assets/images/blog/wallowa600.jpg';
import FairyRing600 from '../../assets/images/blog/fairyring600.jpg';



const Hunt = () => {
  return (
    <>
        <img src={FindAdventure} className='banner' alt='hand holding compass in a misty forest'/>
        <div>
            <h1 className='header-text'>Join the Hunt.</h1>
            <p className='body-text'>From the safety of your bed or out in the wild, join our cryptid hunt!</p>

            <div className='row'>
                <div className='leftcolumn'>
                    <h2>Adventure Blog</h2>
                  <div className='card'>
                    <img src={Wallowa600} className='cardimg' style={{width:'100%'}} alt='a lake under a star lit sky'/>
                    <h3 className='txtlink'><Link to='/thenightitstarted'>The Night That Started It All: The Mystic Campers Origin Story</Link></h3>
                    <h5 className='header-text'>By Lena Carter, Co-Founder & President of Mystic Campers</h5>
                    <p className='body-text'>Every great adventure starts with a mystery, and ours began on a cold autumn night at Wallowa Lake, Oregon—the night we saw something impossible.</p>
                  </div>

                  <div className='card'>
                    <img src={FairyRing600} className='cardimg' style={{width:'100%'}} alt='circle of mushrooms around a tree'/>
                    <h3 className='txtlink'><Link to='/intotheunknown'>Into the Unknown: The Fairy Ring of Siuslaw National Forest</Link></h3>
                    <h5 className='header-text'>By Jake Reynolds, Co-Founder & Head of Marketing, Mystic Campers</h5>
                    <p className='body-text'>There are places in this world that feel… different. Places where the air is heavier, where the silence rings louder, where the forest itself seems to be watching.</p>
                  </div>
                </div>

                <div className='rightcolumn'>
                    <h2>Games</h2>
                    <div className='card'>
                        <h3 className='header-text'>Cryptid Hangman</h3>
                        <p className='body-text'>Try out our cryptid themed hangman game!</p>
                        <NavLink to='/game' className='hunt-button'>
                          Play Now
                        </NavLink>
                    </div>

                    <div className='card'>
                      <h3 className='header-text'>Scavenger Hunt</h3>
                      <p className='body-text'>Join our community adventure and explore the wilderness with us! Participate in challenges, discover hidden treasures, and win amazing prizes. Get ready for an adventure like no other!</p>
                      <NavLink to='/scavengerhunt' className='hunt-button'>
                          Join The Hunt
                      </NavLink>
                    </div>
                </div>

              </div>
        </div>   
    </>
  );
};

export default Hunt;