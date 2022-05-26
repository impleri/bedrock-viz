import { Button } from "grommet";
import { Contract, Expand } from "grommet-icons";

import { useToggleFullScreen } from "../hooks";
import { Control } from "./Control";

export const FullScreen = () => {
  const [isFullScreen, toggle, canToggle] = useToggleFullScreen();

  if (!canToggle) {
    return;
  }

  let Icon = Expand;
  let tip = "Enter Full Screen";
  if (isFullScreen) {
    Icon = Contract;
    tip = "Exit Full Screen";
  }

  return (
    <Control top="3rem" right="1rem">
      <Button primary kind="control" active={isFullScreen} icon={<Icon />} onClick={toggle} tip={tip} />
    </Control>
  );
};
