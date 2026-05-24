import { URLs } from "../Models/url.js";
import { generateShortId } from "../Utils/Keys.js";

export const SaveURL = async (req, res) => {
    const { longUrl } = req.body;
    try {
        const shortId = generateShortId(7);
        const newURL = new URLs({ longUrl, shortId });
        await newURL.save();
        const shortURL = `${process.env.BACKEND_URL || "https://tbackend-production-1ca1.up.railway.app"}/${shortId}`;
        res.status(200).json({ ok: true, shortURL });
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
};
