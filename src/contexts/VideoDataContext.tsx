import { createContext, useState } from "react";

interface VideoTileType {
  platform: string;
  platformID: string;
  label?: string;
  isMuted?: boolean;
  isHidden?: boolean;
  isLocked?: boolean;
}

type VideoDataContextType = {
  videoData: VideoTileType[];
  setVideoData:
    | React.Dispatch<React.SetStateAction<VideoTileType[]>>
    | undefined;
};

export const VideoDataContext = createContext<VideoDataContextType>({
  videoData: [],
  setVideoData: undefined,
});

export default function VideoDataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [videoData, setVideoData] = useState<VideoTileType[]>([]);

  return (
    <VideoDataContext value={{ videoData, setVideoData }}>
      {children}
    </VideoDataContext>
  );
}
