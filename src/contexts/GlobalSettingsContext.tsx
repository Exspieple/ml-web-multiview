import { createContext, useEffect, useState } from "react";

interface GlobalSettingsType {
  isLabelsHidden: boolean;
  isMutedOverwrite: boolean;
  isTestMode: boolean;
  multiviewPresets: multiviewPresetType[];
  isSettingsOpen: boolean;
}

export interface multiviewPresetType {
  label: string;
  hrefJSON: string;
}

const globalSettingsDefault = {
  isLabelsHidden: false,
  isMutedOverwrite: false,
  isTestMode: false,
  multiviewPresets: [],
  isSettingsOpen: true,
};

type VideoDataContextType = {
  globalSettings: GlobalSettingsType;
  setGlobalSettings:
    | React.Dispatch<React.SetStateAction<GlobalSettingsType>>
    | undefined;
};

export const GlobalSettingsContext = createContext<VideoDataContextType>({
  globalSettings: globalSettingsDefault,
  setGlobalSettings: undefined,
});

export default function GlobalSettingsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [globalSettings, setGlobalSettings] = useState<GlobalSettingsType>(
    globalSettingsDefault,
  );

  useEffect(() => {
    fetch("/data/globalSettings.json")
      .then((res) => res.json())
      .then((data) => setGlobalSettings({ ...globalSettingsDefault, ...data }));
  }, []);

  return (
    <GlobalSettingsContext value={{ globalSettings, setGlobalSettings }}>
      {children}
    </GlobalSettingsContext>
  );
}
