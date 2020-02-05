import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

DrawerList = (props) => {
    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={style.itemContainer} onPress={() =>
                props.onItemClick(item, index)}>
                <Image source={item.image} style={[style.iconStyle,
                {
                    tintColor: props.selectedScreen == item.title ?
                        props.color : props.backgroundColor
                }]} resizeMode="contain" />
                <Text style={[style.title, {
                    color: props.selectedScreen == item.title ?
                        props.color : props.backgroundColor,
                    fontFamily: props.theme.fontFamily
                }]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={true}
            style={{ flex: 1, marginTop: 20 }}
            data={props.list}
            // extraData={this.state}
            keyExtractor={(item, index) => item + index}
            renderItem={this.renderItem}
        />
    );
}

export const style = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 15, paddingVertical: 12,
        flexDirection: "row", alignItems: "center"
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    title: {
        marginLeft: 25,
        fontSize: 14
    },
})

export default DrawerList;
