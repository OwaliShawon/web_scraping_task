import express from 'express';
import fetch from "node-fetch";

const app = express()
const port = 3000
// URL for data
const URL = "https://www.otomoto.pl/ciezarowe/uzytkowe/mercedes-benz/ od-2014/q-actros?search%5Bfilter_enum_damaged%5D=0&search%5Border%5D=created_at %3Adesc";

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// function to get the raw data
const getRawData = (URL) => {
    return fetch(URL)
        .then((response) => response.text())
        .then((data) => {
            return data;
        });
};

// start of the program
const getAds = async () => {
    const adsRawData = await getRawData(URL);
    console.log(adsRawData);
};

// invoking the main function
getAds();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})