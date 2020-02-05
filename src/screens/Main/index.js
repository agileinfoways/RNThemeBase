import React from 'react';
import { View, Text } from 'react-native';
import { style } from './styles'

import { withTheme, updateTheme } from '../../core/themeProvider';
import BaseContainer from '../../components/BaseContainer';
import { Assets } from '../../assets';

MainScreen = (props) => {
    onLeftClick = () => {
        props.navigation.openDrawer();
    }

    onUpdateJsonClick = (theme) => {
        updateTheme(theme, props.setTheme)
    }

    return (
        <BaseContainer
            title={props.navigation.state.routeName}
            theme={props.theme}
            leftImage={Assets.menu}
            onLeft={this.onLeftClick}>
            <View style={[style.container]}>
                <Text style={
                    {
                        color: props.theme.backgroundColor,
                        fontFamily: props.theme.fontFamily
                    }}>Main Screen</Text>

                <Text style={
                    {
                        marginTop: 10,
                        color: props.theme.backgroundColor,
                        fontFamily: props.theme.fontFamily
                    }}
                    onPress={() => this.onUpdateJsonClick(require('../../core/newThemes.json'))}
                >Update to New Json File</Text>

                <Text style={
                    {
                        marginTop: 10,
                        color: props.theme.backgroundColor,
                        fontFamily: props.theme.fontFamily
                    }}
                    onPress={() => this.onUpdateJsonClick(require('../../core/themes.json'))}>
                    Update to Old Json File</Text>
            </View>
        </BaseContainer>
    );
};

export default withTheme(MainScreen);
