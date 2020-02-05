import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native';
import ToolBar from './ToolBar';

import { withTheme } from '../core/themeProvider';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

BaseContainer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                height: STATUSBAR_HEIGHT,
                backgroundColor: props.theme.backgroundColor
            }}>
                <StatusBar translucent backgroundColor={props.theme.backgroundColor}
                    barStyle={props.theme.barStyle}
                />
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                <ToolBar
                    theme={props.theme}
                    title={props.title}
                    leftImage={props.leftImage}
                    onLeft={props.onLeft}
                    rightImage={props.rightImage}
                    onRight={props.onRight}
                />
                <View style={{ flex: 1 }}>
                    {props.children}
                </View>
            </SafeAreaView>
        </View>
    );
}

export default BaseContainer;