import { createMuiTheme } from "@material-ui/core";
import { deepPurple, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[500],
      contrastText: deepPurple[900]
    },
    secondary: {
      main: deepPurple[500],
      contrastText: amber[900]
    },
    text: {
      disabled: amber[500]
    }
  }
});

theme.props = {
  MuiButton: {
    disableElevation: true,
    variant: "contained"
  }
};

theme.overrides = {
  MuiButton: {
    disabled: {
      backgroundColor: amber[500],
      textColor: deepPurple[500]
    }
  }
};

export default theme;
