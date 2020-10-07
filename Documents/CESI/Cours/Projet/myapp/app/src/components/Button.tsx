import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

//@ts-ignore
import R from 'res/R';


interface ButtonProps {
    onPress: () => void,
    title: string,
    color: string
}
export default class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <TouchableHighlight style={[style.button, {backgroundColor:this.props.color}]} onPress={this.props.onPress}>
                <Text style={style.text}>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }
}

const style = StyleSheet.create({
    button: {
        backgroundColor : R.colors.gold,
        padding: 20,
        borderRadius : 40,
        borderColor : 'black',
        borderWidth : 2
    },
    text : {
        color: 'white',
        fontSize : 20
    }

})