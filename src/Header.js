import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search'; 
import { useStateValue } from './StateProvider';


const Header=()=> {
// const [{basket}]=useStateValue();
 
    return (
        <nav className="header">


<Link to ="/">

<img className="header_logo"
src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
 alt="amazon logo"></img>
 </Link>
            

<div className="header_search">
<input type="text" className="header_searchInput"/>
    <SearchIcon className="header_searchIcon"/>
    
</div>




<div className="header_nav">

<Link to="/login" className="header_link">
<div className="header_option">
    <span className="header_optionline1"> Hello A</span>
    <span  className="header_optionline2"> Sign In</span>

    </div>

</Link>    

<Link to="/" className="header_link">
<div className="header_option">
    <span className="header_optionline1"> Returns</span>
    <span  className="header_optionline2"> & Orders</span>
    </div>

</Link>    



<Link to="/login" className="header_link">
<div className="header_option">
    <span className="header_optionline1"> Your</span>
    <span  className="header_optionline2"> Prime</span>
    </div>

</Link>    




<Link to="/checkout" className="header_link">
    <div className="header_optionBasket">
    <ShoppingBasketIcon className="basket"/>
        <span className="header_optionline2 
         header_basketCount">0</span>
    </div>
</Link>


</div>





        </nav>
    )
}

export default Header
