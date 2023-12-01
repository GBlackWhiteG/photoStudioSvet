import './Services.css';
import darkStudio from './img/dark-studio-small.jpg'
import lightStudio from './img/light-studio-small.jpg'
import smoke from './img/smoke-mashine.jpg'
import clothes from './img/clothes.jpg'
import mirror from './img/mirror.jpg'
import makeUp from './img/makeup.jpg'
import beforeAfter from './img/before-after.jpg'
import people from './img/people.jpg'

function Services() {
  return (
    <div className="Services">
      <div className='container'>
        <h2>Услуги</h2>
        <ul className='items__Services'>
          <ServiceCard imgName={darkStudio} title={"Темная студия"} price={"от 1000 ₽"} pricePer={"За 1 час аренды"} />
          <ServiceCard imgName={lightStudio} title={"Светлая студия"} price={"от 800 ₽"} pricePer={"За 1 час аренды"} />
          <ServiceCard imgName={smoke} title={"Дым машина"} price={"от 300 ₽"} pricePer={"За 1 час аренды"} />
          <ServiceCard imgName={clothes} title={"Прокат одежды"} price={"от 900 ₽"} pricePer={"За образ"} />
          <ServiceCard imgName={mirror} title={"Гримерная"} price={"300 ₽"} pricePer={"За 1 час"} />
          <ServiceCard imgName={makeUp} title={"Визажист"} price={"от 1500 ₽"} pricePer={"За 1 час аренд"} />
          <ServiceCard imgName={beforeAfter} title={"Ретушь фото"} price={"200 ₽"} pricePer={"За 1 фотографию"} />
          <ServiceCard imgName={people} title={"Доплата за человека"} price={"100 ₽"} pricePer={"За человека"} />
        </ul>
      </div>
    </div>
  );
}

function ServiceCard({imgName, title, price, pricePer}) {
  return (
    <li className='item__Services'>
      <img src={imgName}/>
      <div className='item-content'>
        <h3>{title}</h3>
        <span className='price' >{price}</span>
        <span>{pricePer}</span>
        <button>Записаться</button>
      </div>
    </li>
  )
}

export default Services;
