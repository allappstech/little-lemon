
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
      <div class="m-header">
        <div class="titles">
        <div class="title">Little Lemon</div>
        <div class="subtitle"> Chicago</div> 
      
        <div class="notes">
        We are a family owned Mediterranean restaurant, focused on traditional recipes served with
        a modern twist.
        </div>
        <Link to="/booking">
        <button class="btn btn-warning">
                    Reserve a table
                </button>
        </Link>

    
        </div>

        <div class="hero">
        <a href="" > <img src="/images/hero.png" alt="little lemon"/></a>
        </div>
           


      </div>
    );
}

export default Header;