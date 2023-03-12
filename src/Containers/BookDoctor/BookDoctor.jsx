import { useRef } from "react";

import { DoctorCard, Cursor } from "../../Components";
import "./BookDoctor.css";

export default function BookDoctor() {
  const slideRef = useRef();

  function slideLeft() {
    slideRef.current.scrollBy(-296, 0);
  }

  function slideRight() {
    slideRef.current.scrollBy(296, 0);
  }

  return (
    <section className="Book-Doctor-container">
      <h2 className="Doctor--desc--heading blue-gradient">Book Our Doctors</h2>
      <div id="slide-container-outer-div">
        <div onClick={slideLeft}>
          <Cursor direction={true} />
        </div>
        <div id="slide-container" ref={slideRef}>
          <DoctorCard className="bookDoctor--card" />
          <DoctorCard className="bookDoctor--card" />
          <DoctorCard id="something" className="bookDoctor--card" />
          <DoctorCard className="bookDoctor--card" />
          <DoctorCard className="bookDoctor--card" />
        </div>
        <div onClick={slideRight}>
          <Cursor direction={false} />
        </div>
      </div>
    </section>
  );
}
