import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

import { withTheme } from '../core/themeProvider';
import { Assets } from '../assets';

const HiddenView = () => <View style={{ display: 'none' }} />
const TabBar = props => {
  return (
    <BottomTabBar
      {...props}
      getButtonComponent={({ route }) => {
        if (route.key === 'Notification' || route.key === 'Favorite' ||
          route.key === 'Support') {
          return HiddenView
        }
      }}
      activeTintColor={props.theme.backgroundColor}
      labelStyle={[style.label, { fontFamily: props.theme.fontFamily }]}
      getLabelText={({ route }) => route.key}
      renderIcon={({ route, focused, tintColor, horizontal }) => {
        let routeName = route.key;
        let iconName;
        if (routeName === 'Main') {
          iconName = focused
            ? Assets.createSalesOrder
            : Assets.createSalesOrder;
        } else if (routeName === 'Settings') {
          iconName = focused ? Assets.settings : Assets.settings;
        }

        return <Image source={iconName} width={25} height={25} style={{ tintColor: tintColor }} />
      }}
    />
  );
};

const style = StyleSheet.create({
  label: { fontSize: 15 },
});

export default withTheme(TabBar);
