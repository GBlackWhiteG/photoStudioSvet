import './Rooms.css';
import room from "./img/dark-studio.jpg"

function Rooms() {
  return (
    <div className="Rooms">
      <div className='container'>
        <div className='content__Rooms'>
          <div className='text__Rooms'>
            <h2>Наши залы</h2>
            <p>Стены темного зала окружены мягким, мистическим светом, который создает загадочные тени и подчеркивает контуры съемки. Оснащено передовым фотооборудованием, обеспечивающее высокое качество изображений при минимальном освещении.</p>
            <div className='prices__Rooms'>
              <div className='price-for-hour'>
                <span>Аренда:</span>
                <h3>1000 ₽ час</h3>
              </div>
              <div className='rooms-height'>
                <span>Высота потолка:</span>
                <h3>4 м</h3>
              </div>
            </div>
            <button className='room-button'>Белый зал</button> 
          </div>
          <div><img className='img__Rooms' src={room}/></div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
