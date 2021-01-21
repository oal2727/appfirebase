import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardComponent = ({ title, children }) => {
  return (
    <Card style={{ width: 300, margin: "auto" }}>
      <Typography variant="h5" style={{marginLeft:10,marginTop:10}} component="h2">
        {title}
      </Typography>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
export default CardComponent;
