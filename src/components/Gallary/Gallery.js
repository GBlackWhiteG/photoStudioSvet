import './Gallery.css';
import gal1 from '../../img/gal1.jpg'
import gal2 from '../../img/gal2.jpg'
import gal3 from '../../img/gal3.jpg'
import gal4 from '../../img/gal4.jpg'
import gal5 from '../../img/gal5.jpg'
import gal6 from '../../img/gal6.jpg'

function Gallery() {
  return (
    <div className="Gallery">
      <div className='container'>
        <h2>Галерея</h2>
        <div className='content__Gallery'>
          <div><img src={gal1}/></div>
          <div><img src={gal4}/></div>
          <div><img src={gal2}/></div>
          <div><img src={gal5}/></div>
          <div><img src={gal3}/></div>
          <div><img src={gal6}/></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
