import './Header.css';
import logo from './img/logo.svg'

function Header() {
  return (
    <div className="Header">
      <img className='logo' src={logo} alt='logo'/>
      <h1>PHOTO <span>STUDIO</span></h1>
      <p>профессиональная фотостудия полного формата</p>
    </div>
  );
}

export default Header;
