import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PropTypes } from "prop-types";

const theme = createTheme({
  palette: {
    primary: { main: "#FDF151" },
    cancel: { main: "#D63750" },
    success: { main: "#7BEA9C" },
  },
});

const MyButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined">{props.text}</Button>
    </ThemeProvider>
  );
};

MyButton.propTypes = {
  text: PropTypes.string,
};

MyButton.defaultProps = {
  text: "Search",
};

export default MyButton;
