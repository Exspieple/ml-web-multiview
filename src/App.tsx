import "./App.css";
import VideoGrid from "./components/multiview/VideoGrid";
import SettingsDialog from "./components/settings/SettingsDialog";
import GlobalSettingsContextProvider from "./contexts/GlobalSettingsContext";
import VideoDataContextProvider from "./contexts/VideoDataContext";

function App() {
  return (
    <>
      <GlobalSettingsContextProvider>
        <VideoDataContextProvider>
          <SettingsDialog />
          <VideoGrid />
        </VideoDataContextProvider>
      </GlobalSettingsContextProvider>
    </>
  );
}

export default App;
