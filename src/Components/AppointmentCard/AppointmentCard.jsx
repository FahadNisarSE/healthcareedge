import {
  MdOutlineWatchLater,
  MdLocationOn,
  MdEmail,
  MdCall,
} from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

import "./AppointmentCard.css";

const AppointmentCard = ({ name, image, date, address, email, phone }) => {
  const { pathname } = useLocation();
  const Navigate = useNavigate();

  return (
    <div className="appointment--card--box">
      <div className="appointment--card--box-1">
        <div className="appointment--card--image--box">
          <img src={image} alt={name} className="appointment--card--image" />
        </div>
        <div className="appointment--card-info">
          <h2 className="appointment-name blue-gradient">{name}</h2>
          <div className="appoint--card--sub-box">
            <MdOutlineWatchLater className="appoint-icons" /> <p>{date}</p>
          </div>
          <div className="appoint--card--sub-box">
            <MdLocationOn className="appoint-icons" /> <p>{address}</p>
          </div>
          <div className="appoint--card--sub-box">
            <MdEmail className="appoint-icons" /> <p>{email}</p>
          </div>
          <div className="appoint--card--sub-box">
            <MdCall className="appoint-icons" /> <p>{phone}</p>
          </div>
        </div>
      </div>
      <div className="appointment--card--reaction">
        <button onClick={() => Navigate('/users/1')} className="appoint--card--button appoint-view">
          <FaEye className="appoint-icons" />
          {pathname === "/doctor/appointments" ? "View" : "View Profile"}
        </button>
        {pathname === "/doctor/appointments" && (
          <>
            <button className="appoint--card--button appoint-accept">
              <BiLike className="appoint-icons" /> Accept
            </button>
            <button className="appoint--card--button appoint-reject">
              <BiDislike className="appoint-icons" /> Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
