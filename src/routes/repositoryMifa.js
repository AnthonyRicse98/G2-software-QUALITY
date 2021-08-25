const express = require('express');
const { google } = require("googleapis");
const { propfind } = require("./email");

const oAuth2Client = new google.auth.OAuth2(
  "505566547689-tain50kkdp2bu54iesbh5rqa6mjr6pe6.apps.googleusercontent.com",
  "sg11wIeoSsQWYmFf4t7P3YNq",
  "urn:ietf:wg:oauth:2.0:oob"
);

oAuth2Client.setCredentials({
  access_token:
    "ya29.a0ARrdaM_NwsQfcM6KjoJouexWl-4CTTN5NSIn_CvX6FqG4yfwS6JsEal44f_nQipY1LYwheG5JeqijR_8VJWhWfI5Et9rquZTpI_k4by9qEimwa_Jvg2_yQk6UZkn554bG-Ee-QFu6humdl-1jzIGAntdFLvn",
  refresh_token:
    "1//0hm66Niz6sBNTCgYIARAAGBESNwF-L9Ir18blcO2e2WePR3EzD8tPJmDwY_VSk-w4X-YlKQWljZ28g6yZ5M2wBhRg4Gi2lGUV6kE",
  scope: "https://www.googleapis.com/auth/spreadsheets",
  token_type: "Bearer",
  expiry_date:1629910999417,
});

const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

async function read(){
    const response  = await sheets.spreadsheets.values.get({
        spreadsheetId: '1jehcykjCyFqaqEHl0rBqmbMLwc4w332QZDIaMdw0cTE',
         range: 'productsFormula!A2:E',
    });

    const rows = response.data.values;
    const productsMifaf = rows.map((row) => ({
        id : +row[0],
        name : row[1],
        price:+row[2],
        image:row[3],
        stock:+row[4],
    }))
console.log(productsMifaf)
return productsMifaf;
}
module.exports = {
  read,
};




