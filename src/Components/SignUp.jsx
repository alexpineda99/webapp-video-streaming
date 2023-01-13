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
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
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
        background: "#50469E",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Card sx={{boxShadow: "#000 1px 1px 10px"}}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  {...register("firsname")}
                />
              </FormControl>
            </Grid2>
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </FormControl>
            </Grid2>
            {/* <Grid2 lg={12}>
              <FormControl sx={{ mt: 2}} variant="outlined">
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                />
              </FormControl>
            </Grid2> */}
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
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
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
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
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
              <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="contained" sx={{ marginTop: "10%" }}>
                  Create an account
                </Button>
              </Grid2>
              {/* <Grid2 sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <span> Forgot password?</span>
              </Grid2> */}
            </Grid2>
            </form>
          </CardContent>
          <CardActions>
            <Button size="small">Forgot password?</Button>
          </CardActions>
        </Card>

      </Box>
      {/* <Footer/> */}
    </Grid2>
  );
}

export default Signup;
