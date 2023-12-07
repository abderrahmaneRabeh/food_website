import React from 'react'
import './header.css'
export default function Header() {
  return (
    <header>
        <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
                <h2>GOOD FOOD CHOICES ARE GOOD INVESTMENT</h2>
                <p>SINCE 1970… SOMETHING</p>
                <button>Order Now</button>
                <button>Lern more &gt;</button>
            </div>
            <div className='col-md-6 cl2'></div>
            </div>
        </div>
    </header>
  )
}
