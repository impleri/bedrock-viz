import { Main, Page as UiPage } from "grommet";

import { DimensionInfoProvider, MapInfoProvider, MapOptionsProvider, MapStateProvider } from "./contexts";
import { useInfo } from "./hooks";
import { Loading } from "./Loading";
import { Map } from "./Map";

export const Page = () => {
  const { isLoaded, data } = useInfo();

  // Loading screen
  if (!isLoaded) {
    return <Loading />;
  }

  if (!data?.generatedAt) {
    return <div>Failed to read data</div>;
  }

  const { generatorVersion, generatedAt, tileSize, name, seed, dimensions, worldSpawn } = data;

  return (
    <MapInfoProvider
      bedrockVizVersion={generatorVersion}
      createdAt={new Date(generatedAt)}
      dimensions={dimensions}
      name={name}
      seed={seed}
      tileSize={tileSize || undefined}
      worldSpawn={worldSpawn}
    >
      <DimensionInfoProvider>
        <MapOptionsProvider>
          <UiPage kind="full" fill>
            <Main>
              <MapStateProvider>
                <Map />
              </MapStateProvider>
            </Main>
          </UiPage>
        </MapOptionsProvider>
      </DimensionInfoProvider>
    </MapInfoProvider>
  );
};
