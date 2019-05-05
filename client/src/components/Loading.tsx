import * as React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <div
      style={{
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
