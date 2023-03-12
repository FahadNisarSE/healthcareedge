import { useContext } from "react";

import { socketContext } from "../../Store/SocketContext";
import HealthCare from "../../Assets/health_care_edge.png";
import DoctorSvg from "../../Assets/doctor.svg";
import "./VideoPlayer.css";

export default function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(socketContext);

  return (
    <section id="video-player">
      <div className="header-div">
        <div className="health-icon-div">
          <img
            src={HealthCare}
            alt="Health Care Icon"
            className="health-care-icon"
          />
          <h3 className="icon-name">Health Care Edge</h3>
        </div>
        <div className="userinfo">
          <div className="user-info-div">
            <img className="user-info-image" src={DoctorSvg} alt="User Name" />
            <div>
              <h3 className="user-info-name">{name || "name"} (Doctor)</h3>
              <p className="user-info-email">email@example.com</p>
            </div>
          </div>
          <div className="caller-user-info-div">
            <img className="user-info-image" src={DoctorSvg} alt="User Name" />
            <div>
              <h3 className="user-info-name">
                {call.name || "name"} (Patient)
              </h3>
              <p className="user-info-email">email@example.com</p>
            </div>
          </div>
        </div>
      </div>
      {stream ? (
        <div className="video-player-section box-shadow">
          {callAccepted && !callEnded ? (
            <div className="user-video-container">
            <h4>{call.name || 'Name'}</h4>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className="user-video"
              />
            </div>
          ) : <div><img src="" alt="not found" className="use-video" /></div>}
          {/* Initiator Video  */}
          <div className="my-video-container">
            <h4>{name || 'Name'}</h4>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="my-video"
            />
          </div>
        </div>
      ) : <div><img src="" alt="not found" className="use-video" /></div>}
    </section>
  );
}
