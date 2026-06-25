import {
  Fullscreen,
  Lock,
  LockOpen,
  RotateCw,
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
  reloadFrame,
}: {
  children?: React.ReactNode;
  reloadFrame: () => void;
}) {
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

  const toggleLock = () => {
    if (!setVideoData) return;

    thisVideo.isLocked = !thisVideo.isLocked;

    setVideoData(
      videoData.toSpliced(thisVideoIndex, 1, thisVideo) as typeof videoData,
    );
  };


  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
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
          <ContextMenuItem onClick={toggleLock}>
            {thisVideo.isLocked ? (
              <>
                <LockOpen />
                <span>Unlock interface</span>
              </>
            ) : (
              <>
                <Lock />
                <span>Lock interface</span>
              </>
            )}
          </ContextMenuItem>
          <ContextMenuItem>
            <Fullscreen />
            <span>Full screen</span>
          </ContextMenuItem>
          <ContextMenuItem variant={"destructive"} onClick={reloadFrame}>
            <RotateCw />
            <span>Reload tile</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}
