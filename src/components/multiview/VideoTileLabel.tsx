import { LockOpen, Volume2 } from "lucide-react";

import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";

export default function VideoTileLabel() {
  const { videoData } = useContext(VideoDataContext);

  const thisVideoIndex = useContext(VideoTileIndexContext);
  const thisVideo = videoData[thisVideoIndex];

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 bg-[hsl(0_0%_0%/0.8)] flex justify-between items-center py-1 px-2 z-10">
        <div className="text-white text-center w-full">
          {thisVideoIndex + 1} {thisVideo.label && `- ${thisVideo.label}`}
        </div>
        <div className="flex gap-1">
          {!thisVideo.isMuted && <Volume2 color="lime" size="1em" />}
          {!thisVideo.isLocked && <LockOpen color="orange" size="1em" />}
        </div>
      </div>
    </>
  );
}
