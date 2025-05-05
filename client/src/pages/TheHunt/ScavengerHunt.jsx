import React from 'react';
import { NavLink } from 'react-router-dom';
import BigfootBanner from '../../assets/images/banner/bigfoot-banner.jpg';
import CryptidsIcon from '../../assets/images/icons/cryptids.png';

const ScavengerHunt = () => {
  return (
    <>
        <img src={BigfootBanner} className="banner" alt="silhouette of bigfoot walking through forest"/>
        <h1 className="header-text">Mystic Campers Cryptid Scavenger Hunt: Seek the Legends</h1>
        <p className="body-text">Get ready for the ultimate adventure as you explore some of the most legendary cryptid hotspots in the U.S.! Armed with your gear and curiosity, you’ll follow in the footsteps of Bigfoot, the Mothman, the Wendigo, and more—unraveling their mysteries one clue at a time. Are you brave enough to face the unknown?</p>
        <NavLink to='/howtoplay' className='scvgr-button'>
            How to Play
        </NavLink>

        <h2>Scavenger Hunt Locations & Challenges</h2>

        <section className="scavenger-hunt">
        
            <div className="row"> { /* Bigfoot */ }
                <div className="column1">
                    <img src={ CryptidsIcon } alt="Silhouette of Bigfoot, Mothman, and Wendingo"></img>
                </div>
                <div className="column2">
                    <h3 className="header-text">Bigfoot’s Trail – Northern California</h3>
                    <div className="bullet-text">
                        <span className="icon">📍</span>
                        <span className="content"><strong>Location:</strong> Dense forests of Del Norte, Humboldt, and Mendocino Counties</span>
                    </div>

                    <div className="bullet-text">
                        <span className="icon">🔍</span>
                        <span className="content"><strong>Objective:</strong> Search for footprints, broken tree limbs, and strange howls deep in the woods. Take a photo of something that could be “evidence” of Bigfoot’s presence!</span>
                    </div>
                </div>
            </div>
            <div className="row"> { /* Not-Deer */ }
                <div className="column1">
                    <img src={ CryptidsIcon } alt="Silhouette of Bigfoot, Mothman, and Wendingo"></img>
                </div>
                <div className="column2">
                    <h3 className="header-text">Not-Deer Watch – Appalachian Mountains, NC </h3>
                    <div className="bullet-text">
                        <span className="icon">📍</span>
                        <span className="content"><strong>Location:</strong> Blue Ridge Parkway and surrounding forests</span>
                    </div>

                    <div className="bullet-text">
                        <span className="icon">🔍</span>
                        <span className="content"><strong>Objective:</strong> Keep your eyes peeled for deer that just don’t seem right—maybe they have extra joints, eerie glowing eyes, or unnatural movement. Take note of any eerie encounters and draw what you saw!</span>
                    </div>
                </div>
            </div>
            <div className="row"> { /* Mothman */ }
                <div className="column1">
                    <img src={ CryptidsIcon } alt="Silhouette of Bigfoot, Mothman, and Wendingo"/>
                </div>
                <div className="column2">
                    <h3 className="header-text">Mothman’s Domain – Point Pleasant, WV</h3>
                    <div className="bullet-text">
                        <span className="icon">📍</span>
                        <span className="content"><strong>Location:</strong> The TNT Area, abandoned bunkers, and the Mothman Museum</span>
                    </div>

                    <div className="bullet-text">
                        <span className="icon">🔍</span>
                        <span className="content"><strong>Objective:</strong> Decode an encrypted message (found at the museum or online) that hints at Mothman’s last sighting!</span>
                    </div>

                    <div className="bullet-text">
                        <span className="icon">❕</span>
                        <span className="content"><strong>Bonus:</strong> Spot glowing red lights in the sky at night.</span>
                    </div>
                </div>
            </div>
            <div className="row"> { /* Wendingo */ }
                <div className="column1">
                    <img src={ CryptidsIcon } alt="Silhouette of Bigfoot, Mothman, and Wendingo"/>
                </div>
                <div className="column2">
                    <h3 className="header-text">Wendigo’s Shadow – The Great Lakes Region</h3>
                    <div className="bullet-text">
                        <span className="icon">📍</span>
                        <span className="content"><strong>Location:</strong> Deep forests of Minnesota, Wisconsin, and Canada’s Algonquin Park</span>
                    </div>

                    <div className="bullet-text">
                        <span className="icon">🔍</span>
                        <span className="content"><strong>Objective:</strong> Follow a marked trail leading into the woods—but beware! Keep track of sudden temperature drops, eerie whispers, or strange claw marks on trees. Write a journal entry describing your experience.</span>
                    </div>
                </div>
            </div>
            <div className="row"> { /* Chupacabra */ }
                <div className="column1">
                    <img src={ CryptidsIcon} alt="Silhouette of Bigfoot, Mothman, and Wendingo"/>
                </div>
                <div className="column2">
                    <h3 className="header-text">Chupacabra Hunt – Rural Texas & New Mexico</h3>
                    <div className="bullet-text">
                        <span className="icon">📍</span>
                        <span className="content"><strong>Location:</strong> Livestock farms and desert landscapes</span>
                    </div>

                    <div className="bullet-text">
                        <span className="icon">🔍</span>
                        <span className="content"><strong>Objective:</strong> Find reports of strange animal attacks or unexplained sightings. Take a photo of anything that could be linked to the legendary Chupacabra!</span>
                    </div>
                </div>
            </div>
            <div className="row"> { /* Jersey Devil */ }
                <div className="column1">
                    <img src={ CryptidsIcon } alt="Silhouette of Bigfoot, Mothman, and Wendingo"/>
                </div>
                <div className="column2">
                    <h3 className="header-text">Jersey Devil Chase – Pine Barrens, NJ</h3>
                    <div className="bullet-text">
                        <span className="icon">📍</span>
                        <span className="content"><strong>Location:</strong> Batsto Village and Wharton State Forest</span>
                    </div>

                    <div className="bullet-text">
                        <span className="icon">🔍</span>
                        <span className="content"><strong>Objective:</strong> Locate “The Devil’s Footprints”—strange hoof-like tracks that have been reported in the area. Take a rubbing or a sketch of them for proof!</span>
                    </div>
                </div>
            </div>

        </section>

    </>
  );
};

export default ScavengerHunt;