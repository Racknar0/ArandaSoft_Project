import React from 'react'

const MobileMenu = () => {
  return (
    <div className='box-mobile-container'>
        <div className='box-mobile'>
            <img src="./assets/icons/ic_vegetarian.svg" alt="" />
            <p>Vegetarianos</p>
        </div>
        <div className='box-mobile'>
            <img src="./assets/icons/ic_main.svg" alt="" />
            <p>Principales</p>
        </div>
        <div className='box-mobile'>
            <img src="./assets/icons/ic_cake.svg" alt="" />
            <p>Tortas</p>
        </div>

        <div className='box-mobile'>
            <img src="./assets/icons/ic_fast-food.svg" alt="" />
            <p>Rapida</p>
        </div>
        <div className='box-mobile'>
            <img src="./assets/icons/ic_kids.svg" alt="" />
            <p>Menu Niños</p>
        </div>
        <div className='box-mobile'>
            <img src="./assets/icons/ic_soup.svg" alt="" />
            <p>Sopas</p>
        </div>
    </div>
  )
}

export default MobileMenu