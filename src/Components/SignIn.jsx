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
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import {useSelector, useDispatch} from "react-redux";
import { loguser, loguser_keepsession } from "../State/actions-creators";

function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  let [msg, setMsg] = React.useState("");

  const state = useSelector((state)=> state.userState.user);
  console.log(state)
  const dispatch = useDispatch();

  const onSubmit = data => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const goBack = () => {
  navigate(-1);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = (data) => {
    Axios.post("http://localhost:3001/loguser", data)
    .then(res => {

      if (data) {
        dispatch(loguser(res.data.token))
      }
    })
    .catch(err => {
      console.log(err)
      setMsg(err.response.data)
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
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2} width="100%">
        <IconButton onClick={goBack}> <ArrowBackIcon sx={{fontSize: "3rem"}}/> </IconButton>
      </Stack>

      <Box sx={{ flex: "1 1 100%", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "#000 1px 1px 10px",
            background: "#fff",
            padding: "1.3rem",
            borderRadius: "10px"
          }}
        >

            <h1>Sign In</h1>
          <form onSubmit={handleSubmit(login)}>
            <Grid2 lg={12}>
              <FormControl sx={{ mt: 2, width: "17rem" }} variant="outlined">
                <TextField
                  id="outlined-basic"
                  label="Username or email"
                  variant="outlined"
                  {...register("username_email", {required: "This field is empty."})}
                  helperText={errors.username_email && errors.username_email.message}
                  error={errors.username_email && true}
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
                  {...register("password", {required: "This field is required."})}
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
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", color: "#D32F2F"}} mt={2} > {!msg ? "" : msg} </Box>
            {/* <FormControlLabel label="Remember me" sx={{marginLeft: "0px"}} control={<Checkbox defaultChecked={false} />} labelPlacement="start" {...register("remember")} /> */}
              <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: "5%" }}
                >
                  Log in
                </Button>
              </Grid2>
              <Box mt={2}>
            <Button size="small" onClick={()=> dispatch(loguser({user: "aLEX", trastorno: true}))} >Forgot password?</Button>
          </Box>
            </Grid2>
          </form>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default SignIn;
