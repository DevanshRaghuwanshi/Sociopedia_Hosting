import { Box } from "@mui/material";

// ✅ Define base URL using env variable
const BASE_URL = process.env.REACT_APP_BASE_URL;

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${BASE_URL}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
