import { useContext } from "react";

import { socketContext } from "../../Store/SocketContext";
import "./Notification.css";

export default function Notification() {
  const {answerCall, call, callAccepted} = useContext(socketContext);

  return (
    <>
      {
        (call.isRecievedCall && !callAccepted) ? (
          <div>
            <h1>{call.name} is calling...</h1>
            <button onClick={answerCall}>
              Answer
            </button>
          </div>
        ): (<div>Nothing from Notifications</div>)
      }
    </>
  );
}
