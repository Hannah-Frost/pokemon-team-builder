import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "Tahoma, sans-serif",
  heading: "Tahoma, sans-serif",
  mono: "Tahoma, sans-serif",
};

const colors = {
  card: "#353b45",
  bg: "#282c35",
  primary: "#92D0F3",
  secondary: "#78BFE7",
  tertiary: "#1D7BB0",
  normal: {
    400: "#C6C6A7",
    500: "#A8A878",
    600: "#6D6D4E",
  },
  fighting: {
    400: "#D67873",
    500: "#C03028",
    600: "#7D1F1A",
  },
  flying: {
    400: "#C6B7F5",
    500: "#A890F0",
    600: "#6D5E9C",
  },
  poison: {
    400: "#C183C1",
    500: "#A040A0",
    600: "#682A68",
  },
  ground: {
    400: "#EBD69D",
    500: "#E0C068",
    600: "#927D44",
  },
  rock: {
    400: "#D1C17D",
    500: "#B8A038",
    600: "#786824",
  },
  bug: {
    400: "#C6D16E",
    500: "#A8B820",
    600: "#6D7815",
  },
  ghost: {
    400: "#A292BC",
    500: "#705898",
    600: "#493963",
  },
  steel: {
    400: "#D1D1E0",
    500: "#B8B8D0",
    600: "#787887",
  },
  fire: {
    400: "#F5AC78",
    500: "#F08030",
    600: "#9C531F",
  },
  water: {
    400: "#9DB7F5",
    500: "#6890F0",
    600: "#445E9C",
  },
  grass: {
    400: "#A7DB8D",
    500: "#78C850",
    600: "#4E8234",
  },
  electric: {
    400: "#FAE078",
    500: "#F8D030",
    600: "#A1871F",
  },
  psychic: {
    400: "#FA92B2",
    500: "#F85888",
    600: "#A13959",
  },
  ice: {
    400: "#BCE6E6",
    500: "#98D8D8",
    600: "#638D8D",
  },
  dragon: {
    400: "#A27DFA",
    500: "#7038F8",
    600: "#4924A1",
  },
  dark: {
    400: "#A29288",
    500: "#705848",
    600: "#49392F",
  },
  fairy: {
    400: "#F4BDC9",
    500: "#EE99AC",
    600: "#9B6470",
  },
};
const theme = extendTheme({ colors, fonts });

export default theme;
