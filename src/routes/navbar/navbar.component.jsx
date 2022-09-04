import { Outlet,Link } from 'react-router-dom'
import { Fragment } from 'react'
import './navbar.styles.css'
import logo from '../../assets/food-svgrepo-com.svg'

const Navigation = ()=>{
    return(
      <Fragment>
          <div className='navigation'>
              <Link className='logo-container' to='/'>
                  <img className="logo" src={logo} alt="Logo"/>
              </Link>
              <p>yum2food</p>
             <div className="nav-links-container">
                <Link className='nav-link' to='/receipes'>receipes</Link>
                <Link className='nav-link' to='/categories'>categories</Link>
             </div>
          </div>
          <Outlet/>
      </Fragment>
    );
  };

  export default Navigation;