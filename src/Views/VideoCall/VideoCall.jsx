import { Notfication, VideoPlayer, Options } from "../../Containers";
import { ContextProvider } from "../../Store/SocketContext";

import "./VideoCall.css";

export default function VideoCall() {
  return (
    <main className="video-call-container">
      <ContextProvider>
        <VideoPlayer />
        <Options>
          <Notfication />
        </Options>
      </ContextProvider>
    </main>
  );
}
