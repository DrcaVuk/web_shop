import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import LoadingSpinner from "../../shared/components/UI/LoadingSpinner/LoadingSpinner";
import Title from "../../shared/components/UI/Title/Title";
import NewslatterItem from "../components/NewslatterItem";

const NewslatterList = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [newslatter, setNewslatter] = useState([]);
  const [ page, setPage ] = useState(1)

  useEffect(() => {
    let newslatterData;
    const fetchData = async () => {
      try {
          newslatterData = await sendRequest(`/newslatter/${page}`, "GET");
          setNewslatter(newslatterData.data.existingEmailNewslatter.docs)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handlerDelete = async (id) => {
    try {
        await sendRequest(`/newslatter/${id}`, "DELETE");
        let data;
        newslatter.map((item) => {
            if(id !== item._id) {
                data = [...item];
            }
        }) 
        setNewslatter(data);
    } catch(err) {
        console.log(err)
    }
}

  return (
    <div className="container-fluid">
      <div className="container">
        <Title>Newslatter</Title>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <table id="table">
            <tr>
              <th>Email</th>
              <th>Active</th>
              <th>Date Time</th>
            </tr>
            {newslatter.map((item, index) => (
              <NewslatterItem
                key={index}
                id={item._id}
                email={(item = item.email)}
                isActive={item.isActive}
                handlerDelete={handlerDelete}
              />
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default NewslatterList;
