import { useState, useContext } from "react";
import {
  HiPhone,
  HiVideoCamera,
  HiVolumeUp,
  HiVolumeOff,
} from "react-icons/hi";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
import { FaVideoSlash } from "react-icons/fa";
import { socketContext } from "../../Store/SocketContext";

import "./Options.css";

export default function Options({ children }) {
  const {me, callAccepted, callEnded, name, setName, leaveCall, callUser} = useContext(socketContext);
  
  const [microphone, setMicrophone] = useState(true);
  const [camera, setCamera] = useState(true);
  const [audio, setAudio] = useState(false);
  const [call, setCall] = useState(true);
  const [idToCall, setIdToCall] = useState('')

  return (
    <section className="options-container">
      <div>
        <h2>Account Info</h2>
        <label htmlFor="id-to-call">Name: 
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" name="id-to-call" id="id-to-call" />
        <p>{me}</p>
      </div>
      <div>
        <h2>Make a Call</h2>
        <label htmlFor="id-to-call">Name: 
        </label>
        <input type="text" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} autoComplete="off" name="id-to-call" id="id-to-call" />
        {
          (callAccepted && !callEnded) ? (
            <button onClick={leaveCall}>Hang Up</button>
          ) : (
            <button onClick={() => callUser(idToCall)}>Call</button>
          )
        }
      </div>

      <div className="call-options">
        <div
          className="microphone"
          onClick={() => setMicrophone((prev) => !prev)}
        >
          {microphone ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
        </div>
        <div className="camera" onClick={() => setCamera((prev) => !prev)}>
          {camera ? <HiVideoCamera /> : <FaVideoSlash />}
        </div>
        <div className="call" style={{backgroundColor : call ? '#EF4444' : '#22c55e'}} onClick={() => setCall((prev) => !prev)}>
          <HiPhone /> <span>{call ? "End call" : "Accept call"}</span>
        </div>
        <div className="speaker" onClick={() => setAudio((prev) => !prev)}>
          {audio ? <HiVolumeUp /> : <HiVolumeOff />}
        </div>
        <div className="duration">11: 00</div>
      </div>
      {children}
    </section>
  );
}
