import React from 'react';
import Lena from '../../assets/images/team/lena-carter-500.jpg';
import Jake from '../../assets/images/team/jake-reynolds-500.jpg';
import Sam from '../../assets/images/team/sam-torres-500.jpg';

const Team = () => {
  return (
    <>
        <h1>Meet the Team</h1>
        <h3 className="header-text">Get to know the explorers, designers, and cryptid hunters behind Mystic Campers.</h3>
            <section className="teamgrid">
                <div className="team-member">
                    <figure>
                        <img src={Lena} alt="Lena Carter" style={{width: "100%"}}/>
                    </figure>
                    <h2>Lena Carter</h2>
                    <h3 className="header-text">President & Co-Founder of Mystic Campers</h3>
                    <p className="body-text">A lifelong adventurer with a passion for the unknown, Lena Carter is the fearless leader behind Mystic Campers. As the President and Co-Founder, Lena combines her love for outdoor exploration with cutting-edge technology to create an immersive experience for fellow adventurers. </p>
                    <p className="body-text">When she’s not strategizing the next big product release or leading an expedition, Lena can be found deep in the woods, chasing the next great mystery—because for her, the adventure never stops.</p>
                </div>
                <div className="team-member">
                    <figure>
                        <img src={Jake} alt="Jake Reynolds" style={{width: "100%"}}/>
                    </figure>
                    <h2>Jake Reynolds</h2>
                    <h3 className="header-text"> Head of Marketing & Co-Founder</h3>
                    <p className="body-text">If there’s one person who can turn a campfire story into a viral sensation, it’s Jake Reynolds. As the Head of Marketing and Co-Founder of Mystic Campers, Jake is the mastermind behind the brand’s thrilling campaigns, immersive scavenger hunts, and community-driven experiences.</p>
                    <p className="body-text">When he’s not designing the next big marketing campaign, you’ll find Jake live streaming his latest expedition, decoding cryptid sightings, or chasing rumors of hidden trails and uncharted mysteries.</p>
                    </div>
                <div className="team-member">
                    <figure>
                        <img src={Sam} alt="Sam Torres" style={{width: "100%"}}/>
                    </figure>
                    <h2>Sam Torres</h2>
                    <h3 className="header-text">Head of Production & Co-Founder</h3>
                    <p className="body-text">When it comes to crafting top-tier gear built for adventure and the unknown, Sam Torres is the driving force behind Mystic Campers’ product line. As the Head of Production and Co-Founder, Sam ensures that every piece of gear—whether it’s a high-tech tent, a limited-edition backpack, or a glow-in-the-dark map—meets the highest standards of durability, innovation, and mystery-ready performance.</p>
                    <p className="body-text">When they’re not in the workshop or field-testing new designs, Sam can be found hiking remote trails, experimenting with futuristic camping tech, or mapping out the next great adventure.</p>
                </div>
            </section>
    </>
  );
};

export default Team;