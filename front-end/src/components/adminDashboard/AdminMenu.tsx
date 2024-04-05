import { Box, Button, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";

export default function AdminMenu() {
  return (
    <>
      <Box
        sx={{
          padding: "26px 24px 26px 120px",
          width: "402px",
        }}
      >
        <Box
          sx={{
            width: "258px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "flex-start",
            background: "white",
          }}
        >
          <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
            Food menu
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              height: "full",
              width: "258px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "40px",
                paddingX: "16px",
                paddingY: "8px",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "8px",
                border: "1px solid #D6D8DB",
                ":hover": {
                  backgroundColor: "#18BA51",
                  color: "white",
                },
              }}
            >
              <Typography>Category name</Typography>
              <MoreVertIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                height: "40px",
                paddingX: "16px",
                paddingY: "8px",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "8px",
                border: "1px solid #D6D8DB",
              }}
            >
              <Button
                sx={{ color: "#5E6166", justifyContent: "center", gap: "8px" }}
              >
                <AddIcon /> Crate new category
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
