import React, { useState } from "react";
import Input from "../Input";


const editableField = (value:any, onChange :any) => {
    const [isEditing, setIsEditing] = useState(false);
    const [fieldValue, setFieldValue] = useState(value);
  
    if (isEditing) {
      return (
        <Input
          type="text"
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          onBlur={() => {
            setIsEditing(false);
            onChange(fieldValue);
          }}
          autoFocus
        />
      );
    }
  
    return (
      <span onClick={() => setIsEditing(true)} style={{ cursor: "pointer" }}>
        {value}
      </span>
    );
  };

export default editableField;