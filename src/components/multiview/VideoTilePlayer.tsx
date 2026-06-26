import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";
import { cn } from "../../lib/utils";

import ReactPlayer from "react-player";

export default function VideoTileLabel({
  iframeRef: playerRef,
}: {
  iframeRef?: React.RefObject<HTMLIFrameElement | null>;
}) {
  const { videoData, setVideoData } = useContext(VideoDataContext);

  const thisVideoIndex = useContext(VideoTileIndexContext);
  const thisVideo = videoData[thisVideoIndex];

  /*   let thisVideoURL = "https://file-examples.com/storage/febcf227476a3e379a0ece5/2017/04/file_example_MP4_480_1_5MG.mp4"; */

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
          muted={thisVideo.isMuted}
        />
      </div>
    </>
  );
}
