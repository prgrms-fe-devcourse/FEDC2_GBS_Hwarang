import { atom } from "recoil";

const authenticateState = atom({
  key: "authenticateState",
  default: false,
});

export default authenticateState;
