import VideoTileLabel from "./VideoTileLabel";
import VideoTilePlayer from "./VideoTilePlayer";
import VideoTileContextMenu from "./VideoTileContextMenu";
import { useContext, useRef } from "react";
import { GlobalSettingsContext } from "../../contexts/GlobalSettingsContext";

export default function VideoTile() {
  const playerRef = useRef<HTMLIFrameElement | null>(null);

  const { globalSettings } = useContext(GlobalSettingsContext);

  function toggleFullscreen() {
    playerRef.current?.requestFullscreen();
  }

  return (
    <div className="w-full aspect-video relative" ref={playerRef}>
      <VideoTileContextMenu toggleFullscreen={toggleFullscreen}>
        {!globalSettings.isLabelsHidden && <VideoTileLabel />}
        <VideoTilePlayer />
      </VideoTileContextMenu>
    </div>
  );
}
