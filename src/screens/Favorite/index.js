import React from 'react';
import { View, Text } from 'react-native';
import { style } from './styles'

import { withTheme } from '../../core/themeProvider';
import BaseContainer from '../../components/BaseContainer';
import { Assets } from '../../assets';

FavoriteScreen = (props) => {
    onLeftClick = () => {
        props.navigation.openDrawer();
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
                    }}>Favorite Screen</Text>
            </View>
        </BaseContainer>
    );
};

export default withTheme(FavoriteScreen);
