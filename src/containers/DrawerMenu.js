import React, { Component } from "react"
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native"

import Icon from 'react-native-vector-icons/Ionicons'
import ProfileComponent from '../components/ProfileComponent'
import DrawerItem from '../components/DrawerItemComponent'

const userData = {
  profileUrl: 'https://s-media-cache-ak0.pinimg.com/736x/a3/e3/d6/a3e3d67e30105ca1688565e484370ab8--social-networks-harry-potter.jpg',
  username: 'Emma',
  email: 'ewatson@gryffindor.io'
}


const menuData = [
  {icon: "ios-search", name:"Search", screenName:"PiedPiper", key: 1},
  {icon: "ios-home-outline", name:"Home", screenName:"PiedPiper", key: 2},
  {icon: "ios-chatboxes-outline", name:"Inbox", screenName:"PiedPiper", key: 3},
  {icon: "ios-navigate-outline", name:"Trips", screenName:"Hooli", key: 4},
  {icon: "ios-heart-outline", name:"Wish List", screenName:"Hooli", key: 5},
  {icon: "ios-person-outline", name:"Profile", screenName:"Hooli", key: 6},
  {icon: "ios-settings-outline", name:"Settings", screenName:"Hooli", key: 7},
]



class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileComponent profileUrl={userData.profileUrl} username={userData.username} email={userData.email} />
        <FlatList
          data={menuData}
          renderItem={({item}) => <DrawerItem navigation={this.props.navigation} screenName={item.screenName} icon={item.icon} name={item.name} key={item.key} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(255,255,255,0.43)'
  },
  menuItem: {
    flexDirection:'row'
  },
  menuItemText: {
    fontSize:15,
    fontWeight:'300',
    margin:15,
  }
})

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;
