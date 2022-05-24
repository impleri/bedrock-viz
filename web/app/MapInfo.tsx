import { DimensionInfoProvider, MapInfoProvider, MapOptionsProvider } from "./contexts/index";
import { ThemeProvider } from "./layout/ThemeProvider";
import { useInfo } from "./hooks";
import { PropsWithChildren } from "react";

type Props = {
  passive?: boolean;
};

export const MapInfo = ({ children }: PropsWithChildren<Props>) => {
  const { data } = useInfo();

  if (!data?.generatedAt) {
    return null;
  }

  const { generatorVersion, generatedAt, tileSize, name, seed, dimensions } = data;

  return (
    <ThemeProvider>
      <MapInfoProvider
        bedrockVizVersion={generatorVersion}
        createdAt={new Date(generatedAt)}
        dimensions={dimensions}
        name={name}
        seed={seed}
        tileSize={tileSize || undefined}
      >
        <DimensionInfoProvider>
          <MapOptionsProvider>{children}</MapOptionsProvider>
        </DimensionInfoProvider>
      </MapInfoProvider>
    </ThemeProvider>
  );
};
