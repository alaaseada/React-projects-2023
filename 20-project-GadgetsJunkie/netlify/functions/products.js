require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_TOKEN })
  .base(process.env.VITE_AIRTABLE_BASE_ID)
  .table(process.env.VITE_AIRTABLE_TABLE_NAME);

exports.handler = async function (event, context) {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Server Error' }),
    };
  }
};
