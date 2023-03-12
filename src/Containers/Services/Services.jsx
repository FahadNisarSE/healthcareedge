import React from 'react'
import { useInView } from 'react-intersection-observer';

import './Services.css';
import { services } from '../../Constants/images';

const Services = () => {
    const { ref: myRef, inView: isElementVisible } = useInView();

    return (
        <section ref={myRef} className='services--section'>
            <h2 className="services--section--heading blue-gradient">What are you looking for?</h2>
            <div className={`services--container ${isElementVisible ? 'move-up' : ''}`}>
                {
                    services.map((item) => (
                        <div key={item.name} id={item.id} className='single--service--container service'>
                            <img src={item.image} alt={item.name} className="service--image" />
                            <div className='service-subcontainer' >
                                <h3 className="service--heading">{item.name}</h3>
                                <div>
                                    <p>{item.info}</p>
                                </div>
                                <button className="service--button book-now">{item.button}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services