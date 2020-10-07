import React from 'react';
import Button from '../components/Button';
//@ts-ignore
import R from 'res/R';

interface LogoutProps {
    logout: () => void;
}
export default class Home extends React.Component<LogoutProps> {
    
    
    render() {
        return (
            <Button
                title={R.i18n.t('logout')} 
                onPress={this.props.logout}
                color="#DD0000"
            />
        );
    }
}