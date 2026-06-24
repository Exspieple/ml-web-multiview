import { Fullscreen, LockOpen, Volume2, VolumeX } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";

export default function VideoTileContextMenu() {
  const { videoData, setVideoData } = useContext(VideoDataContext);

  const thisVideoIndex = useContext(VideoTileIndexContext);
  const thisVideo = videoData[thisVideoIndex];

  const toggleMute = () => {
    if (!setVideoData) return;

    thisVideo.isMuted = !thisVideo.isMuted;

    setVideoData(
      videoData.toSpliced(thisVideoIndex, 1, thisVideo) as typeof videoData,
    );
  };

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger className="absolute w-full h-full"></ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={toggleMute}>
              {thisVideo.isMuted ? (
                <>
                  <Volume2 />
                  <span>Enable audio</span>
                </>
              ) : (
                <>
                  <VolumeX />
                  <span>Disable audio</span>
                </>
              )}
          </ContextMenuItem>
          <ContextMenuItem>
            <LockOpen />
            <span>Lock interface</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Fullscreen />
            <span>Full screen</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}
