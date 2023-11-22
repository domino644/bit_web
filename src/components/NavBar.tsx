import { Box } from "@mui/material";
import englandFlag from "../static/png/england.png";
import swedenFlag from "../static/png/sweden.png";
import norwayFlag from "../static/png/norway.png";
import "../css/NavBar.css";
import { Params, useNavigate, useParams } from "react-router-dom";
import { AvailableLanguages } from "../types/AvailableLanguages";

export default function NavBar() {
  const navigate = useNavigate();
  const { _, year }: Readonly<Params<string>> = useParams();
  const handleClick = (l: AvailableLanguages) => {
    navigate(`/prizes/${l}/${year}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
        margin: "10px",
      }}
    >
      <button>
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
      <button>
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
      <button>
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
  );
}
