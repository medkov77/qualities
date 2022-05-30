import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import qualityService from "../services/quality.service";
import { toast } from "react-toastify";
import QualityForm from "../components/ui/qualityForm";

const EditQualityPage = () => {
    const [quality, setQuality] = useState(null);
    const [errors, setErrors] = useState(null);
    const id = useParams().id;
    const updateQuality = async content => {
        try {
            const data = await qualityService.update(id, content);
            return data.content;
        } catch (error) {
            const { message, code } = error.response.data;
            setErrors({ message, code });
            toast.error(message);
            console.log(errors);
        }
    };
    const getQuality = async id => {
        try {
            const data = await qualityService.get(id);
            return data.content;
        } catch (error) {
            console.log("expected error");
        }
    };

    const handleSubmit = data => {
        updateQuality(data);
    };
    useEffect(() => {
        getQuality(id).then(data => setQuality(data));
    }, [id]);

    return (
        <>
            <h1>Edit Quality Page</h1>{" "}
            {quality !== null ? (
                <QualityForm data={quality} onSubmit={handleSubmit} />
            ) : (
                "loading"
            )}
        </>
    );
};

export default EditQualityPage;
