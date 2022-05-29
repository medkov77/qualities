import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EditForm from "../components/ui/editForm";
import qualityService from "../services/quality.service";

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null);
  const id = useParams().id;
  const qualityEndPoint = `quality/${id}`;
  const uodateQuality = async (content) => {
    const data = await qualityService.update(id, content);
    console.log(data);
  };
  //   try {
  //     const { data } = await httpService.put(qualityEndPoint, content);
  //     return data;
  //   } catch (error) {
  //     console.log("expected error");
  //   }
  // };
  const getQuality = async (id) => {
    try {
      const { data } = await httpService.get(qualityEndPoint);
      return data;
    } catch (error) {
      console.log("expected error");
    }
  };

  const handleSubmit = (data) => {
    uodateQuality(data);
  };
  useEffect(() => {
    getQuality(id).then((data) => setQuality(data.content));
  }, []);

  return (
    <>
      <h1>Edit Quality Page</h1>{" "}
      {quality !== null ? (
        <EditForm data={quality} onSubmit={handleSubmit} />
      ) : (
        "loading"
      )}
    </>
  );
};

export default EditQualityPage;
