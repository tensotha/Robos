import { CHANGE_SEARCHFIELD } from "./constants";

export const setSearcgField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})