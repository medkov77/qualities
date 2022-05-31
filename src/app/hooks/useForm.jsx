import React, { useState } from "react";

const useForm = (initialState = {}, onSubmit) => {
    console.log("init", initialState);
    const [form, setForm] = useState(initialState);
    const handeleSubmit = e => {
        e.preventDefault();
        console.log(form);
        onSubmit?.(form);
    };
    const handleChange = target => {
        console.log(target);
        setForm(prevState => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    return { form, handleChange, handeleSubmit };
};
export default useForm;
