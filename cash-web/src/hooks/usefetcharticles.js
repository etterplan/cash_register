import { useState, useEffect } from 'react';

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.DB_SERVER_API}/articles`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        console.log(jsonData);
        setArticles(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };

    console.log("fetchData:::")
    fetchData();
  }, []);

  return { articles, error };
};

export default useFetchArticles;
