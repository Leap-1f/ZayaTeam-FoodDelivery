import { Box, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function formAddresSelect() {
  const [district, setDistrict] = useState<string>();

  const [card, setCard] = useState<boolean>(false);
  const [cash, setCash] = useState<boolean>(false);
  const name: string = "Main pizza";
  const price: number = 32000;

  const handleChange = (event: SelectChangeEvent) => {
    setDistrict(event.target.value as string);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "150px" }}>
      <Stack>
        <Stack
          sx={{
            width: "432px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "16px 24px 16px 24px",
            gap: "16px",
          }}
        >
          <Stack
            sx={{
              width: "48px",
              height: "48px",
              border: "1px solid #0468C8",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#0468C8",
              }}
            ></Stack>
          </Stack>
          <Stack>
            <Stack sx={{ fontSize: "14px", color: "#8B8E95" }}>Алхам 1</Stack>
            <Stack sx={{ fontSize: "20px", color: "#000000" }}>
              Хаягийн мэдээлэл оруулах
            </Stack>
            <Stack sx={{ fontSize: "14px", color: "#0468C8" }}>
              Хүлээгдэж байна
            </Stack>
          </Stack>
        </Stack>
        <Stack
          spacing={5}
          sx={{ padding: "24px", width: "432px", borderRadius: "16px" }}
        >
          <Stack spacing={2}>
            <Stack style={{ fontSize: "14px", color: "#000000" }}>
              Хаяг аа оруулна уу
            </Stack>
            <FormControl fullWidth>
              <InputLabel
                sx={{ display: "flex", alignItems: "center" }}
                id="demo-simple-select-label"
              >
                <FmdGoodOutlinedIcon /> Дүүрэг сонгоно уу
              </InputLabel>
              <Select
                sx={{ display: "flex", alignItems: "center" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="Дүүрэг сонгоно уу"
                onChange={handleChange}
              >
                <MenuItem
                  sx={{ display: "flex", alignItems: "center" }}
                  value={10}
                >
                  <FmdGoodOutlinedIcon />
                  Баянзүрх дүүрэг
                </MenuItem>
                <MenuItem value={20}>
                  <FmdGoodOutlinedIcon />
                  Хан-Уул дүүрэг
                </MenuItem>
                <MenuItem value={30}>
                  <FmdGoodOutlinedIcon />
                  Баянгол дүүрэг
                </MenuItem>
                <MenuItem value={40}>
                  <FmdGoodOutlinedIcon />
                  Сонгинохайрхан дүүрэг
                </MenuItem>
                <MenuItem value={50}>
                  <FmdGoodOutlinedIcon />
                  Чингэлтэй дүүрэг
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel
                sx={{ display: "flex", alignItems: "center" }}
                id="demo-simple-select-label"
              >
                <FmdGoodOutlinedIcon />
                Хороо сонгоно уу
              </InputLabel>
              <Select
                sx={{ display: "flex", alignItems: "center" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="Хороо сонгоно уу"
                onChange={handleChange}
              >
                <MenuItem
                  sx={{ display: "flex", alignItems: "center" }}
                  value={10}
                >
                  <FmdGoodOutlinedIcon />
                  1-р хороо
                </MenuItem>
                <MenuItem value={20}>
                  <FmdGoodOutlinedIcon />
                  2-р хороо
                </MenuItem>
                <MenuItem value={30}>
                  <FmdGoodOutlinedIcon />
                  3-р хороо
                </MenuItem>
                <MenuItem value={40}>
                  <FmdGoodOutlinedIcon />
                  4-р хороо
                </MenuItem>
                <MenuItem value={50}>
                  <FmdGoodOutlinedIcon />
                  5-р хороо
                </MenuItem>
                <MenuItem value={60}>
                  <FmdGoodOutlinedIcon />
                  6-р хороо
                </MenuItem>
                <MenuItem value={70}>
                  <FmdGoodOutlinedIcon />
                  7-р хороо
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel
                sx={{ display: "flex", alignItems: "center" }}
                id="demo-simple-select-label"
              >
                <FmdGoodOutlinedIcon /> Байр, гудамж сонгоно уу
              </InputLabel>
              <Select
                sx={{ display: "flex", alignItems: "center" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="Байр, гудамж сонгоно уу"
                onChange={handleChange}
              >
                <MenuItem
                  sx={{ display: "flex", alignItems: "center" }}
                  value={10}
                >
                  <FmdGoodOutlinedIcon />
                  Нархан хотхон
                </MenuItem>
                <MenuItem value={20}>
                  <FmdGoodOutlinedIcon />
                  26-р байр
                </MenuItem>
                <MenuItem value={30}>
                  <FmdGoodOutlinedIcon />
                  Хоймор хотхон
                </MenuItem>
                <MenuItem value={40}>
                  <FmdGoodOutlinedIcon />
                  45-р байр
                </MenuItem>
                <MenuItem value={50}>
                  <FmdGoodOutlinedIcon />
                  Зайсан хотхон
                </MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack spacing={4}>
            <Stack spacing={0.5}>
              <Stack style={{ fontSize: "14px", color: "#000000" }}>
                Нэмэлт мэдээлэл
              </Stack>
              <TextField
                multiline
                rows={4}
                placeholder="Орц, давхар, орцны код ..."
              />
            </Stack>
            <Stack spacing={0.5}>
              <Stack style={{ fontSize: "14px", color: "#000000" }}>
                Утасны дугаар*{" "}
              </Stack>
              <TextField
                type="number"
                placeholder="Утасны дугаараа оруулна уу"
                rows={4}
              />
            </Stack>
            <Stack>
              <Stack style={{ fontSize: "14px", color: "#000000" }}>
                Төлбөр төлөх
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <FormControlLabel
                  onClick={() => {
                    setCash(!cash);
                  }}
                  control={<Checkbox />}
                  sx={{ color: "#8B8E95" }}
                  label="Бэлнээр"
                />
                <FormControlLabel
                  onClick={() => {
                    setCard(!card);
                  }}
                  control={<Checkbox />}
                  sx={{ color: "#8B8E95" }}
                  label="Картаар"
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack
          sx={{
            width: "432px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "16px 24px 16px 24px",
            gap: "16px",
          }}
          spacing={2}
        >
          <Stack
            sx={{
              width: "48px",
              height: "48px",
              border: "1px solid #0468C8",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#0468C8",
              }}
            ></Stack>
          </Stack>
          <Stack>
            <Stack sx={{ fontSize: "14px", color: "#8B8E95" }}>Алхам 2</Stack>
            <Stack sx={{ fontSize: "20px", color: "#000000" }}>
              Захиалга баталгаажуулах
            </Stack>
            <Stack sx={{ fontSize: "14px", color: "#0468C8" }}>
              Хүлээгдэж байна
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            padding: "24px",
            width: "432px",
            borderRadius: "16px",
          }}
        >
          <Stack sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
            <img
              style={{ width: "50%", height: "121px" }}
              src="https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P~z9YFneNa-qct5U29SL4itNNXi~7K2G-qZqMqK0vgtZXw-urwD22W2m52NnuFMQS70eaABfW40YHq5l4KV3QCM~L5eq0RYbdyKAA3XtGVHHfalMLtc80bDy6r-OMerjqDLcv7oZ6nPO8FMU-tsEMCyKNyv38KotFVZbFSBG6-efxc6LEX6yqQAeyDTfkJV~8rAH6sbx7Df8OGxOXr5ZWrvjJTdWcvoIYN8Pl9sghRZxowVw~lvztPOR8xIShyAxHpIm89Pjl1PMsG0FhqRgfyppwYynywMFb1dbFqi4YnqF4FLhjwvEATbyLV1pb2lUP5i4--zvmHU1cJLD6xv1bA__"
              alt=""
            />
            <Stack sx={{ width: "50%", margin: 0 }}>
              <Stack>
                <Stack
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "27px",
                  }}
                >
                  {name}
                </Stack>
                <Stack
                  sx={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    fontWeight: "600",
                    color: "#18BA51",
                  }}
                >
                  {price} ₮
                </Stack>
              </Stack>
              <Stack
                sx={{ display: "flex", flexWrap: "wrap", color: "#767676" }}
              >
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
