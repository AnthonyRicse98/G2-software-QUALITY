const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(
  "515081122013-nbl2tpev850l413deaid7a56dkfpl8t6.apps.googleusercontent.com",
  "BRiyuy2zkmEjv_zdywY0NOJX",
  "urn:ietf:wg:oauth:2.0:oob"
);

oAuth2Client.setCredentials({
  access_token:
    "ya29.a0ARrdaM_2sYRXRyJO8w_VM74INOYR5HG0-UPGCacjVWwL8efbGk4gh1Pm1f2XGrLflmnuBY2eeToO43omxezENq_cglwxzwSPrVhaR1flPOUWbFdLlca4liN_IpjmObEsYhUBUQTWoY3ahZSRcwviyQ9mKwGV",
  refresh_token:
    "1//01pWn_KGpXH3_CgYIARAAGAESNwF-L9IrrSqkWoqLeNw3RyIvtZ5KfQsnI4kYFcXdZdFyBH7KvGss348rfTMSXoy5twrQWcCrYZg",
  scope: "https://www.googleapis.com/auth/spreadsheets",
  token_type: "Bearer",
  expiry_date: 1628125078967,
});

const sheets = google.sheets({ version: "v4", auth: oAuth2Client });



async function read() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '1Yr78CP00aaV_WqXIVu9bS-ScAYdtBj7aiLN1k8N7XmE',
    range: "Products!A2:E",
  });

  const rows = response.data.values;
  const productsF = rows.map((row) => ({
    id: +row[0],
    name: row[1],
    price: +row[2],
    image: row[3],
    stock: +row[4],
  }));
  return productsF;

}


async function write(productsF) {
  let values = productsF.map(p => [p.id, p.name, p.price, p.image, p.stock])
  const resource = {
    values,
  };

  const result = await sheets.spreadsheets.values.update({
    spreadsheetId: "1Yr78CP00aaV_WqXIVu9bS-ScAYdtBj7aiLN1k8N7XmE",
    range: "Products!A2:E",
    valueInputOption: "RAW",
    resource,

  });

  console.log(result.updateCells);

}
/*
async function readAndWrite() {
  const productsF = await read();
  await write(productsF);
  productsF[0].stock = 40 ; 
  await write(productsF);
}

readAndWrite();*/

module.exports = { 

read,
write,

}
