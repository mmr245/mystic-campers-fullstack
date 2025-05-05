import React from 'react';
import { Link } from 'react-router-dom';
import WendingoBanner from '../../assets/images/banner/wendingo-banner.jpg';
import Eerie500 from '../../assets/images/blog/eerie500x500.jpg';
import FairyRing500 from '../../assets/images/blog/fairyring500x500.jpg';
import Wallowa500 from '../../assets/images/blog/wallowa500x500.jpg';


const Blog = () => {
  return (
    <>
      <img src={WendingoBanner} className="banner" alt="deer monster in a misty forest"/>
      <h1>Adventure Blog</h1>
            <div className="row">
                <div className="imgcolumn">
                    <img src={Eerie500} className="cardimg" style={{width:"100%"}} alt="trail through forest with lake bluff in the distance"/>
                </div>
                <div className="txtcolumn">
                    <h3 className='txtlink'><Link to="/brushwiththewendingo">A Brush with the Wendigo: My Night at Erie Bluffs State Park</Link></h3>
                    <h5 className="header-text">By Alex R., Mystic Campers Community Member</h5>
                    <p className="body-text">I’ve always been a skeptic when it comes to cryptid stories. Sure, I love a good ghost tale around the campfire, but I never thought I’d be the one telling a story that defies logic. That changed last weekend when I saw something I can’t explain at Erie Bluffs State Park.</p>
                    <p className="body-text">I think I saw a Wendigo.</p>
                </div>
            </div>

            <div className="row">
                <div className="imgcolumn">
                    <img src={FairyRing500} className="cardimg" style={{width:"100%"}} alt="circle of mushrooms around a tree"/>
                </div>
                <div class="txtcolumn">
                    <h3 className='txtlink'><Link to='/intotheunknown'>Into the Unknown: The Fairy Ring of Siuslaw National Forest</Link></h3>
                    <h5 className="header-text">By Jake Reynolds, Co-Founder & Head of Marketing, Mystic Campers</h5>
                    <p className="body-text">There are places in this world that feel… different. Places where the air is heavier, where the silence rings louder, where the forest itself seems to be watching.</p>
                    <p className="body-text">We found one of those places deep in Siuslaw National Forest—a place where the trees formed a perfect circle, the ground pulsed with an eerie glow, and time itself seemed to slip away. This is the story of The Fairy Ring</p>
                </div>
            </div>

            <div class="row">
                <div class="imgcolumn">
                    <img src={Wallowa500} className="cardimg" style={{width:"100%"}} alt="a lake under a star lit sky"/>
                </div>
                <div class="txtcolumn">
                    <h3 className='txtlink'><Link to='/thenightitstarted'>The Night That Started It All: The Mystic Campers Origin Story</Link></h3>
                    <h5 className="header-text">By Lena Carter, Co-Founder & President of Mystic Campers</h5>
                    <p className="body-text">Every great adventure starts with a mystery, and ours began on a cold autumn night at Wallowa Lake, Oregon—the night we saw something impossible.</p>
                  </div>
              </div>
    </>
  );
};

export default Blog;