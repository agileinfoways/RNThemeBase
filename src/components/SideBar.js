import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Assets } from '../assets';
import { withTheme } from '../core/themeProvider';
import DrawerHeader from './DrawerHeader';
import DrawerList from './DrawerList';

SideBar = (props) => {
    this.drawerItems = [
        {
            title: "Main",
            image: Assets.createSalesOrder,
            routeName: "Main"
        },
        {
            title: "Favorite",
            image: Assets.favorite,
            routeName: "Favorite"
        },
        {
            title: "Notification",
            image: Assets.notification,
            routeName: "Notification"
        },
        {
            title: "Settings",
            image: Assets.settings,
            routeName: "Settings"
        },
        {
            title: "Support",
            image: Assets.support_icon,
            routeName: "Support"
        }
    ]

    onItemClick = (item, index) => {
        props.navigation.closeDrawer();
        if (item.routeName != "") {
            props.navigation.popToTop();
            props.navigation.navigate(item.routeName);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <DrawerHeader
                theme={props.theme}
                userImage={"https://picsum.photos/200/300"} />

            <DrawerList theme={props.theme} list={drawerItems} onItemClick={this.onItemClick} />
        </SafeAreaView>
    );
};

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default withTheme(SideBar);
