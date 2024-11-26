import { atom } from "jotai";
import { Language } from "./utils/languages";

export const languagesAtom = atom<Language[]>()
