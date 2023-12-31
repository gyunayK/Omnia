import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress } from "@mui/material";
import { GiPartyPopper } from "react-icons/gi";

export function StyledTextField({ register, errors, name, label, id }) {
  return (
    <TextField
      {...register(name)}
      error={!!errors[name]}
      autoComplete="off"
      helperText={errors[name] ? errors[name].message : null}
      id={id}
      label={label}
      variant="outlined"
      color="secondary"
      name={name}
      fullWidth
      inputProps={{ style: { color: "black" } }}
      sx={{
        "& label.Mui-focused": {
          color: "black",
        },
        "& label": {
          color: "black",
          fontFamily: "sans-serif",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "black",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#692489",
          },
          "&:hover fieldset": {
            borderColor: "#dc90ff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#9526A5",
          },
          "& .MuiInputBase-input": {
            fontFamily: "sans-serif",
          },
        },
      }}
    />
  );
}

StyledTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export function StyledTextField2({ register, errors, name, label, id }) {
  return (
    <TextField
      {...register(name)}
      error={!!errors[name]}
      autoComplete="off"
      helperText={errors[name] ? errors[name].message : null}
      id={id}
      label={label}
      multiline
      maxRows={4}
      name={name}
      fullWidth
      inputProps={{
        style: {
          color: "black",
          height: "100px",
        },
      }}
      sx={{
        "& label.Mui-focused": {
          color: "black",
        },
        "& label": {
          color: "black",
          fontFamily: "sans-serif",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "white",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#692489",
          },
          "&:hover fieldset": {
            borderColor: "#dc90ff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#a237d3",
          },
          "& .MuiInputBase-input": {
            fontFamily: "sans-serif",
          },
        },
      }}
    />
  );
}

StyledTextField2.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export function StyledButton({ isSubmitting, isSubmitted }) {
  return (
    <LoadingButton
      loading={isSubmitted ? false : isSubmitting}
      variant="contained"
      type="submit"
      size="large"
      sx={{
        width: "100%",
        background: "#a237d3",
        borderRadius: "0.5rem",
        color: "white",
        fontFamily: "Archivo",
        fontSize: "1.2rem",
        "&:hover": {
          background: isSubmitted ? "#7000a3" : "#dc90ff",
        },
      }}
      loadingIndicator={<CircularProgress color="primary" size={35} />}
    >
      {isSubmitted ? (
        <>
          <GiPartyPopper size={30} /> SENT <GiPartyPopper size={35} />
        </>
      ) : (
        "SUBMIT"
      )}
    </LoadingButton>
  );
}

StyledButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
