import React from 'react';

const Header = () => {
    return (
       <header>
          <h1><span>Recipe</span>App</h1>
        <div>
          <img src="./assets/icons/ic_home.svg" alt="" />
        </div>
        <nav>
          <ul>
            <li> <a className='nav-active' href="/">Home</a> </li>
            <li> <a href="/">Recipes</a> </li>
            <li> <a href="/">About</a> </li>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/">Recipes</a> </li>
            <li> <a href="/">About</a> </li>
            <li> <a href="/">About</a> </li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
