import PropTypes from "prop-types";
import { View, Text } from "react-native";
import React from "react";

export default function Saludar(props) {
  const { firstName, lastName } = props;
  return (
    <View>
      <Text>{`Saludar a ${firstName} , ${lastName}`}</Text>
    </View>
  );
}

Saludar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
Saludar.defaultProps = {
  firstName: "xxx",
  lastName: "bbb",
};
