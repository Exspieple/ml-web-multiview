import {
  Fullscreen,
  Lock,
  LockOpen,
  Volume2,
  VolumeX,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";

export default function VideoTileContextMenu({
  children,
  toggleFullscreen,
}: {
  children?: React.ReactNode;
  reloadFrame?: () => void;
  toggleFullscreen: () => void;
}) {
  const { videoData, setVideoData } = useContext(VideoDataContext);

  const thisVideoIndex = useContext(VideoTileIndexContext);
  const thisVideo = videoData[thisVideoIndex];

  function toggleMute() {
    if (!setVideoData) return;

    thisVideo.isMuted = !thisVideo.isMuted;

    setVideoData(
      videoData.toSpliced(thisVideoIndex, 1, thisVideo) as typeof videoData,
    );
  }

  function toggleLock() {
    if (!setVideoData) return;

    thisVideo.isLocked = !thisVideo.isLocked;

    setVideoData(
      videoData.toSpliced(thisVideoIndex, 1, thisVideo) as typeof videoData,
    );
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger className="w-full h-full absolute">
          {children}
        </ContextMenuTrigger>
        <ContextMenuContent className="z-2147483647">
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
          <ContextMenuItem onClick={toggleFullscreen}>
            {/* {thisVideo.isFullscreen ? (
              <>
                <Fullscreen />
                <span>Exit fullscreen</span>
              </>
            ) : ( */}
            <>
              <Fullscreen />
              <span>Fullscreen</span>
            </>
            {/* )} */}
          </ContextMenuItem>
          <ContextMenuItem onClick={toggleLock}>
            {thisVideo.isLocked ? (
              <>
                <LockOpen />
                <span>Unlock frame</span>
              </>
            ) : (
              <>
                <Lock />
                <span>Lock frame</span>
              </>
            )}
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}
