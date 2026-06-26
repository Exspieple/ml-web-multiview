import { LockOpen, Volume2, VolumeX } from "lucide-react";

import { useContext, useState } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";
import { GlobalSettingsContext } from "../../contexts/GlobalSettingsContext";
import { Button } from "../ui/button";

export default function VideoTileLabel() {
  const { videoData } = useContext(VideoDataContext);

  const thisVideoIndex = useContext(VideoTileIndexContext);
  const thisVideo = videoData[thisVideoIndex];

  const { globalSettings } = useContext(GlobalSettingsContext);

  const [isFullscreen, setIsFullscreen] = useState(false);

  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement == null) {
      console.log("fs false");
      setIsFullscreen(false);
    } else {
      console.log("fs true");
      setIsFullscreen(true);
    }
  });

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 bg-[hsl(0_0%_0%/0.8)] flex justify-between items-center py-1 px-2 z-10">
        <div className="text-white text-center w-full">
          {thisVideoIndex + 1} {thisVideo.label && `- ${thisVideo.label}`}
        </div>
        <div className="flex gap-1 items-center">
          {!thisVideo.isMuted && !globalSettings.isMutedOverwrite && (
            <Volume2 color="lime" size="1em" />
          )}
          {!thisVideo.isMuted && globalSettings.isMutedOverwrite && (
            <VolumeX color="red" size="1em" />
          )}
          {!thisVideo.isLocked && <LockOpen color="orange" size="1em" />}
          {isFullscreen && (
            <Button
              variant={"link"}
              onClick={() => {
                document.exitFullscreen();
              }}
            >
              Exit fullscreen
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
