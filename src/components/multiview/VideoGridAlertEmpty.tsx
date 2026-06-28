import { Alert, AlertAction, AlertDescription, AlertTitle } from "../ui/alert";
import { BtnSettings } from "./VideoControlTileSettings";

export default function VideoGridAlertEmpty() {
  return (
    <div className="w-full h-full grid items-center justify-center">
      <Alert className="max-w-sm">
        <AlertTitle>No multiview configured!</AlertTitle>
        <AlertDescription>
          Your multiview does currently not contain any video streams. Go to the
          settings to either import a preset or to create your own multiview.
        </AlertDescription>
        <AlertAction >
          <BtnSettings />
        </AlertAction>
      </Alert>
    </div>
  );
}
