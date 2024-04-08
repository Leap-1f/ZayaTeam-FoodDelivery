import { Box, Typography, Button, FormControlLabel } from "@mui/material";
import Textfield from "@mui/material/TextField";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

interface PropsType {
  pageroute: any;
}
const DEPLOYMENT_DB = process.env.NEXT_PUBLIC_SERVER_URL;
export const SignUp = ({ pageroute }: PropsType) => {
  const [name, setname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRePassword] = useState<string>("");
  const [district, setDistrict] = useState<string>("");

  const addUser = async () => {
    try {
      const res = await fetch(`${DEPLOYMENT_DB}/users/adduser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          district: district,
        }),
      });
      const data = res.json();
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          sx={{
            color: "#000000",
            width: "400px",
            display: "flex",
            justifyContent: "center",
            fontSize: "28px",
          }}
        >
          Бүртгүүлэх
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box>
            <Typography sx={{ color: "#000000" }}>Нэр</Typography>
            <Textfield
              type="text"
              onChange={(event) => {
                setname(event.target.value);
              }}
              placeholder="Нэрээ оруулна уу"
              sx={{
                backgroundColor: "#F7F7F8",
                borderWidth: "1px",
                borderColor: "#ECEDF0",
                width: "400px",
                borderRadius: "4px",
              }}
            ></Textfield>
          </Box>
          <Box>
            <Typography sx={{ color: "#000000" }}>И-мэйл</Typography>
            <Textfield
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="И-мэйл хаягаа оруулна уу"
              sx={{
                backgroundColor: "#F7F7F8",
                borderWidth: "1px",
                borderColor: "#ECEDF0",
                width: "400px",
                borderRadius: "4px",
              }} 
            ></Textfield>
          </Box>
          <Box>
            <Typography sx={{ color: "#000000" }}>Хаяг</Typography>
            <Textfield
              type="text"
              onChange={(event) => {
                setDistrict(event.target.value);
              }}
              placeholder="Та хаягаа оруулна уу"
              sx={{
                backgroundColor: "#F7F7F8",
                borderWidth: "1px",
                borderColor: "#ECEDF0",
                width: "400px",
                borderRadius: "4px",
              }}
            ></Textfield>
          </Box>
          <Box>
            <Typography sx={{ color: "#000000" }}>Нууц үг</Typography>
            <Textfield
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Нууц үгээ оруулна уу"
              sx={{
                backgroundColor: "#F7F7F8",
                borderWidth: "1px",
                borderColor: "#ECEDF0",
                width: "400px",
                borderRadius: "4px",
              }}
            ></Textfield>
          </Box>
          <Box>
            <Typography sx={{ color: "#000000" }}>Нууц үг давтах</Typography>
            <Textfield
              type="password"
              onChange={(event) => {
                setRePassword(event.target.value);
              }}
              placeholder="Нууц үгээ оруулна уу"
              sx={{
                backgroundColor: "#F7F7F8",
                borderWidth: "1px",
                borderColor: "#ECEDF0",
                width: "400px",
                borderRadius: "4px",
              }}
            ></Textfield>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Үйлчилгээний нөхцөл зөвшөөрөх"
            />
          </Box>
          <Button
            onClick={addUser}
            sx={{
              width: "400px",
              backgroundColor: "#18BA51",
              height: "48px",
              color: "#FFFFFF",
            }}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
