import React, { useState } from "react";
import { Button, Switch, Grid, Typography, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: green,
    },
  });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh", width: "100%" }}>
        <Typography variant="h1">
          Awesome Dark Mode &nbsp;
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span role="img" aria-label="moon">
              🌚
            </span>
            &nbsp;
          </Button>
          <Grid component="label" container direction="row" alignItems="center">
            <Grid item>
              <span role="img" aria-label="sun">
                ☀️
              </span>
            </Grid>
            <Grid item>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </Grid>
            <Grid item>
              <span role="img" aria-label="moon">
                🌚
              </span>
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
