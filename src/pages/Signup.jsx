import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// MUI Components
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Email/Password Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  // Google Sign-In
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 3,
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: "#874CCC" }}>
          Sign Up for an Account
        </Typography>

        <form onSubmit={handleSignup} style={{ width: "100%" }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
            sx={{ backgroundColor: "#f4f4f4", borderRadius: 1 }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
            sx={{ backgroundColor: "#f4f4f4", borderRadius: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#874CCC",
              "&:hover": { backgroundColor: "#6A34B8" },
            }}
          >
            Sign Up
          </Button>
        </form>

        <Divider sx={{ width: "100%", my: 2 }}>OR</Divider>

        <Button
          variant="outlined"
          fullWidth
          onClick={handleGoogleSignup}
          sx={{
            borderColor: "#C65BCF",
            color: "#C65BCF",
            "&:hover": {
              backgroundColor: "#C65BCF",
              color: "#fff",
            },
          }}
        >
          Sign up with Google
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <a href="/" style={{ color: "#874CCC", textDecoration: "none" }}>
            Log in
          </a>
        </Typography>
      </Box>
    </Container>
  );
}
