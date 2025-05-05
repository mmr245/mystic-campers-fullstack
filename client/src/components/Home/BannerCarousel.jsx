import React, {useState, useEffect
} from 'react' ; 
// Import images
import banner1 from '../../assets/images/banner/bigfoot-banner.jpg';
import banner2 from '../../assets/images/banner/bigfoot-camp-banner.jpg';
import banner3 from '../../assets/images/banner/canoe-banner.jpg';
import banner4 from '../../assets/images/banner/findadventure-banner.jpg';
import banner5 from '../../assets/images/banner/notdeer-banner.jpg';
import banner6 from '../../assets/images/banner/wendingo-banner.jpg';

const banners = [
  { id: 1, src: banner1, alt: 'Bigfoot Banner' },
  { id: 2, src: banner2, alt: 'Bigfoot Camp Banner' },
  { id: 3, src: banner3, alt: 'Canoe Banner' },
  { id: 4, src: banner4, alt: 'Find Adventure Banner' },
  { id: 5, src: banner5, alt: 'Not Deer Banner' },
  { id: 6, src: banner6, alt: 'Wendingo Banner' },
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-carousel">
      {banners.map((banner, i) => (
        <div
          key={banner.id}
          className={`slide ${i === index ? 'active' : ''}`}
          style={{ display: i === index ? 'block' : 'none' }}
        >
          <img src={banner.src} alt={banner.alt} />
        </div>
      ))}
    </div>
  );
};

export default BannerCarousel;
