"use client";

import { useContext } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox";
import {
  GlobalSettingsContext,
  type multiviewPresetType,
} from "../../contexts/GlobalSettingsContext";
import { VideoDataContext } from "../../contexts/VideoDataContext";

export default function SettingsDialogPreset() {
  const { globalSettings, setGlobalSettings } = useContext(
    GlobalSettingsContext,
  );
  const { setVideoData } = useContext(VideoDataContext);

  function handlePresetChange(preset: multiviewPresetType | null | undefined) {
    if (!preset) return;

    fetch(preset.hrefJSON)
      .then((response) => response.json())
      .then(setVideoData);

    if (!setGlobalSettings) return;
    setGlobalSettings({
      ...globalSettings,
      isSettingsOpen: false,
    });
  }

  return (
    <>
      <div>
        <div>Please select which preset you want to import:</div>
        <Combobox
          items={globalSettings.multiviewPresets}
          autoHighlight
          onValueChange={handlePresetChange}
        >
          <ComboboxInput placeholder="Browse all available multiviews..." />
          <ComboboxContent>
            <ComboboxEmpty>No multiview found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item.hrefJSON} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </>
  );
}
