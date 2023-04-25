import { Dispatch, SetStateAction } from "react";

export interface INavlinksProps {
  toHamburgerMenu: boolean;
  closeHamburgerMenu?: Dispatch<SetStateAction<boolean>>;
}
