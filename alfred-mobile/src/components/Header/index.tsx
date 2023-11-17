import React from "react";
import { View } from "react-native";
import { HeaderStyles } from "./styles";
import { SearchBar } from "../Search";

interface headerProps {
  handleSearch(value: string): void;
}

export function Header({ handleSearch }: headerProps) {
  return (
    <View style={HeaderStyles.headerBox}>
      <SearchBar onChange={handleSearch} />
    </View>
  )
}