import React from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Button,PanResponder} from 'react-native';


export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            marginLeft:1
        }
        this._panResponder=PanResponder.create({
            onStartShouldSetPanResponder:(evt, getstureState)=> true,
            onPanResponderMove:(evt,getstureState) =>
            // console.log("moved dick",getstureState.moveX);
             this.setState({marginLeft:getstureState.moveX})
        })
    }

  render() {
    return (
      <View style={styles.container}>
           <View
            style={[styles.one,{marginLeft:this.state.marginLeft}]}
            {...this._panResponder.panHandlers}
            key={this.props.keyval}>
                 <Text style={styles.textone}>
                  {this.props.val.note}
                  
                 </Text>
               <CheckBox  style={styles.checkit} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
    
  },
  topa:{
    width:'100%',
    height:'auto',
    flexDirection:'row',
    position: 'absolute',
    top: 50,
    left: 20,
   
  },
  save:{
     
     width:'20%',
     marginLeft:7,
     fontSize:16,
     paddingLeft:12,
     paddingTop:2,
     backgroundColor:'#333745',
     color:'#fff',
     borderRadius:4,
  },

  textone:{
     width:'80%',
     fontSize:16,
     color:'#333745',
     paddingTop:10,
     paddingLeft:10,
     paddingBottom:5,
  },
  checkit:{
    width:'20%',
     marginLeft:10,
     marginTop:10,
     
  },
  one:{
   width:'100%',
   height:50,
   backgroundColor:'#fff',
   borderBottomWidth:1,
   borderBottomColor:'#eee',
   flexDirection:'row',
  },
  br:{
    width:'100%',
    marginTop:120,
  },
  intext:{
    width:'70%',  
    fontSize:17, 
  },
  box:{
     width:'100%',
     height:'auto',
     backgroundColor:'#f8f8f8',
  },
})