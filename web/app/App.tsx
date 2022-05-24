import { Map } from "./map/Map";
import { PageLayout } from "./layout/PageLayout";
import { ThemeProvider } from "./layout/ThemeProvider";
import { MapInfo } from "./MapInfo";

export const App = () => {
  return (
    <ThemeProvider>
      <MapInfo>
        <PageLayout>
          <Map />
        </PageLayout>
      </MapInfo>
    </ThemeProvider>
  );
};
