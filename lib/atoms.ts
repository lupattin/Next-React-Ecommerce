import { atom } from "recoil";

export const signInDisplay = atom({
    key: "signInDisplay",
    default: "flex"
  });
export const codeDisplay = atom({
    key: "codeDisplay",
    default: "none"
  });
export const headerNavDisplay = atom({
    key: "headerNavDisplay",
    default: "none"
  });
export const headerSignDisplay = atom({
    key: "headerSignDisplay",
    default: "flex"
  });
export const loadingDisplay = atom({
    key: "loadingDisplay",
    default: "none"
  });
export const loadingCodeDisplay = atom({
    key: "loadingCodeDisplay",
    default: "none"
  });
export const loadingUserDataDisplay = atom({
    key: "loadingUserDataDisplay",
    default: "none"
  });
export const AlertUserDataDisplay = atom({
    key: "AlertUserDataDisplay",
    default: "none"
  });
export const token = atom({
    key: "token",
    default: ""
  });
export const userDataAtom = atom({
    key: "userDataAtom",
    default: {}
  });

