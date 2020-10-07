import React from 'react';
import {StyleSheet} from 'react-native';
import Button from '../components/Button';
//@ts-ignore
import R from 'res/R';

import { AsyncStorage } from 'react-native';



interface LoginProps {
    login: () => void;
}

export default class Login extends React.Component<LoginProps>{


    
    render() {
        return (
            <Button 
                title={R.i18n.t('login')}
                onPress={this.props.login}
                color={R.colors.green}
            />
        );
    }
}