import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";
import { cn } from "../../lib/utils";

import ReactPlayer from "react-player";
import { GlobalSettingsContext } from "../../contexts/GlobalSettingsContext";

export default function VideoTileLabel({
  iframeRef: playerRef,
}: {
  iframeRef?: React.RefObject<HTMLIFrameElement | null>;
}) {
  const { videoData } = useContext(VideoDataContext);

  const thisVideoIndex = useContext(VideoTileIndexContext);
  const thisVideo = videoData[thisVideoIndex];

  const { globalSettings, setGlobalSettings } = useContext(
    GlobalSettingsContext,
  );

  //let thisVideoURL = "https://www.pexels.com/download/video/1430660/";

  let thisVideoURL = "";
  switch (thisVideo.platform) {
    case "youtube":
      thisVideoURL =
        "https://www.youtube-nocookie.com/embed/" + thisVideo.platformID;
      break;

    default:
      thisVideoURL = thisVideo.platformID;
      break;
  }

  return (
    <>
      <div
        /* ref={playerRef} */
        className={cn(
          "absolute w-full h-full",
          thisVideo.isLocked && "pointer-events-none",
        )}
      >
        <ReactPlayer
          src={thisVideoURL}
          controls={true}
          playing={true}
          width="100%"
          height="100%"
          muted={thisVideo.isMuted || globalSettings.isMutedOverwrite}
        />
      </div>
    </>
  );
}
