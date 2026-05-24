import { nanoid } from "nanoid";

export const generateShortId = (length = 7) => {
    return nanoid(length);
};
