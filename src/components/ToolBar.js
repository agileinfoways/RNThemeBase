import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { fonts } from '../assets';

ToolBar = (props) => {
    return (
        <View style={{
            backgroundColor: props.theme.backgroundColor,
            height: 50,
        }}>
            <View style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center"
            }}>
                {/* LeftImage */}
                <View style={{ flex: 1, marginLeft: 20 }}>
                    {props.leftImage != undefined ?
                        <TouchableOpacity
                            onPress={() => props.onLeft()}>
                            <Image source={props.leftImage}
                                style={{ width: 20, height: 20, tintColor: props.theme.color }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity> : null}
                </View>

                {/* Title */}
                <View style={{ flex: 4, alignItems: "center" }}>
                    {props.title != undefined ?
                        <Text style={{
                            color: props.theme.color,
                            fontSize: 16,
                            fontFamily: props.theme.fontFamily
                        }}>{props.title}</Text>
                        :
                        null
                    }
                </View>

                {/* RightImage */}
                <View style={{
                    flex: 1, flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    marginHorizontal: 20,
                }}>
                    {
                        props.rightImage != undefined && props.rightImage.length > 0 ?
                            props.rightImage.map((data, index) => {
                                let onClick = props.onRight[index];
                                return <TouchableOpacity
                                    key={index}
                                    onPress={() => onClick()}>
                                    <Image source={data}
                                        style={{ width: 20, height: 20, tintColor: theme.color }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            })
                            : null
                    }
                </View>
            </View>
        </View>
    );
}

export default ToolBar;