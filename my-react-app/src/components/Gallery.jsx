// // Gallery.js
// import React from 'react';
// import './styles.css'; // Importing the CSS for styling

// const Gallery = () => {
//   // Importing images dynamically from the src/images folder
//   const images = [
//     require('../images/image1.webp'),
//     require('../images/image2.webp'),
//     require('../images/image3.webp'),
//     require('../images/image4.webp'),
//     require('../images/image5.webp'),
//     require('../images/image6.webp'),
//     require('../images/image7.webp'),
//     require('../images/image8.webp'),
//   ];

//   return (
//     <div className="gallery-container">
//       <h1 className="gallery-title">Our Gym Gallery</h1>
//       <p className="gallery-description">
//         Take a glimpse into the world of fitness at FitFounder. Explore our modern facilities, professional equipment, and energetic environment.
//       </p>
//       <div className="gallery-grid">
//         {images.map((image, index) => (
//           <div key={index} className="gallery-item">
//             <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;








import React from 'react';
import './styles.css'; // Importing the CSS for styling

// Import images statically
import image1 from '../images/image1.webp';
import image2 from '../images/image2.webp';
import image3 from '../images/image3.webp';
import image4 from '../images/image4.webp';
import image5 from '../images/image5.webp';
import image6 from '../images/image6.webp';
import image7 from '../images/image7.webp';
import image8 from '../images/image8.webp';

const Gallery = () => {
  // Array of imported images
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Gym Gallery</h1>
      <p className="gallery-description">
        Take a glimpse into the world of fitness at FitFounder. Explore our modern facilities, professional equipment, and energetic environment.
      </p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
