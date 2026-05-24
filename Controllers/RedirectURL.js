import { URLs } from "../Models/url.js";
import redisClient from "../Utils/redis.js";

export const RedirectURL = async (req, res) => {
    const { shortId } = req.params;
    try {
        // Pehle Redis cache check karo
        const cached = await redisClient.get(shortId);
        if (cached) {
            return res.redirect(cached);
        }

        // MongoDB se lo
        const element = await URLs.findOne({ shortId });
        if (!element) {
            return res.status(404).json({ ok: false, message: "URL not found" });
        }

        // Cache mein save karo
        await redisClient.set(shortId, element.longUrl, { EX: 3600 });

        res.redirect(element.longUrl);
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
};
