import VideoTileLabel from "./VideoTileLabel";
import VideoTilePlayer from "./VideoTilePlayer";
import VideoTileContextMenu from "./VideoTileContextMenu";

export default function VideoTile() {
  return (
    <div className="w-full aspect-video relative">
      <VideoTileContextMenu>
        <VideoTileLabel />
      </VideoTileContextMenu>
      <VideoTilePlayer />
    </div>
  );
}
