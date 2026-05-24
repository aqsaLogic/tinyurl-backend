import { URLs } from "../Models/url.js";
import { generateShortId } from "../Utils/Keys.js";

export const SaveURL = async (req, res) => {
    const { longUrl } = req.body;
    try {
        const shortId = generateShortId(7);
        const newURL = new URLs({ longUrl, shortId });
        await newURL.save();
        const shortURL = `https://tinyurl-backend-production.up.railway.app/${shortId}`;
        res.status(200).json({ ok: true, shortURL });
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
};
