import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home';
import Login from './src/views/Login';
import AsyncStorage from '@react-native-community/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';



class App extends React.Component {


  public state = {
    hasUser: null
  }

  async componentDidMount(){
    crashlytics().log("App mounted");
    const hasUser = JSON.parse(await AsyncStorage.getItem("@hasUser") || "false");
    console.log(hasUser);
    this.setState({hasUser});
  }

  login = () => {
    this.setState({hasUser : true});
    AsyncStorage.setItem("@hasUser", JSON.stringify(true));
    //crashlytics().log('Connexion de l\'Utilisateur');
  }

  logout = () => {
    this.setState({hasUser : false});
    AsyncStorage.setItem("@hasUser", JSON.stringify(false));
    //crashlytics().log('Connexion de l\'Utilisateur');
  }


  

  render() {

    const {hasUser} = this.state;
    if(hasUser == null) {
      return (
      <View style={styles.container}>
        <Text>Loading ...</Text>
      </View>
      );
    }

    return (
      <View style={styles.container}>
        {hasUser === true && <Home logout={crashlytics().crash} />}
        {hasUser === false && <Login login={this.login} />}
      
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
});


export default App;
