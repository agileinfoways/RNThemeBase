import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, Dimensions } from 'react-native';
import ToolBar from './ToolBar';

const { height, width } = Dimensions.get('window');

export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ?
    isIPhoneX ? 45 :
        20 : StatusBar.currentHeight;

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