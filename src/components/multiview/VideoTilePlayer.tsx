import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";
import { cn } from "../../lib/utils";

import ReactPlayer from "react-player";
import { GlobalSettingsContext } from "../../contexts/GlobalSettingsContext";

export default function VideoTilePlayer() {
  const { videoData } = useContext(VideoDataContext);

  const thisVideoIndex = useContext(VideoTileIndexContext);
  const thisVideo = videoData[thisVideoIndex];

  const { globalSettings } = useContext(GlobalSettingsContext);

  const testPictureURL = "https://data.mactechnews.de/Resized/391762_1200x630_Cover_Zoom.jpg";
  

  // Set video url
  let thisVideoURL;
  switch (thisVideo.platform) {
    case "youtube":
      thisVideoURL =
        "https://www.youtube-nocookie.com/embed/" + thisVideo.platformID;
      break;

    default:
      thisVideoURL = thisVideo.platformID;
      break;
  }

  // render correct player
  let playerElement;
  if (globalSettings.isTestMode) {
    playerElement = (
          <img src={testPictureURL} className="w-full h-full" />
        );
  } else {
    switch (thisVideo.platform) {
      case "image":
        playerElement = (
          <img src={thisVideo.platformID} className="w-full h-full" />
        );
        break;
      default:
        playerElement = (
          <ReactPlayer
            src={thisVideoURL}
            controls={false}
            playing={true}
            width="100%"
            height="100%"
            muted={thisVideo.isMuted || globalSettings.isMutedOverwrite}
          />
        );
        break;
    }
  }

  return (
    <>
      <div
        className={cn(
          "absolute w-full h-full",
          thisVideo.isLocked && "pointer-events-none",
        )}
      >
        {playerElement}
      </div>
    </>
  );
}
