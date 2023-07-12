import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  environment: 'master',
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENT_DELIVERY_ACCESS_TOKEN,
});

export const useFetchData = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields.file.url;
        return { id, title, url, img };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);
  return { isLoading, projects };
};
