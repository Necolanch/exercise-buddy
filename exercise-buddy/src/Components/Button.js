import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PropTypes } from "prop-types";

const mainTheme = createTheme({
  palette: {
    primary: { main: "#FDF151" }
  },
});

const actionTheme = createTheme({
  palette: {
    primary: { main: "#7BEA9C" }
  },
});

const MainButton = (props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Button variant={props.variant}>{props.text}</Button>
    </ThemeProvider>
  );
};

const ActionButton = (props) => {
  return (
    <ThemeProvider theme={actionTheme}>
      <Button sx={{width:props.width}} onClick={props.action} variant={props.variant}>{props.text}</Button>
    </ThemeProvider>
  );
};

MainButton.propTypes = {
  text: PropTypes.string,
};

MainButton.defaultProps = {
  text: "Search",
};

ActionButton.propTypes = {
  text: PropTypes.string,
};

ActionButton.defaultProps = {
  text: "Search",
};

export {MainButton, ActionButton};
