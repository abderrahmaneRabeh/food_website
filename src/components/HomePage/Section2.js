import React from 'react'
import './section.css';
export default function Section2() {
  return (
    <section className="section2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className='img' src='bg4.jpg' />
          </div>
          <div className="col-md-6 txtSection">
            <h2>WE PRIDE OURSELVES ON MAKING REAL FOOD FROM THE BEST INGREDIENTS</h2>
            <p>Here are some descriptive words to help: astringent, briny, citrusy, fermented, sour, tart, and vinegary</p>
            <button>Lern more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
