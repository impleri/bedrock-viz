import { Main, Page, PageContent } from "grommet";
import { PropsWithChildren } from "react";

type Props = {
  children?: unknown;
};

import { Header } from "./Header";

export const PageLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Page kind="full" fill>
      <Header />
      <PageContent fill>
        <Main>{children}</Main>
      </PageContent>
    </Page>
  );
};
