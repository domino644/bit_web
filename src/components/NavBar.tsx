import { Box, Button, Tooltip } from "@mui/material";
import englandFlag from "../static/png/england.png";
import swedenFlag from "../static/png/sweden.png";
import norwayFlag from "../static/png/norway.png";
import "../css/NavBar.css";
import { Params, useNavigate, useParams } from "react-router-dom";
import { AvailableLanguages } from "../types/AvailableLanguages";
import HelpIcon from "@mui/icons-material/Help";

export const NavBar = () => {
  const navigate = useNavigate();
  const { _, year }: Readonly<Params<string>> = useParams();
  const handleClick = (l: AvailableLanguages) => {
    navigate(`/prizes/${l}/${year}`);
  };
  const handleBack = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "10px",
          margin: "10px",
          width: "50%",
        }}
      >
        <Button onClick={handleBack}>Back</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
          margin: "10px",
          width: "50%",
        }}
      >
        <Tooltip title="Some laureates lack some information in Swedish or Norwegian, so sometimes info may be only in English :(">
          <HelpIcon color="primary" />
        </Tooltip>
        <button className="flagButton">
          <img
            width={25}
            height={25}
            style={{
              aspectRatio: "1:1",
            }}
            src={englandFlag}
            alt="flag of england"
            onClick={() => handleClick("en")}
          />
        </button>
        <button className="flagButton">
          <img
            width={25}
            height={25}
            style={{
              aspectRatio: "1:1",
            }}
            src={swedenFlag}
            alt="flag of sweden"
            onClick={() => handleClick("se")}
          />
        </button>
        <button className="flagButton">
          <img
            width={25}
            height={25}
            style={{
              aspectRatio: "1:1",
            }}
            src={norwayFlag}
            alt="flag of norway"
            onClick={() => handleClick("no")}
          />
        </button>
      </Box>
    </Box>
  );
};
