import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { style } from "./styles";

import { withTheme } from '../../core/themeProvider';
import BaseContainer from '../../components/BaseContainer';
import { Assets } from '../../assets';

SettingsScreen = (props) => {
    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => props.setTheme(item.key)}>
            <View
                style={[
                    style.itemContainer,
                    {
                        backgroundColor: item.backgroundColor,
                    },
                ]}
            >
                <Text style={{ color: item.color, fontFamily: props.theme.fontFamily }}>
                    {item.key}</Text>
            </View>
        </TouchableOpacity>
    );

    onLeftClick = () => {
        props.navigation.openDrawer()
    }

    return (
        <BaseContainer
            title={props.navigation.state.routeName}
            theme={props.theme}
            leftImage={Assets.menu}
            onLeft={this.onLeftClick}>
            <FlatList
                style={style.container}
                ListHeaderComponent={
                    <Text style={[style.headline,
                    {
                        color: props.theme.backgroundColor,
                        fontFamily: props.theme.fontFamily
                    }]}>
                        Choose your theme:
                    </Text>
                }
                data={props.themes}
                renderItem={renderItem}
            />
        </BaseContainer>
    );
};

export default withTheme(SettingsScreen);
