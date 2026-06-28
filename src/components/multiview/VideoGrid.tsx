import { useContext } from "react";
import { VideoDataContext } from "../../contexts/VideoDataContext";
import VideoControlTile from "./VideoControlTile";
import VideoTile from "./VideoTile";
import { VideoTileIndexContext } from "../../contexts/VideoTileIndexContext";
import VideoGridAlertEmpty from "./VideoGridAlertEmpty";

export default function VideoGrid() {
  const { videoData } = useContext(VideoDataContext);

  const gridSize = Math.ceil(Math.sqrt(videoData.length + 1))


  if(videoData.length == 0) return <VideoGridAlertEmpty />

  return (
    <>
      <div className="grid grid-cols-5 gap-0" style={{gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`}}>
        {videoData.map((_, index) => (
          <VideoTileIndexContext key={index} value={index}>
            <VideoTile />
          </VideoTileIndexContext>
        ))}
        <VideoControlTile />
      </div>
    </>
  );
}
