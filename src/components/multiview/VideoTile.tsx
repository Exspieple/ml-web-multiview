import VideoTileLabel from "./VideoTileLabel";
import VideoTilePlayer from "./VideoTilePlayer";
import VideoTileContextMenu from "./VideoTileContextMenu";
import { useRef } from "react";

export default function VideoTile() {
  const playerRef = useRef<HTMLIFrameElement | null>(null);

  function toggleFullscreen() {
    playerRef.current?.requestFullscreen()
  }

  return (
    <div className="w-full aspect-video relative" ref={playerRef}>
      <VideoTileContextMenu toggleFullscreen={toggleFullscreen}>
        <VideoTileLabel />
        <VideoTilePlayer />
      </VideoTileContextMenu>
    </div>
  );
}
