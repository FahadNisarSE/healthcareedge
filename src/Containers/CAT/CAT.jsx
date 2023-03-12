import { useNavigate } from "react-router-dom";

import "./CAT.css";

export default function CAT() {
  const Navigate = useNavigate();

  return (
    <section className="call-to-action">
      <div className="doctor-call-action box-shadow">
        <h2 className="cat-heading">ARE YOU A DOCTOR?</h2>
        <p className="cat-info">
          The service allows you to get maximum visibility online and to manage
          appointments and contacts coming from the site, in a simple and fast
          way.
        </p>
        <button onClick={() => Navigate('/signup')} className="cat-button-doctor">Register Now</button>
      </div>
      <div className="patient-call-action box-shadow">
        <h2 className="cat-heading">ARE YOU A PATIENT?</h2>
        <p className="cat-info">
          The service allows you to get maximum visibility online and to manage
          appointments and contacts coming from the site, in a simple and fast
          way.
        </p>
        <button onClick={() => Navigate('/signup')} className="cat-button-patient">Register Now</button>
      </div>
    </section>
  );
}
