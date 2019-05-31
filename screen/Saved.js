import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.big}>About Us</Text>
       <Text style={styles.textin}>
         We are growing company so support our work and 
         forget to reply and write to us on facebook twitter 
         or other social networks 
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
 
  },
  big:{
     fontSize:17,
     color:'#333745',
     textAlign:'center',
     paddingTop:100,
  },

  textin:{
     textAlign:'center',
     color:'#ccc',
     paddingTop:10,
     marginLeft:'10%',
     width:'80%',
  },
})