import './Footer.css';
import logo from "../../img/logo.svg"

function Footer() {
  return (
    <div className="Footer">
       <div className='container'>
         <div className='content__Footer'>
          <span>ⓒ Все права защищены</span>
          <img src={logo}/>
          <a>+7 906 800 68 89</a>
         </div>
       </div>
    </div>
  );
}

export default Footer;
