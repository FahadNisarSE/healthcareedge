import { useLocation, useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { AiOutlineLike, AiOutlineDollar } from "react-icons/ai";
import {
  BsChatSquareText,
  BsBookmarkCheck,
  BsChatLeftText,
} from "react-icons/bs";
import { IoMdCall, IoMdVideocam } from "react-icons/io";

import RatingComponent from "../RatingComponent/RatingComponent";
import { profileImage } from "../../Constants/images";
import DoctorInfo from "../../Constants/DoctorProfile";
import Doctor2 from "../../Assets/doctor-2.jpg";
import "./DetailDoctorProfile.css";

const DetailDoctorProfile = () => {
  const { pathname } = useLocation();
  const Navigate = useNavigate();

  return (
    <div className="doctor-profile-box box-shadow">
      <div className="doctor--profile--image--container">
        <img src={Doctor2} alt="Doctor" className="doctor--profile--Image" />
      </div>
      <div className="doctor--profile--info-1">
        <h1 className="doctor--profile--feild doctor--profile--heading blue-gradient">
          {DoctorInfo.name}
        </h1>
        <p className="doctor--profile--feild">{DoctorInfo.qualification}</p>
        <span className="doctor--profile--feild doctor-specility">
          {DoctorInfo.speciality}
        </span>
        <div className="doctor--profile--feild">
          <RatingComponent className="profile-icon" rating={DoctorInfo.stars} />{" "}
          ({DoctorInfo.totalReviews})
        </div>
        <address className="doctor--profile--feild">
          {" "}
          <GoLocation className="profile-icon" /> {DoctorInfo.address}
        </address>
        <div className="tag--image--container">
          {profileImage.map((image) => (
            <img
              src={image.image}
              alt={image.name}
              key={image.name}
              className="tag-Image"
            />
          ))}
        </div>
        <div className="profile--tag--container">
          {DoctorInfo.tags.map((tag) => (
            <span className="profile--tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="doctor--profile--info-2">
        <div className="doctor--profile--feild">
          <AiOutlineLike className="profile-icon" /> {DoctorInfo.rating} %
        </div>
        <div className="doctor--profile--feild">
          <BsChatLeftText className="profile-icon" /> {DoctorInfo.feedBack}{" "}
          Feedback{" "}
        </div>
        <div className="doctor--profile--feild">
          <GoLocation className="profile-icon" /> {DoctorInfo.address}{" "}
        </div>
        <div className="doctor--profile--feild">
          <AiOutlineDollar className="profile-icon" /> ${DoctorInfo.feePerHour}{" "}
          per hour{" "}
        </div>
        <div className="doctor--profile--info-3">
          <BsBookmarkCheck className="profile-icon-with-border" />
          <BsChatSquareText className="profile-icon-with-border" />
          <IoMdCall className="profile-icon-with-border" />
          <IoMdVideocam className="profile-icon-with-border" />
        </div>
        <div className="doctor--profile--button">
          {pathname === "/doctors" && (
            <button
              onClick={() => Navigate("/doctors/1")}
              id="view-profile-button"
            >
              VIEW PROFILE
            </button>
          )}
          <button className="main-bg">BOOK APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default DetailDoctorProfile;
