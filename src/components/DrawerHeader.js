import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

DrawerHeader = (props) => {
    return (
        <TouchableOpacity style={[style.headerContainer,
        {
            backgroundColor: props.theme.backgroundColor,
            fontFamily: props.theme.fontFamily
        }]}
            onPress={props.onClick}>
            <View style={{ borderRadius: 35, height: 70, width: 70 }}>
                <Image source={{ uri: props.userImage }}
                    style={{ borderRadius: 35, height: 70, width: 70 }}
                />
            </View>

            <View style={{ marginLeft: 10, flex: 1, width: "100%" }}>
                <Text style={[style.nameText, {
                    color: props.theme.color,
                    fontFamily: props.theme.fontFamily
                }]}>{"John Reck"}</Text>
                <Text style={[style.emailText, {
                    color: props.theme.color,
                    fontFamily: props.theme.fontFamily
                }]}>{"johnreck@gmail.com"}</Text>
                <Text style={[style.emailText, {
                    color: props.theme.color,
                    fontFamily: props.theme.fontFamily
                }]}>{"+1 652 3215 120"}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DrawerHeader;

export const style = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        paddingVertical: 30,
        padding: 10,
    },
    nameText: {
        fontSize: 20
    },
    emailText: {
        fontSize: 14,
        marginTop: 5
    }
})