import React from 'react'
import './section.css';
export default function Section3() {
  return (
    <section className="section3">
    <div className="container">
      <div className="row">
        <div className="col-md-6 txtSection">
          <h2>WE MAKE EVERYTHING BY HAND WITH THE BEST POSSIBLE INGREDIENTS</h2>
          <p>Depending on the grocery store, customers can purchase fruits in a few different ways. Some stores will charge a set amount per pound of fruit</p>
          <ul>
            <li>The food is all so fresh.</li>
            <li>We try to give the kids good healthy food.</li>
            <li>The food is nourishing </li>
          </ul>
          <button>Lern more</button>
        </div>
        <div className="col-md-6">
          <img  className='img' src='bg5.png' alt='img' />
        </div>
      </div>
    </div>
  </section>
  )
}
