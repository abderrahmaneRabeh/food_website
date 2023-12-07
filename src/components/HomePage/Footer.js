import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-2 p_center">
            <img src="logo.png" />
          </div>
          <div className="col-7 p_center">
            <p>we are company served food with good quality and service</p>
          </div>
          <div className="col-3 p_center">
          <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Linkdin</a>
          </div>
        </div>
      </div>
    </div>
  );
}
