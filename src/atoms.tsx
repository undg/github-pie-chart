import { atom } from "jotai";
import { Language } from "./utils/get-language";

export const languagesAtom = atom<Language[]>()
