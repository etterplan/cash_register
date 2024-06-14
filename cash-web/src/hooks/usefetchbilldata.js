import { useEffect } from 'react';

const URL_DB_SERVER = "http://localhost:5000";

const useFetchBillData = (guestId, setData) => {
    useEffect(() => {
      if (guestId !== -1) {
        const url = `${URL_DB_SERVER}/getbilldata?guestId=${guestId})`;
        fetch(url)
            .then((res) => res.json())
            .then(data => setData(data));
      } else {
        setData([setData]);
      }
    }, []);
};

export default useFetchBillData;