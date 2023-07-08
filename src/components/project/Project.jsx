import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  408: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <img src="https://www.bhg.com/thmb/3LDW5B-kZ_WwDJr7Py2bDI7iN7E=/1742x0/filters:no_upscale():strip_icc()/mid-century-style-home-dark-wood-exterior-1hPCCdtd4Na9XXOD8r9KBJ-38267f3774b2432086248af87b11cb6f.jpg" onDragStart={handleDragStart} data-value="1" role="presentation" height="300" width="400" className='cimage'/>,
  <img src="https://media.theeverygirl.com/wp-content/uploads/2020/01/things-i-learned-building-my-house-theeverygirl-Featured-Horizonal-Image.jpg" onDragStart={handleDragStart} data-value="2" role="presentation" height="300" width="400" className='cimage'/>,
  <img src="https://s3media.angieslist.com/s3fs-public/home-exterior-evening.jpeg?impolicy=leadImage" onDragStart={handleDragStart} data-value="3" role="presentation" height="300" width="400" className='cimage'/>,
  <img src="https://blackpearlcustomhomes.com/wp-content/uploads/2021/05/Home-Addition-Newmarket-900x450.jpg" onDragStart={handleDragStart} data-value="4" role="presentation" height="300" width="400" className='cimage'/>,
  <img src="https://www.dvwise.com/static/sitefiles/images/fragment-of-a-nice-house-26752562.jpg" onDragStart={handleDragStart} data-value="5" role="presentation" height="300" width="400" className='cimage'/>,
  <img src="https://luxury-houses.net/wp-content/uploads/2022/01/AIKYA-House-structure-of-times-past-but-modernity-by-Techno-Architecture-18.jpg" onDragStart={handleDragStart} data-value="6" role="presentation" height="300" width="400" className='cimage' />,
  <img src="https://i.pinimg.com/736x/f1/22/6f/f1226f93ac5d772ece4b67f5784aac79.jpg" onDragStart={handleDragStart} data-value="7" role="presentation" height="300" width="400" className='cimage' />,
  <img src="https://www.grollohomes.com.au/wp-content/uploads/2018/10/Rose-Avenue-02-1-1024x750.jpg" onDragStart={handleDragStart} data-value="8" role="presentation" height="300" width="400" className='cimage'/>,
];

const Project = () => {
  return (
    <>
    <h3 className="text-center mt-4 mb-4">Our Projects</h3>
      <div className="container carousel">

        {/* <!----carusel--> */}
        <AliceCarousel mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate" />
        {/* <!--corusel--> */}
      </div>

    </>
  )
}

export default Project
