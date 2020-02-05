import React from 'react';
import { Dimensions, Alert, Platform } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';

import { ThemeContextProvider } from './src/core/themeProvider';

import MainScreen from './src/screens/Main';
import SettingsScreen from './src/screens/Settings';
import FavoriteScreen from './src/screens/Favorite';
import NotificationScreen from './src/screens/Notification';
import SupportScreen from './src/screens/Support';

import TabBar from './src/components/TabBar';
import SideBar from './src/components/SideBar';

var { height, width } = Dimensions.get("window");
export const DEVICE = {
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width
}

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Favorite: FavoriteScreen,
    Notification: NotificationScreen,
    Settings: SettingsScreen,
    Support: SupportScreen,
  },
  {
    initialRouteKey: 'Main',
    tabBarComponent: props => <TabBar {...props} />,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Tab: TabNavigator,
  },
  {
    initialRouteKey: 'Tab',
    contentComponent: SideBar,
    headerMode: 'none',
    drawerWidth: DEVICE.DEVICE_WIDTH < 500 ? DEVICE.DEVICE_WIDTH / 1.3 : DEVICE.DEVICE_WIDTH / 2,
    drawerLockMode: 'locked-closed',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  },
)

const MainNavigator = createStackNavigator(
  {
    Drawer: DrawerNavigator
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  }
)

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <AppContainer />
      </ThemeContextProvider>
    );
  }
}
