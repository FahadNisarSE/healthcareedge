import { useInView } from 'react-intersection-observer';

import Images from '../../Constants/images';
import './Features.css';

const Features = () => {
    const { ref: myRef, inView: isElementVisible } = useInView();

    return (
        <section className='feature--section'>
            <h2 className="feature--heading blue-gradient">
                Clinic and Specialities
            </h2>
            <p className="feature--subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus natus quia minus.
            </p>
            <div className='features--container'>
                {
                    Images.map((item) => (
                        <div ref={myRef} key={item.name} className={`single--feature feature ${isElementVisible ? 'slide-right-card' : ''}`}>
                            <div className="feature--image--container">
                                <img src={item.image} alt={item.name} className="feature--image" />
                            </div>
                            <h5 className="feature--name">{item.name}</h5>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}


export default Features;