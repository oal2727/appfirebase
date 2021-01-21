import React from "react";
import TextField from "@material-ui/core/TextField";
import {  Controller } from "react-hook-form";

const InputComponent = ({ control,label,type,name }) => {
  return <Controller
    control={control}
    as={TextField}
    type={type}
    name={name}
    rules={{ required: true }}
    defaultValue=""
    style={{width:"100%",marginTop:15}}
    label={label} 
    />;
};
export default InputComponent;
