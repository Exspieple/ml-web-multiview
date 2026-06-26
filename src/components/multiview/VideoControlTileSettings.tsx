import { LockOpen, RotateCw, Settings, Tag, Volume2 } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useContext } from "react";
import { GlobalSettingsContext } from "../../contexts/GlobalSettingsContext";

export default function VideoControlTileSettings() {
  return (
    <>
      <div className="flex gap-2 justify-center">
        <BtnLock />
        <BtnMute />
        <BtnLabel />

        <Separator orientation="vertical" />

        <BtnReload />
        <BtnSettings />
      </div>
    </>
  );
}

function BtnLock() {
  return (
    <Button variant={"outline"}>
      <LockOpen />
    </Button>
  );
}

function BtnMute() {
  return (
    <Button variant={"outline"}>
      <Volume2 />
    </Button>
  );
}

function BtnLabel() {
  const { globalSettings, setGlobalSettings } = useContext(GlobalSettingsContext);

  function toggleLabel() {
    if (!setGlobalSettings) return;

    setGlobalSettings({
      ...globalSettings,
      isLabelsHidden: !globalSettings.isLabelsHidden,
    });
  }

  return (
    <Button variant={globalSettings.isLabelsHidden ? "outline" : "secondary"} onClick={toggleLabel}>
      <Tag />
    </Button>
  );
}

function BtnReload() {
  const onclick = () => {
    window.location.reload();
  };

  return (
    <Button variant={"outline"} onClick={onclick}>
      <RotateCw />
    </Button>
  );
}

function BtnSettings() {
  return (
    <Button variant={"outline"}>
      <Settings />
    </Button>
  );
}
