import React from 'react';
import { NavLink } from 'react-router-dom';
import WendingoBanner from '../../assets/images/banner/wendingo-banner.jpg';

const HowToPlay = () => {
  return (
    <>
     <img src={ WendingoBanner } className="banner" alt="silhouette of wendingo walking through forest"></img>
     <div>
            <h1 className="header-text">Mystic Campers Cryptid Scavenger Hunt: How To Play</h1>
            <ul className="check-list">
                <li>Visit the locations and complete the objectives.</li>
                <li>Document your findings with photos, notes, and sketches.</li>
                <li>Share your discoveries on social media with #MysticCampersCryptidHunt.</li>
                <li>Complete 3 or more challenges to earn a limited-edition Mystic Campers Cryptid Explorer Patch!</li>
            </ul>
            <br/>
            <p className="body-text">Will you be the one to finally prove these legends are real? <strong>Gear up, follow the clues, and embrace the unknown!</strong></p>
            <br/>

            <h2 className="header-text">Guidelines</h2>
            <ul className="bullet-list">
                <li><strong>Research:</strong> Familiarize yourself with the history and folklore of each cryptid before embarking on your journey.</li>
                <li><strong>Documentation:</strong> Keep a detailed journal of your findings, including photographs, sketches, and personal observations.</li>
                <li><strong>Respect:</strong> Always respect private property, local communities, and the natural environment during your hunt.</li>
                <li><strong>Safety:</strong> Ensure you are well-prepared for outdoor activities, including appropriate gear and knowledge of the terrain.</li>
            </ul>

            <NavLink to='/scavengerhunt' className='scvgr-button'>
                 Join the Hunt
            </NavLink>
        </div>
    </>
  );
};

export default HowToPlay;