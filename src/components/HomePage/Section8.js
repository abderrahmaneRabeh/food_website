import React from 'react'
import {Carousel} from 'react-bootstrap'
export default function Section8() {
  return (
    <div className="section8">
      <div className="container">
      <div className='row'>
        <div className='col-lg-12 col-md-12'><h2>Aboute</h2></div>
      </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Carousel>
              <Carousel.Item>
                <img src="pf.jpg" />
                <Carousel.Caption>
                  <h3>Abderrahmane Rabeh</h3>
                  <p>Computer Science/Full-Stack Developper</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="pf.jpg" />
                <Carousel.Caption>
                  <h3>Abderrahmane Rabeh</h3>
                  <p>Computer Science/Full-Stack Developper</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
