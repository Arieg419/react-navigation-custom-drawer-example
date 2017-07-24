import React, { Component } from "react";
import { AppRegistry } from "react-native";

import { StackNavigator, DrawerNavigator } from "react-navigation";

import DrawerMenu from "./containers/DrawerMenu";

import PiedPiperContainer from "./containers/PiedPiperContainer";
import HooliContainer from "./containers/HooliContainer";

const MainScreenNavigator = StackNavigator({
  PiedPiper: { screen: PiedPiperContainer },
  Hooli: { screen: HooliContainer }
});

const Drawer = DrawerNavigator(
  {
    Main: { screen: MainScreenNavigator }
  },
  {
    contentComponent: DrawerMenu,
  }
);

export default Drawer;
