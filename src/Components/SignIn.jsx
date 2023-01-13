import * as React from "react";
import "../assets/Css/main.scss";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Stack from "@mui/material/Stack";

function Signin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid2
      container
      sx={{
        background: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid2 lg={2}>
        <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
        </FormControl>
      </Grid2>

      <Grid2 lg={2}>
        <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </FormControl>
      </Grid2>

      {/* <Grid2 lg={2}>
        <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </FormControl>
      </Grid2> */}

      <Grid2 lg={2}>
        <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Grid2>

      <Grid2 lg={2}>
        <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        <Grid2 sx={{display: "flex", justifyContent: "center"}}>
          <Button variant="contained" endIcon={<SendOutlinedIcon />}>
            Send
          </Button>
        </Grid2 >
      </Grid2>
    </Grid2>
  );
}

export default Signin;
