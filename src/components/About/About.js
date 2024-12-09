import './About.css';
import man from "../../img/man-with-photo.jpg"

function About() {
  return (
    <div className="About">
      <div className='container'>
        <div className='container__About'>
          <div className='text__About'>
            <h2>О студии</h2>
            <p>Фотостудия SVET открыта в 2014 году. Сегодня это 2 зала, более 16 локаций для организации фотосессий и видеосъёмки, а так же для проведения мероприятий. Площадь залов составляет от 20 до 100 кв.м. One.Studio предоставляет залы с дневным светом, современное съемочное и осветительное оборудование, оригинальные декорации, огромные окна и потолки высотой 4 метров, угловая циклорама, разнообразный реквизит и опыт профессиональной команды.</p>
          </div>
          <div className='img__About'><img src={man} /></div>
        </div>
      </div>
    </div>
  );
}

export default About;
