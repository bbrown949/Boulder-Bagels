// import { useState, useEffect, useCallback } from 'react';
// import {
//   FaChevronLeft,
//   FaChevronRight,
//   FaCircle,
//   FaDizzy,
// } from 'react-icons/fa';
// import './Carousel.css';

// export default function Carousel({ data }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentImg = data[currentIndex];

//   const handleRightClick = useCallback(() => {
//     setCurrentIndex((prev) => (prev + 1) % data.length);
//   }, [data]);

//   function handleLeftClick() {
//     setCurrentIndex((currentIndex - 1 + data.length) % data.length);
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((currentIndex + 1) % data.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex, data.length]);

//   function HandleDotClick(index) {
//     setCurrentIndex(index);
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="column-third align-arrows">
//           <FaChevronLeft onClick={handleLeftClick} className="arrow" />
//         </div>
//         <div className="column-third">
//           <img src={currentImg.imgUrl} alt={currentImg.name} />
//         </div>
//         <div className="column-third align-arrows">
//           <FaChevronRight onClick={handleRightClick} className="arrow" />
//         </div>
//       </div>
//       <div className="row">
//         <div className="column-full align-dots">
//           {data.map((data, index) => (
//             <ProgressDot
//               key={data.id}
//               currentIndex={currentIndex}
//               dotClick={HandleDotClick}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProgressDot({ index, dotClick, currentIndex }) {
//   return (
//     <>
//       {index === currentIndex ? (
//         <FaDizzy size={50} className="dot-button" />
//       ) : (
//         <FaCircle
//           size={50}
//           onClick={() => dotClick(index)}
//           className="dot-button"
//         />
//       )}
//     </>
//   );
// }
