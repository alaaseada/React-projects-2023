const get_data = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Status was not OK for the API response');
    }
    const data = await response.json();
    const data_map = new Map(data.map((item) => [item.id, item]));
    return data_map;
  } catch (err) {
    console.log(err);
    return new Map();
  }
};
export const useFetch = (url) => {
  return { data: get_data(url) };
};
