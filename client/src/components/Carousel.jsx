import { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel() {
  const [activeIndex, setIndex] = useState(0);
  const images = [
    {
      id: 0,
      src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/294340489_467253532072944_6282465472459727066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=gg7Vk8cdJT0AX-WhWBR&_nc_ht=scontent-ord5-2.xx&oh=00_AfDiXOgkGxjyBv_cnT6HGISRbufIMOiykMADe41EaN0Qbg&oe=64DB4561',
    },
    {
      id: 1,
      src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/147480543_721031768598783_521817398658467416_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=EPwnMgLzuxEAX_Cy7Ua&_nc_ht=scontent-ord5-2.xx&oh=00_AfBE6G9_W21MAtgf1N1Ut8TdX6cqnvq95zdhaD3h8XR05Q&oe=64FDAB00',
    },
    {
      id: 2,
      src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/120013686_635187650516529_9200105756186533229_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Kdw7eE26FHkAX8lXBf_&_nc_ht=scontent-ord5-2.xx&oh=00_AfANErl92Y9FVZuPj60FDp-CSEYNzYhitWcSYzpe-K80jw&oe=64FD8231',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((activeIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  return (
    <>
      <img
        src={images[activeIndex].src}
        className="carousel-image"
        alt="boulder-bagels"
      />
    </>
  );
}
