import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const redisClient = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
    },
});

redisClient.on("error", (err) => console.log("Redis Error:", err.message));

export const connectRedis = async () => {
    try {
        if (!redisClient.isOpen) {
            await redisClient.connect();
        }
        console.log("Redis Connected");
    } catch (err) {
        console.log("Redis failed — continuing without cache");
    }
};

export default redisClient;
