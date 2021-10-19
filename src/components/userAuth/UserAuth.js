import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
// import { RouteComponentProps } from "react-router-dom";

const theme = createTheme();

const UserAuth = (props) => {
  // setup for react-hook-form
  const { register, handleSubmit } = useForm();

  // switch between sign up/in pages
  const [isSignIn, setIsSignIn] = useState(true);

  // handle sign in
  const handleSignIn = async (data) => {
    const { email, password } = data;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      props.history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };
  // handle sign up
  const handleSignUp = async (data) => {
    const { name, email, password } = data;
    try {
      const entry = await auth.createUserWithEmailAndPassword(email, password);
      const displayName = await entry.user.updateProfile({ displayName: name });
      props.history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // push the user back to app page
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && props.history.push("/");
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignIn ? "Sign In" : "Sign up"}
          </Typography>
          {/* handleSubmit(handleSignUp) */}
          <Box
            component="form"
            noValidate
            onSubmit={
              isSignIn ? handleSubmit(handleSignIn) : handleSubmit(handleSignUp)
            }
          >
            {isSignIn ? (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    {...register("email", {
                      required: "required",
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", {
                      required: "required",
                    })}
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                    {...register("name", {
                      required: "required",
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...register("email", {
                      required: "required",
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", {
                      required: "required",
                    })}
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            )}
            <Button type="submit" fullWidth variant="contained">
              {isSignIn ? "Sign In" : "Sign up"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setIsSignIn(!isSignIn)}
                >
                  {isSignIn
                    ? "Haven't got an account yet? Sign up"
                    : "Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserAuth;
