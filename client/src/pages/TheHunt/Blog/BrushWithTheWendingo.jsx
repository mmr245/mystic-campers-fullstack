import React from 'react';
import { Link } from 'react-router-dom';
import Eerie500 from '../../../assets/images/blog/eerie500x500.jpg';


const BrushWithTheWendingo = () => {
  return (
    <>
      <div className="row">
        <p className="arrow"><Link to='/blog'>Blog (All)</Link></p> 
        <p className="arrow"><Link to='/intotheunknown'>&#8249; Previous Post</Link></p> 
      </div>

      <div className="row">
          <div class="blogleftcolumn">  
              <img src={ Eerie500 } className="cardimg" style={{width:"100%"}} alt="a trail through a forest with a lake buff in the distance"/>
          </div>
          <div className="blogrightcolumn">
              <h2>A Brush with the Wendigo: My Night at Erie Bluffs State Park </h2>
              <h5 className="header-text">By Alex R., Mystic Campers Community Member</h5>
              <p className="body-text">I’ve always been a skeptic when it comes to cryptid stories. Sure, I love a good ghost tale around the campfire, but I never thought I’d be the one telling a story that defies logic. That changed last weekend when I saw something I can’t explain at Erie Bluffs State Park.</p> 
              <p className="body-text">I think I saw a Wendigo.</p>
          </div>
      </div>

      <h3 className="header-text">A Solo Camping Trip Turns Strange</h3>
      <p className="body-text">I planned the trip as a solo retreat—just me, my tent, and the sound of Lake Erie’s waves crashing against the bluffs. Erie Bluffs is the kind of place that feels untouched, its dense forests and rugged trails giving off a quiet, almost eerie beauty.</p>
      <p className="body-text">The first day was peaceful. I hiked along the bluff trails, took some photos of the lake at sunset, and settled in by the fire with my book. Everything was normal… until the woods went silent.</p>
      <p className="body-text">I don’t mean the usual nighttime quiet. I mean dead silence. No crickets. No wind. No distant rustling. Just… nothing.</p>
      <p className="body-text">Then came the smell.</p>

      <h3 className="header-text">The Rot in the Air</h3>
      <p className="body-text">At first, I thought maybe something had died nearby—a deer carcass, maybe. But this was different. It was thick, overwhelming, like rotting meat left out in the summer heat. I grabbed my flashlight and scanned the tree line, expecting to see a raccoon or maybe even a coyote.</p>
      <p className="body-text">But what I saw wasn’t an animal.</p>
      <p className="body-text">It was tall—unnaturally tall. At least seven or eight feet, with skeletal limbs and stretched, pale skin. Its eyes reflected the light in an unnatural way, not like an animal’s but as if they were absorbing it. It stood just beyond the trees, motionless, watching. I couldn’t move. I couldn’t breathe. My body screamed at me to run, but I just stood there, locked in place.</p>
      <p className="body-text">Then, it spoke.</p>
      <p className="body-text">Not out loud, but inside my head—a voice that was distorted, overlapping, wrong. It whispered my name.</p>

      <h3 className="header-text">The Escape</h3>
      <p className="body-text">That was enough. I grabbed my keys, abandoned my campfire, and sprinted to my car, my heart pounding louder than my footsteps. I didn’t look back. I didn’t stop. When I reached my car and locked the doors, I forced myself to look at the tree line one last time. It was gone. No shadow. No figure. Just the silent, empty woods.</p>
      <p className="body-text">I sped out of there and didn’t stop until I reached a gas station an hour away.</p>

      <h3 className="header-text">What Did I See?</h3>
      <p className="body-text">I’ve read the legends of the Wendigo—an emaciated creature of folklore, tied to the Great Lakes region and Native American mythology. It’s said to be a spirit of endless hunger, luring people into the woods, mimicking voices to trap its victims.</p>
      <p className="body-text">I don’t know if that’s what I saw. Maybe my mind was playing tricks on me. Maybe it was a trick of the light.</p>
      <p className="body-text">Or maybe… Erie Bluffs hides something ancient.</p>
      <p className="body-text">I haven’t gone back. Not yet. But if anyone else has had an encounter near Lake Erie’s forests, I need to know—am I the only one?</p>

      <p className="body-text">Stay safe out there, campers. And if the woods go silent… run.</p>
      <p className="body-text">- Alex</p>
    </>
  );
};

export default BrushWithTheWendingo;