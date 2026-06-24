import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import VideoControlTile from "./VideoControlTile";
import VideoTile from "./VideoTile";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";

export default function VideoGrid() {
  const { videoData, setVideoData } = useContext(VideoDataContext);

  return (
    <>
      <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-0">
        {videoData?.map((_, index) => (
          <VideoTileIndexContext key={index} value={index}>
            <VideoTile />
          </VideoTileIndexContext>
        ))}
        <VideoControlTile />
      </div>
    </>
  );
}
