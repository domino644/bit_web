import React from "react";
import { Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      component="h1"
      sx={{
        color: "red",
        textAlign: "center",
      }}
    >
      Error 404 page not found
    </Box>
  );
}
