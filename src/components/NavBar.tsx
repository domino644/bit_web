import { Box } from "@mui/material";
import englandFlag from "../static/png/england.png";
import swedenFlag from "../static/png/sweden.png";
import norwayFlag from "../static/png/norway.png";
import "../css/NavBar.css";

export default function NavBar() {
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
        />
      </button>
    </Box>
  );
}
