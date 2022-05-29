import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import axios from "axios";
import config from "../config.json";

const QualitiesListPage = () => {
  const [qualityes, setQualityes] = useState([]);
  const history = useHistory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { data } = await axios.get("quality");
    setQualityes(data.content);
  }, []);
  const handleEdit = (param) => {
    console.log(param);
    history.push(`/edit/${param}`);
  };
  const handleDelete = (param) => {
    console.log(param);
  };
  return (
    <>
      <h1>Qualitites List Page</h1>
      <QualitiesTable
        onDelete={handleDelete}
        onEdit={handleEdit}
        data={qualityes}
      />
    </>
  );
};

export default QualitiesListPage;
