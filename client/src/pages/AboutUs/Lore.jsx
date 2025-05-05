import React from 'react';
import CanoeBanner from '../../assets/images/banner/canoe-banner.jpg';

const Lore = () => {
  return (
    <>
       
        <img src={CanoeBanner} className='banner' alt="canoe on a mountain lake" />
      
        <div>
                <h1 className='header-text'>Our Lore</h1>
                <p className='body-text'>It all started on a crisp autumn night at Wallowa Lake, Oregon—a place known for its breathtaking scenery, deep waters, and the whispered tales of a lurking lake monster. Three lifelong friends—Lena, Jake, and Sam—weren’t just there for a weekend getaway. They were on a mission. Armed with high-tech camping gear, thermal drones, and an old fisherman’s mysterious, hand-drawn map, they were determined to uncover the truth.</p>
                <p className='body-text'>Local legends spoke of Wally, a massive, shadowy creature said to glide beneath the lake’s surface, only revealing itself under the light of a full moon. Most dismissed it as folklore, but the trio? They wanted proof.</p>
                <p className='body-text'>As they set up camp near the shore, strange occurrences began. Their drone batteries drained mysteriously. Ripples formed in the otherwise still water, though no wind blew. And then, just after midnight, they saw it—a massive, serpentine silhouette cutting through the misty lake, its glowing eyes locking onto them for a split second before vanishing into the depths.</p>
                <p className='body-text'>Fueled by their discovery and the thrill of the unknown, they realized something: adventure wasn’t just about hiking trails and campfires—it was about embracing the mystery of the wild. That night, beneath the eerie glow of the moon, the idea for Mystic Campers was born.</p>
                <p className='body-text'>Today, Mystic Campers isn’t just about selling camping gear—it’s about crafting experiences. From high-tech camping equipment to interactive scavenger hunts, the company inspires adventurers to seek out the unknown, just like that night at Wallowa Lake.</p>
                <p className='body-text'>The wild is calling, and the mysteries are waiting. Are you ready to explore?</p>
            </div>
    </>
  );
};

export default Lore;