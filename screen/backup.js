import React from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Button, StatusBar, FlatList} from 'react-native';


export default class HomeScreen extends React.Component {

  constructor () {
    super();
       this.state={
         name:[],
         value:'',
       },
              
       
         
       
       
        

      this.onButtonPress.bind(this);

     
  }
  onButtonPress(){
  this.setState({name:this.state.value});

  }

  createElementsFromList(list){
     const elements  = list.map((listElements)=>{
       return(
         

          <View style={styles.one}>
              <Text style={styles.textone}>{listElements}</Text>
               <CheckBox  style={styles.checkit} />
          </View>

         
       )

     })

     return(elements)
  }
  render() {
  
     const namey = this.state.name;
          
          

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#333745" barStyle="light-content" />
      <View style={styles.box}>
      
         <View style={styles.topa}>
             <TextInput style={styles.intext}
             placeholder="add note"
             onChangeText={value=> this.setState({value})}
              value={this.state.value}
              />
             <Button  style={styles.save}
             onPress={this.onButtonPress.bind(this)}
             title="Save"
             color={'#333745'}/>
         </View>


         <View>
           <View style={styles.br}></View>
           {this.createElementsFromList(myvalue)}
         </View>

          
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