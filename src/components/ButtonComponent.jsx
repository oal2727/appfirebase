import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const ButtonComponent = ({ variant, onClick,type,color, children }) => {
  return (
    <Box style={{ marginTop: 20 }}>
      <Button 
      type={type} 
      variant={variant} 
      onClick={onClick}
      color={color}>
        {children}
      </Button>
    </Box>
  );
};
export default ButtonComponent;
