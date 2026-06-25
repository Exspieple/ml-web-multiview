import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";
import { cn } from "../../lib/utils";

export default function VideoTileLabel({
  iframeRef,
}: {
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
}) {
  const { videoData, setVideoData } = useContext(VideoDataContext);

  const thisVideoIndex = useContext(VideoTileIndexContext);
  const thisVideo = videoData[thisVideoIndex];

  let thisVideoURL = "https://example.com/" + thisVideo.platformID;

  /* let thisVideoURL = "";
  switch (thisVideo.platform) {
    case "youtube":
      thisVideoURL =
        "https://www.youtube-nocookie.com/embed/" +
        thisVideo.platformID +
        "?autoplay=1&controls=0";
      break;

    default:
      thisVideoURL = thisVideo.platformID;
      break;
  } */

  return (
    <>
      <div
        className={cn(
          "absolute w-full h-full",
          thisVideo.isLocked && "pointer-events-none",
        )}
      >
        <iframe
          ref={iframeRef}
          src={thisVideoURL}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
