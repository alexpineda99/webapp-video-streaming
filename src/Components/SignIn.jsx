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
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
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
      <Box sx={{ flex: "1 1 100%", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "#000 1px 1px 10px",
            background: "#fff",
            padding: "10px",
            borderRadius: "10px"
          }}
        >
            <h1>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  {...register("username")}
                  helperText={errors.username && errors.username.message}
                  error={errors.username && true}
                />
              </FormControl>
            </Grid2>
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <InputLabel
                  color={errors.password && "error"}
                  htmlFor="outlined-adornment-password"
                  sx={{ color: errors.password && "#D32F2F" }}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  label="Password"
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
                  // label="Password"
                  {...register("password")}
                  // helperText={errors.password && errors.password.message}

                  error={errors.password && true}
                />
                {
                  <p className="error-text-signup">
                    {" "}
                    {errors.password && errors.password.message}{" "}
                  </p>
                }
              </FormControl>
            </Grid2>
            <Grid2 lg={12}>
              <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: "5%" }}
                >
                  Log in
                </Button>
              </Grid2>
              {/* <Grid2 sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <span> Forgot password?</span>
              </Grid2> */}
            </Grid2>
          </form>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default SignIn;
