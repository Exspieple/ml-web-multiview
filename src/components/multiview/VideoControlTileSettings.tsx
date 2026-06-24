import { LockOpen, RotateCcw, Settings, Tag, Volume2 } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

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
  return (
    <Button variant={"outline"}>
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
      <RotateCcw />
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