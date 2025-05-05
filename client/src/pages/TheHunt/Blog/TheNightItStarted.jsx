import React from 'react';
import { Link } from 'react-router-dom';
import Wallowa500 from '../../../assets/images/blog/wallowa500x500.jpg'

const TheNightItStarted = () => {
  return (
    <>
      <div className="row">
        <p className="arrow"><Link to='/blog'>Blog (All)</Link></p> 
        <p className="arrow"><Link to='/intotheunknown'>Next Post &#8250;</Link></p> 
      </div>
            
      <div className="row">
          <div className="blogleftcolumn">  
              <img src={ Wallowa500 } className="cardimg" style={{width:"100%"}} alt="a lake under a star lit sky"/>
          </div>
          <div className="blogrightcolumn">
              <h2>The Night That Started It All: The Mystic Campers Origin Story</h2>
              <h5 className="header-text">By Lena Carter, Co-Founder & President of Mystic Campers</h5>
              <p className="body-text">Every great adventure starts with a mystery, and ours began on a cold autumn night at Wallowa Lake, Oregon—the night we saw something impossible.</p> 

              <h3 className="header-text">The Legend That Lured Us In</h3>
              <p className="body-text">It all started as a joke. We had heard the local legends about a massive, shadowy creature lurking in the depths of Wallowa Lake—some called it “Wally,” others swore it was a prehistoric holdover. Skeptics dismissed it as drunken fishermen’s tales, but for us? It was an irresistible challenge.</p>
              <p className="body-text">Jake, Sam, and I had always been the kind of people who ran toward the unknown, not away from it. Armed with our best camping gear, a couple of thermal drones, and an old hand-drawn map from a local shop owner who claimed his grandfather had “seen the beast,” we set out for a weekend of monster hunting.</p>
          </div>
      </div>
      <h3 className="header-text">Strange Signs in the Night</h3>
      <p className="body-text">The first day was uneventful—just a classic Oregon camping trip with crisp mountain air, towering pines, and the glassy lake stretching out before us. We paddled out into the water, scanning the water, but nothing. Just fish, a few birds, and the occasional ripple from a distant boat.</p>
      <p className="body-text">But everything changed that night.</p>
      <p className="body-text">As we sat by the fire, the lake became eerily still. The usual sounds of the wilderness—chirping crickets, rustling leaves—went silent. The air felt thick, electric, like the moment before a thunderstorm. Then, the water moved.</p>
      <p className="body-text">Not like a fish breaking the surface. Not like a breeze disturbing the lake. Something massive shifted beneath the waves, sending a slow, deliberate ripple outward. We scrambled for our gear. Thermal cameras picked up nothing, but Jake’s drone, flying overhead, suddenly lost connection and plummeted into the water. Sam and I rushed to the shoreline, straining our eyes into the dark mist rolling over the surface.</p>
      <p className="body-text">Then, we saw it.</p>
      <p className="body-text">A dark silhouette, long and serpentine, gliding just below the surface. Two faintly glowing eyes locked onto us for the briefest second—then it vanished. The water erupted in a massive splash, nearly knocking Sam off balance.</p>

      <h3 className="header-text">The Moment That Changed Everything</h3>
      <p className="body-text">We sat in stunned silence for what felt like an eternity. Had we really seen it? Could it have been a trick of the light? A drifting log? A mass hallucination?</p>
      <p className="body-text">But deep down, we knew.</p>
      <p className="body-text">That night, huddled around our dying campfire, Mystic Campers was born. We realized that adventure wasn’t just about hiking trails or setting up the perfect tent—it was about embracing the mystery of the world around us.</p>

      <h3 className="header-text">Why We Created Mystic Campers</h3>
      <p className="body-text">From that night on, we made it our mission to design gear for true adventurers—for the ones who dare to explore the unknown, the ones who believe in stories, in myths, in the possibility that there’s more to this world than we can explain.</p>
      <p className="body-text">Today, Mystic Campers isn’t just a gear company. It’s a community of explorers, thrill-seekers, and believers. Whether you’re tracking Bigfoot in the Pacific Northwest, scanning the skies for the Mothman, or just telling ghost stories by the fire, we’re here to fuel your adventure.</p>
      <p className="body-text">So, the question is: What mysteries will you chase?</p>

      <p className="body-text">Gear up, follow the clues, and embrace the unknown.</p>
      <p className="body-text">- Lena</p>
    </>
  );
};

export default TheNightItStarted;