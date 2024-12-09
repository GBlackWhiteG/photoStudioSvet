import './Contacts.css';
import { YMaps, Map } from '@pbe/react-yandex-maps';

function Contacts() {
  return (
    <div className="Contacts">
      <div className='container'>
        <div className='content__Contacts'>
          <div className='text__Contacts'>
            <h2>Контакты</h2>
            <p>SVET фотостудия<br></br>г.Екатеринбург, ул.Мамина Сибиряка 85 (главный вход), 3 этаж, из лифта на право, офис 313/7<br></br>Александра +7 906 800 68 89 - ссылка на WhatsApp<br></br>Мы работаем по предварительной записи</p>
          </div>
          <YMaps>
            <Map className="map" defaultState={{ center: [56.846763, 60.615923], zoom: 16 }} />
          </YMaps>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
