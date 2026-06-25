import VideoTileLabel from "./VideoTileLabel";
import VideoTilePlayer from "./VideoTilePlayer";
import VideoTileContextMenu from "./VideoTileContextMenu";

import { useRef } from "react";

export default function VideoTile() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const reloadFrame = () => {
    if (!iframeRef.current) return;
    iframeRef.current.src = iframeRef.current.src;
  };

  return (
    <div className="w-full aspect-video relative">
      <VideoTileContextMenu reloadFrame={reloadFrame}>
        <VideoTileLabel />
      </VideoTileContextMenu>
      <VideoTilePlayer iframeRef={iframeRef} />
    </div>
  );
}
