import VideoControlTileClock from "./VideoControlTileClock";
import VideoControlTileSettings from "./VideoControlTileSettings";

export default function VideoControlTile() {
  return (
    <>
      <div className="w-full h-full relative grid items-center content-center gap-5">
        <VideoControlTileClock />
        <VideoControlTileSettings />
      </div>
    </>
  );
}
