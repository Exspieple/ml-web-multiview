import { createContext, useEffect, useState } from "react";

type VideoDataContextType = {
  videoData: [VideoTileType],
  setVideoData: React.Dispatch<React.SetStateAction<[VideoTileType]>> | undefined;
};

export const VideoDataContext = createContext<VideoDataContextType>({
  videoData: [{platform: "", platformID: ""}],
  setVideoData: undefined,
});

export default function VideoDataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [videoData, setVideoData] = useState<[VideoTileType]>([{platform: "", platformID: ""}]);

  useEffect(() => {
    fetch("/data/webcamsAfricam.json")
      .then((res) => res.json())
      .then(setVideoData);
  }, []);

  return (
    <VideoDataContext value={{ videoData, setVideoData }}>
      {children}
    </VideoDataContext>
  );
}

interface VideoTileType {
  platform: string;
  platformID: string;
  label?: string;
  isMuted?: boolean;
  isHidden?: boolean;
  isLocked?: boolean;
}