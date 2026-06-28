import { useContext } from "react";
import { GlobalSettingsContext } from "../../contexts/GlobalSettingsContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialogBaseUI";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SettingsDialogPreset from "./SettingsDialogPreset";

export default function SettingsDialog() {
  const { globalSettings, setGlobalSettings } = useContext(
    GlobalSettingsContext,
  );

  function toggleOpenSettings() {
    if (!setGlobalSettings) return;

    setGlobalSettings({
      ...globalSettings,
      isSettingsOpen: !globalSettings.isSettingsOpen,
    });
  }

  return (
    <Dialog
      open={globalSettings.isSettingsOpen}
      onOpenChange={toggleOpenSettings}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Multiview configuration</DialogTitle>
          <DialogDescription render={<SettingsDialogTabs />} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function SettingsDialogTabs() {
  return (
    <Tabs defaultValue="preset">
      <TabsList>
        <TabsTrigger value="preset">Import from preset</TabsTrigger>
        <TabsTrigger value="modify" disabled>
          Modify current
        </TabsTrigger>
        <TabsTrigger value="new" disabled>
          Create new
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preset">
        <SettingsDialogPreset />
      </TabsContent>
      <TabsContent value="modify">Modify the current config</TabsContent>
      <TabsContent value="new">Create your own multiview</TabsContent>
    </Tabs>
  );
}
