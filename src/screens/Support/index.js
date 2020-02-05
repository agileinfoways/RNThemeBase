import React from 'react';
import { View, Text } from 'react-native';
import { style } from './styles'

import { withTheme } from '../../core/themeProvider';
import BaseContainer from '../../components/BaseContainer';
import { Assets } from '../../assets';

class SupportScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    onLeftClick = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <BaseContainer
                title={this.props.navigation.state.routeName}
                theme={this.props.theme}
                leftImage={Assets.menu}
                onLeft={this.onLeftClick}>
                <View style={[style.container]}>
                    <Text style={
                        {
                            color: this.props.theme.backgroundColor,
                            fontFamily: this.props.theme.fontFamily
                        }}>Support Screen</Text>
                </View>
            </BaseContainer>
        );
    }
};

export default withTheme(SupportScreen);
