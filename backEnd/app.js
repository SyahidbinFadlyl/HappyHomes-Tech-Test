const port = 3000;
import Editly from 'editly';
import pkg from 'express';
import cors from "cors";
import axios from "axios";
const express = pkg;


const app = express();


app.use(cors());
app.get('/adds', async (req, res) => {
    try {
        const { data } = await axios.get("https://dummyjson.com/products?limit=5");
        const products = data.products;
        const clips = products.map(e => {
            return {
                duration: 3,
                layers: [
                    { type: "image", path: e.thumbnail },
                    { type: "news-title", text: e.title },
                    { type: "subtitle", text: e.description }
                ]
            };
        });
        const video = await Editly({
            allowRemoteRequests: true,
            outPath: "./adds.gif",
            clips: clips
        });
        console.log(video);
        res.status(200).json({

        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});