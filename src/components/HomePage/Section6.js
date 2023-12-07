import React from 'react'
import './section.css';
import data from '../../data/data';
export default function Section6() {
  return (
    <div className='section6'>
        <div className='container'>
            <div className='row'>
                {
                    data.map((el)=>{
                        return(  
                            <div className='col-md-4' key={el.id}>
                                <div className='box'>
                                    <img src={el.img} />
                                    <h5>{el.title}</h5>
                                    <span>{el.time}</span>
                                    <h6>{el.price}</h6>
                                    <button>Order Now</button>
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>
    </div>
  )
}
