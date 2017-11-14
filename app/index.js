import React from "react";
import Home from "./screens/Home";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrage: "#D57A66",
  $primaryGreen: "#00DB90",
  $primaryPurple: "#9E768F",

  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#e9e9e9",
  $darkText: "#343434"
});

export default () => <Home />;
