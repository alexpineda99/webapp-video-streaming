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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { register, handleSubmit, formState: {errors}, watch } = useForm();

  const passwordMessage =
  <div>
    <p className="reset-p"> Password must have: </p>
    <p className="reset-p">* Minimun 8 characters</p>
    <p className="reset-p">* Maximun 16 characters</p>
    <p className="reset-p">* At least one uppercase</p>
    <p className="reset-p">* At least one lowercase</p>
    <p className="reset-p">* At least one special character</p> </div>;

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
      <Box sx={{marginTop: "8rem"}}>
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
                  {...register("username", {required: "This field is required",
                  minLength: {value: 3, message: "Username field must be at least 3 characters and no more than 20 characters"},
                  maxLength: {value:20, message: "Username field must be at least 3 characters and no more than 20 characters"},
                  pattern: {value: /^[A-Za-z0-9._-]+$/i, message: "Username can only contain letters, numbers, underscores, dashes and periods"}
                })}
                  helperText={errors.username && errors.username.message}
                  error={errors.username && true}
                />
              </FormControl>
            </Grid2>
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  {...register("email", {
                    required: "This field is required",
                    pattern: { value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: "Invalid email address" }
                  })}
                  helperText={errors.email && errors.email.message}
                  error={errors.email && true}
                />
              </FormControl>
            </Grid2>
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <InputLabel color={errors.password && "error"} htmlFor="outlined-adornment-password" sx={{color: errors.password && "#D32F2F"}}>
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
                  {...register("password", {
                    required: "This field is required", minLength: { value: 8, message: passwordMessage }, maxLength: { value: 16, message: passwordMessage },
                    pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/gm, message: passwordMessage }
                  })}
                  // helperText={errors.password && errors.password.message}
                  
                  error={errors.password && true}
                />
                {<p className="error-text-signup"> {errors.password && errors.password.message} </p>}
              </FormControl>
            </Grid2>
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <InputLabel color={errors.confirmPassword && "error"} htmlFor="outlined-adornment-password" sx={{color: errors.confirmPassword && "#D32F2F"}}>
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
                  error={errors.confirmPassword && true}
                  {...register("confirmPassword", { required: "This field is required", validate: (value) => {if(watch("password") != value){return "Passwords do not match"}}  })}
                />
                {<p className="error-text-signup"> {errors.confirmPassword && errors.confirmPassword.message} </p>}
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
      <Footer/>
    </Grid2>
  );
}

export default Signup;
