import * as React from "react";
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
import Axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";

function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  let [usernameAvailable, setUsernameavailable] = React.useState(null);
  let [avatar, setAvatar] = React.useState()
  let [msg, setMsg] = React.useState("");
  let [loading, setLoading] = React.useState(false);

  const { register, handleSubmit, formState: {errors}, watch, setError, clearErrors } = useForm();

  const passwordMessage =
  <div>
    <p className="reset-p"> Password must have: </p>
    <p className="reset-p">* Minimun 8 characters</p>
    <p className="reset-p">* Maximun 16 characters</p>
    <p className="reset-p">* At least one uppercase</p>
    <p className="reset-p">* At least one lowercase</p>
    <p className="reset-p">* At least one special character</p> </div>;

const usernameMessage =
<div>
  <p className="reset-p"> Username must have: </p>
  <p className="reset-p">* Minimun 4 characters</p>
  <p className="reset-p">* Maximun 20 characters</p>
  <p className="reset-p">* Only periods, dashes and underscores allowed</p>
  <p className="reset-p">* A special character can be follow by another one. E.g: .- or __ </p> </div>;

const navigate = useNavigate();
const goBack = () => {
  navigate(-1);
}

  const handleClickShowPassword = () => 
  setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const checkUsernameAvailability = (e) => {
    console.log(e.username);
      watch("username")
    if (e.username.length <= 2) {
      
      setUsernameavailable(null);

    } 
    else {

    Axios.post("http://localhost:3001/checkavailability", e)
    .then(res => {
      console.log(res)
      setUsernameavailable(true);
    })
    .catch(err=> {
      console.log(err)
      if (err.response.status === 404) {
        //Username available
        clearErrors("username");

      } else if (err.response.status === 500) {
        //Username not available
        setError('username', {
          type: "server",
          message: "Username is not available",
        });
      } else {
        console.log("Error in server");
      }

    })

  }

  }

  const registerUser = (data) => {
    // setLoading(true);
    avatar = data.avatar;
    console.log(avatar)
    const formdata = new FormData();
    formdata.append("file", avatar[0]);
    formdata.append("username", data.username)
    formdata.append("email", data.email)
    formdata.append("password", data.password)
    Axios.post("http://localhost:3001/registeruser", formdata)
    .then(res => {
      console.log(res)
      setTimeout(() => {
        console.log(res.data);
        setLoading(false);
      }, 500);
    }).catch(err=> {
      console.log(err)
      if (err.code === "ERR_NETWORK") {
        console.log("Error in server");
        setMsg("Error in server");
        setLoading(false);
      }

      if (err.response.data.errors.email) {
        setError('email', {
        type: "server",
        message: err.response.data.errors.email,
      });
      }
      if (err.response.data.errors.username) {
        setError('username', {
        type: "server",
        message: err.response.data.errors.username,
      });
      }
      setLoading(false);
    })
  }


  return (
    <Box
      container
      sx={{
        background: "#50469E",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >

      {/* loading */}
      { loading ?
      <Box className="loader"> <CircularProgress size={60} /> </Box>
      
      : null

      }

      <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2} width="100%">
        <IconButton onClick={goBack}> <ArrowBackIcon sx={{fontSize: "3rem"}}/> </IconButton>
      </Stack>


      <Box sx={{flex: "1 1 100%", display: "flex", alignItems: "center" }} mb={2} mt={2}>
        <Box sx={{boxShadow: "#000 1px 1px 10px", background: "#fff", padding: "1rem"}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(registerUser)} enctype = "multipart/form-data">
            <Grid2 lg={12} sm={2} >
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  {...register("username", {required: "Username field is required",
                  minLength: {value: 3, message: "Username field must be at least 4 characters and no more than 20 characters"},
                  maxLength: {value:20, message: "Username field must be at least 4 characters and no more than 20 characters"},
                  pattern: {value: /^(?=.{4,20}$)(?![])(?!.*[_.-]{2})[a-zA-Z0-9._-]+(?<![])$/gm, message: usernameMessage},
                  onChange: (e)=> checkUsernameAvailability({"username": e.target.value})
                })}
                  helperText={errors.username && errors.username.message}
                  error={errors.username && true}
                />  

              </FormControl>
            </Grid2>
            <Grid2 lg={12} sm={2}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  {...register("email", {
                    required: "Email field is required",
                    pattern: { value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: "Invalid email address" },
                  })}
                  helperText={errors.email && errors.email.message}
                  error={errors.email && true}
                />
              </FormControl>
            </Grid2>
            <Grid2 lg={12} sm={2}>
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
                    required: "Password field is required", minLength: { value: 8, message: passwordMessage }, maxLength: { value: 16, message: passwordMessage },
                    pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/gm, message: passwordMessage }
                  })}
                  // helperText={errors.password && errors.password.message}
                  
                  error={errors.password && true}
                />
                {<p className="error-text-signup"> {errors.password && errors.password.message} </p>}
              </FormControl>
            </Grid2>
            <Grid2 lg={12} sm={2}>
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
                  {...register("confirmPassword", { required: "Confirm Password field is required", validate: (value) => {if(watch("password") != value){return "Passwords do not match"}}  })}
                />
                {<p className="error-text-signup"> {errors.confirmPassword && errors.confirmPassword.message} </p>}
              </FormControl>
              
                {/* file upload */}


                <Grid2 lg={12} sm={2}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
              <Button
              variant="contained"
              component="label"
              >
              Upload avatar profile
              <input
              type="file"
              hidden
              // accept="image/png, image/jpeg, image/jpg"
              {...register("avatar",{required: "Avatar field is required", pattern: {value: /\.(jpe?g|png)$/i, message: "Only .jpg, .jpeg and .png files are allowed"}})}
              />

              </Button>
              { <p className="error-text-signup"> {errors.avatar && errors.avatar.message} </p>}
              {console.log(errors)}
              </FormControl>
            </Grid2>
            {/* { <p className="error-text-signup"> {errors.avatar && errors.avatar.message} </p>} */}
                {/* fin file upload  */}
              <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", color: "#D32F2F"}}> {!msg ? "" : msg} </Box>
              
              <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="contained" sx={{ marginTop: "10%" }}>
                  Create an account
                </Button>
              </Grid2>
            </Grid2>
            </form>
          </Box>
          <Box>
            <Button size="small">Forgot password?</Button>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Signup;
