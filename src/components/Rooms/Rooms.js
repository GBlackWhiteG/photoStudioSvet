import { useState } from 'react';
import './Rooms.css';
import roomDark from "../../img/dark-studio.jpg"
import roomLight from "../../img/light-studio.jpg"

function Rooms() {
  const texts = [
    {
      title: "Стены темного зала окружены мягким, мистическим светом, который создает загадочные тени и подчеркивает контуры съемки. Оснащено передовым фотооборудованием, обеспечивающее высокое качество изображений при минимальном освещении.",
      cost: "1000 ₽ час",
      height: "4 м",
      roomTo: "Белый зал",
      room: roomDark,
      class: "content__Rooms",
      bgClass: "Rooms bg-light"
    },
    {
      title: "Этот зал создан для того, чтобы подчеркнуть нежность, легкость и природную красоту в каждом кадре. Светлые оттенки стен и фоновых элементов обеспечивают чистоту и свежесть, а также подчеркивают естественные цвета вашей съемки.",
      cost: "800 ₽ час",
      height: "3 м",
      roomTo: "Черный зал",
      room: roomLight,
      class: "content__Rooms reversed-text",
      bgClass: "Rooms bg-dark"
    }
  ]

  const [roomIndex, changeRoom] = useState(0);

  const changeRoomFunc = () => {
    if (roomIndex < texts.length - 1) {
      changeRoom(roomIndex + 1)
    }
    else {
      changeRoom(roomIndex - 1)
    }
  }

  return (
    <div className={texts[roomIndex].bgClass}>
      <div className='container'>
        <div className={texts[roomIndex].class}>
          <div className='text__Rooms'>
            <h2>Наши залы</h2>
            <p>{texts[roomIndex].title}</p>
            <div className='prices__Rooms'>
              <div className='price-for-hour'>
                <span>Аренда:</span>
                <h3>{texts[roomIndex].cost}</h3>
              </div>
              <div className='rooms-height'>
                <span>Высота потолка:</span>
                <h3>{texts[roomIndex].height}</h3>
              </div>
            </div>
            <button className="room-button" onClick={changeRoomFunc}>{texts[roomIndex].roomTo}</button> 
          </div>
          <div><img className='img__Rooms' src={texts[roomIndex].room}/></div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
