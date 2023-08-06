require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_TOKEN })
  .base(process.env.VITE_AIRTABLE_BASE_ID)
  .table(process.env.VITE_AIRTABLE_TABLE_NAME);

exports.handler = async function (event, context) {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map((p) => {
      const { id, fields } = p;
      const {
        category,
        colors,
        company,
        description,
        images,
        name,
        price,
        reviews,
        stars,
        stock,
      } = fields;
      const image = images[0].url;
      return {
        id,
        category,
        colors,
        company,
        description,
        image,
        name,
        price,
        reviews,
        stars,
        stock,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Server Error' }),
    };
  }
};
