import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CarOptions = [
  { value: "SmallDieselCar", label: "Small Diesel Car" },
  { value: "MediumDieselCar", label: "Medium Diesel Car" },
  { value: "LargeDieselCar", label: "Large Diesel Car" },
  { value: "MediumHybridCar", label: "Medium Hybrid Car" },
  { value: "LargeHybridCar", label: "Large Hybrid Car" },
  { value: "MediumLPGCar", label: "Medium LPG Car" },
  { value: "LargeLPGCar", label: "Large LPG Car" },
  { value: "MediumCNGCar", label: "Medium CNG Car" },
  { value: "LargeCNGCar", label: "Large CNG Car" },
  { value: "SmallPetrolVan", label: "Small Petrol Van" },
  { value: "LargePetrolVan", label: "Large Petrol Van" },
  { value: "SmallDielselVan", label: "Small Diesel Van" },
  { value: "MediumDielselVan", label: "Medium Diesel Van" },
  { value: "LargeDielselVan", label: "Large Diesel Van" },
  { value: "LPGVan", label: "LPG Van" },
  { value: "CNGVan", label: "CNG Van" },
  { value: "SmallPetrolCar", label: "Small Petrol Car" },
  { value: "MediumPetrolCar", label: "Medium Petrol Car" },
  { value: "LargePetrolCar", label: "Large Petrol Car" },
  { value: "SmallMotorBike", label: "Small Motor Bike" },
  { value: "MediumMotorBike", label: "Medium Motor Bike" },
  { value: "LargeMotorBike", label: "Large Motor Bike" },
];

const FlightOptions = [
  { value: "DomesticFlight", label: "Domestic Flight" },
  { value: "ShortEconomyClassFlight", label: "Short Economy Class Flight" },
  { value: "ShortBusinessClassFlight", label: "Short Business Class Flight" },
  { value: "LongEconomyClassFlight", label: "Long Economy Class Flight" },
  { value: "LongPremiumClassFlight", label: "Long Premium Class Flight" },
  { value: "LongBusinessClassFlight", label: "Long Business Class Flight" },
  { value: "LongFirstClassFlight", label: "Long First Class Flight" },
];

export const CarbonForm = ({ onFormSubmit }) => {
  const initialValues = {
    mode: "",
    fuelType: "",
    distance: "",
  };

  const validationSchema = Yup.object().shape({
    mode: Yup.string().required("Please select a mode"),
    fuelType: Yup.string().test(
      "fuelType",
      "Please select a vehicle type or flight class",
      function (value) {
        const mode = this.parent.mode;
        if (mode === "car" && !value) {
          return this.createError({ message: "Please select a vehicle type" });
        }
        if (mode === "flight" && !value) {
          return this.createError({ message: "Please select a flight class" });
        }
        return true;
      }
    ),
    distance: Yup.number()
      .required("Please enter a distance in KM")
      .min(1, "Please enter a minimum distance of 1"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema,
  });

  const handleModeChange = (event) => {
    const selectedMode = event.target.value;
    formik.setFieldValue("fuelType", "");
    formik.setFieldValue("mode", selectedMode);
  };
  //custom colour theme for the button
  const theme = createTheme({
    palette: {
      primary: {
        main: "#008c00",
      },
    },
  });
  return (
    <Box sx={{ p: 2 }}>
      <Stack component="form" onSubmit={formik.handleSubmit} spacing={3}>
        <FormControl
          fullWidth
          error={formik.touched.mode && Boolean(formik.errors.mode)}
        >
          <InputLabel id="mode-label">Mode</InputLabel>
          <Select
            labelId="mode-label"
            id="mode"
            name="mode"
            label="mode"
            value={formik.values.mode}
            onChange={handleModeChange}
          >
            <MenuItem value="">Select Mode</MenuItem>
            <MenuItem value="car">Car</MenuItem>
            <MenuItem value="flight">Flight</MenuItem>
          </Select>
          <FormHelperText>
            {formik.touched.mode && formik.errors.mode}
          </FormHelperText>
        </FormControl>
        {formik.values.mode === "car" && (
          <FormControl
            fullWidth
            error={formik.touched.fuelType && Boolean(formik.errors.fuelType)}
          >
            <InputLabel id="fuel-type-label">Fuel Type</InputLabel>
            <Select
              labelId="fuel-type-label"
              id="fuelType"
              name="fuelType"
              label="fuelType"
              value={formik.values.fuelType}
              onChange={formik.handleChange}
            >
              <MenuItem value="">Select Fuel Type</MenuItem>
              {CarOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {formik.touched.fuelType && formik.errors.fuelType}
            </FormHelperText>
          </FormControl>
        )}
        {formik.values.mode === "flight" && (
          <FormControl
            fullWidth
            error={formik.touched.fuelType && Boolean(formik.errors.fuelType)}
          >
            <InputLabel id="flight-type-label">Flight Type</InputLabel>
            <Select
              labelId="flight-type-label"
              id="fuelType"
              name="fuelType"
              value={formik.values.fuelType}
              onChange={formik.handleChange}
            >
              <MenuItem value="">Select Flight Type</MenuItem>
              {FlightOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {formik.touched.fuelType && formik.errors.fuelType}
            </FormHelperText>
          </FormControl>
        )}

        <TextField
          id="distance"
          name="distance"
          label="Distance in KM"
          fullWidth
          value={formik.values.distance}
          onChange={formik.handleChange}
          error={formik.touched.distance && Boolean(formik.errors.distance)}
          helperText={formik.touched.distance && formik.errors.distance}
        />

        <ThemeProvider theme={theme}>
          <Button color="primary" variant="contained" type="submit">
            Calculate
          </Button>
        </ThemeProvider>
      </Stack>
    </Box>
  );
};
