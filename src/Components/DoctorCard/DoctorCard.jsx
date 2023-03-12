import { AiFillStar, AiOutlineFieldTime } from "react-icons/ai";
import { GoVerified, GoLocation } from "react-icons/go";
import { BsCashCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import Doctor1 from "../../Assets/doctor-1.jpg";
import "./DoctorCard.css";

const ratingcomponent = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <AiFillStar
        className="rating"
        style={{ color: `${i < rating ? "#FFFF00" : "#616161"}` }}
      />
    );
  }
  return stars;
};

const DoctorCard = () => {
  let Navigate = useNavigate();

  return (
    <div className="card box-shadow">
      <div className="image-content">
        <span className="overlay"></span>
        <div className="card-image">
          <img
            src={Doctor1}
            alt="Lady Doctor"
            className="card-img box-shadow"
          />
        </div>
      </div>
      <div className="card-content">
        <h2 className="card-title">
          David Dell <GoVerified style={{ color: "#09e5ab" }} />
        </h2>
        <p className="card-desc">MBBS, MS - General Surgery, MCh - Urology</p>
        <span className="card-rate">{ratingcomponent(4)} (4)</span>
        <span className="card-desc">
          <GoLocation className="card-icon" /> Louisiana, USA
        </span>
        <span className="card-desc">
          <AiOutlineFieldTime className="card-icon" /> Available on Fir, 22 Mar
        </span>
        <span className="card-desc">
          <BsCashCoin className="card-icon" /> $150 - %250
        </span>
      </div>
      <div className="card-buttons">
        <button className="view-profile" onClick={() => Navigate(`/doctors/4`)}>
          View Profile
        </button>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
};

export default DoctorCard;
