require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_TOKEN })
  .base(process.env.VITE_AIRTABLE_BASE_ID)
  .table(process.env.VITE_AIRTABLE_TABLE_NAME);

exports.handler = async function (event, context, cb) {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: JSON.stringify({ msg: `No product is found with id =${id}` }),
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify({ product }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          msg: `An error occurred. ${error}`,
        }),
      };
    }
  }
};
