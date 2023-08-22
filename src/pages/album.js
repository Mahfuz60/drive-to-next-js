import Image from 'next/image';
import nextImage from '../assets/images/next-js-logo.png';


const Album = () => {
  return (
    <div>
      <h2>This image  using for img tag</h2>
      <img src="https://miro.medium.com/v2/resize:fit:1000/1*YPETs_O_io9ZEM1Ew55sIQ.jpeg" alt="" width="100%" />
      <h2>This image  using for Image Component</h2>
      <Image src="https://miro.medium.com/v2/resize:fit:1000/1*YPETs_O_io9ZEM1Ew55sIQ.jpeg" alt="" width={500} height={500} layout="responsive" />

      <h2>This image  using for Image Component and locally</h2>
      <Image src={nextImage} alt="" width={500} height={500} layout="responsive" />
      
    </div>
  );
};

export default Album;