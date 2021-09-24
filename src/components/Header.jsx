import { Link } from 'react-router-dom';
import logo from '../assets/img/pizza-logo.svg';
import { Button } from '../components';

export function Header() {

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1> 
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <div className="header__cart">
            <Button/>
          </div>
        </Link>
      </div>
    </div>
  );
}