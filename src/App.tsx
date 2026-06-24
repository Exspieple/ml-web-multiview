import "./App.css";
import VideoGrid from "./components/multiview/VideoGrid";
import VideoDataContextProvider from "./contexts/VideoDataContext";

function App() {
  return (
    <>
      <VideoDataContextProvider>
        <VideoGrid />
      </VideoDataContextProvider>
    </>
  );
}

export default App;
