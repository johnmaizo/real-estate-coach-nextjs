"use client";

import {
  Box,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import {useState} from "react";
import Image from "next/image";

import Icon from "@/assets/svg/ArrowFilledCircleIconWhite.svg";

export default function QuoteRequestForm() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        borderRadius: "25px",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          padding: 3,
          height: "100%",
          background: `url("https://filipinohomes123.s3.ap-southeast-1.amazonaws.com/ares/Event+Photos/Ares+Event+(56).JPG") no-repeat center/cover`,
          minHeight: {sm: "auto", md: "500px"},
          // flex: 1,
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      />
      <Box
        sx={{
          p: 3,
          width: "100%",
          border: "1px solid #DDD5D5",
          background: "linear-gradient(180deg, #EFECEC 0%, #F4F4F4 100%)",
        }}>
        <Typography
          sx={{fontSize: "25px", fontFamily: "Outfit", fontWeight: 700}}>
          Quote Request Form
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: {sm: "wrap", md: "nowrap"},
            mt: 2,
            gap: 5,
          }}>
          <Box sx={{width: "100%"}}>
            <Typography
              sx={{fontFamily: "Outfit", fontSize: "16px", fontWeight: 500}}>
              Name
            </Typography>
            <TextField
              id="outlined-basic"
              hiddenLabel
              variant="outlined"
              fullWidth
              placeholder="Enter your full name"
              sx={{
                border: "2px solid #CECECE",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Outfit",
                mt: 2,
                fontSize: "16px",
                fontWeight: 500,
              }}>
              Email Address
            </Typography>
            <TextField
              id="outlined-basic"
              hiddenLabel
              variant="outlined"
              type="email"
              fullWidth
              placeholder="Where we can reach you"
              sx={{
                border: "2px solid #CECECE",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Outfit",
                mt: 2,
                fontSize: "16px",
                fontWeight: 500,
              }}>
              Phone Number
            </Typography>
            <TextField
              id="outlined-basic"
              hiddenLabel
              variant="outlined"
              type="tel"
              fullWidth
              placeholder="Optional, but helpful for follow-up"
              sx={{
                border: "2px solid #CECECE",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Outfit",
                mt: 2,
                fontSize: "16px",
                fontWeight: 500,
              }}>
              Preferred Contact Method
            </Typography>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{width: "100%"}}>
              <FormControlLabel
                value="email"
                control={<Radio />}
                label="Email"
              />
              <FormControlLabel
                value="phone"
                control={<Radio />}
                label="Phone"
              />
              <FormControlLabel
                value="both"
                control={<Radio />}
                label="Either is fine"
              />
            </RadioGroup>
          </Box>

          <Box sx={{width: "100%"}}>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "16px",
                fontWeight: 500,
              }}>
              What are you looking for?
            </Typography>

            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={"10"}
              onChange={handleChange}
              MenuProps={{
                style: {zIndex: 35001},
              }}
              sx={{backgroundColor: "#FFFFFF", width: "100%"}}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10} selected>
                One-on-one Coaching
              </MenuItem>
              <MenuItem value={20}>Team Training</MenuItem>
              <MenuItem value={30}>Branding or Marketing Help</MenuItem>
              <MenuItem value={30}>Business Strategy Session</MenuItem>
              <MenuItem value={30}>One-on-one Coaching</MenuItem>
            </Select>

            <Typography
              sx={{
                mt: 2,
                fontFamily: "Outfit",
                fontSize: "16px",
                fontWeight: 500,
              }}>
              Tell us more about your goals or challenges
            </Typography>

            <TextField
              id="outlined-multiline-flexible"
              multiline
              hiddenLabel
              fullWidth
              rows={5.5}
              placeholder="Briefly describe your current situation and what you hope to achieve."
              sx={{
                border: "2px solid #CECECE",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#132D4C",

            fontFamily: "Outfit",
            fontSize: "22px",
            fontWeight: 500,
            textTransform: "uppercase",
            borderRadius: "50px",
            display: "inline-flex",
            gap: 2,
            alignItems: "center",
          }}>
          Submit
          <Image src={Icon} alt="" aria-hidden draggable={false} />
        </Button>
      </Box>
    </Box>
  );
}
