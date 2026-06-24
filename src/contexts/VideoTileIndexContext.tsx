import { createContext } from "react";

export const VideoTileIndexContext = createContext<number>(0);

export default function VideoTileIndexContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <VideoTileIndexContext value={0}>
      {children}
    </VideoTileIndexContext>
  );
}