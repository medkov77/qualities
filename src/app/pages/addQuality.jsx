import React from "react";
import { useHistory } from "react-router";
import QualityForm from "../components/ui/qualityForm";
import { useQualities } from "../hooks/useQualities";

const AddQualityPage = () => {
  const history = useHistory();
  const { addQoaluty } = useQualities();
  const handleSubmit = (data) => {
    addQoaluty(data).then((data) => {
      if (data) history.push("/");
    });
  };

  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddQualityPage;
