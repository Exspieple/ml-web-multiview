import "./App.css";
import VideoGrid from "./components/multiview/VideoGrid";
import GlobalSettingsContextProvider from "./contexts/GlobalSettingsContext";
import VideoDataContextProvider from "./contexts/VideoDataContext";

function App() {
  return (
    <>
      <GlobalSettingsContextProvider>
        <VideoDataContextProvider>
          <VideoGrid />
        </VideoDataContextProvider>
      </GlobalSettingsContextProvider>
    </>
  );
}

export default App;
