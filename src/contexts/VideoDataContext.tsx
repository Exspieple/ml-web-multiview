import { createContext, useContext, useEffect, useState } from "react";
import { GlobalSettingsContext } from "./GlobalSettingsContext";

interface VideoTileType {
  platform: string;
  platformID: string;
  label?: string;
  isMuted?: boolean;
  isHidden?: boolean;
  isLocked?: boolean;
}

type VideoDataContextType = {
  videoData: [VideoTileType];
  setVideoData:
    | React.Dispatch<React.SetStateAction<[VideoTileType]>>
    | undefined;
};

export const VideoDataContext = createContext<VideoDataContextType>({
  videoData: [{ platform: "", platformID: "" }],
  setVideoData: undefined,
});

export default function VideoDataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [videoData, setVideoData] = useState<[VideoTileType]>([
    { platform: "", platformID: "" },
  ]);

  const { globalSettings, setGlobalSettings } = useContext(
    GlobalSettingsContext,
  );

  useEffect(() => {
    fetch(globalSettings.multiviewPresets[0]?.hrefJSON)
      .then((res) => res.json())
      .then(setVideoData);
  }, [globalSettings.multiviewPresets[0]?.hrefJSON]);

  return (
    <VideoDataContext value={{ videoData, setVideoData }}>
      {children}
    </VideoDataContext>
  );
}
