import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar,ScrollView} from 'react-native';
import Note from './Note';



export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
          noteArray:[],
          noteText:'',
    }
  }
  render() {

    let notes= this.state.noteArray.map((val, key) =>{
     return <Note key={key} keyval={key} val={val}/>

     });

    return (
     
    <View style={styles.container}>
    
        <StatusBar backgroundColor="#333745" barStyle="light-content" />
         <View style={styles.box}>

           <View style={styles.topa}>
             <TextInput style={styles.intext}
               placeholder="add note"
               onChangeText={(noteText) => this.setState({noteText})}
               value={this.state.noteText}
               
              />
             <Button  style={styles.save}
             onPress={this.addNote.bind(this)}
             title="save"
             color={'#333745'}/>
            </View>

         <View style={styles.br}></View>
           
           <ScrollView  style={styles.scroll}>

             {notes}
           </ScrollView>
             
        </View>
         
  </View>

    ); 
  }

  addNote(){
     //alert('h');
     if(this.state.noteText){
        let d = new Date();
        this.state.noteArray.push({
          'date':d.getFullYear() + 
          "/ " + (d. getMonth() + 1) +
          " / "+ d.getDate(),
          'note':this.state.noteText

        });
         this.setState({noteArray:this.state.noteArray });
         this.setState({ noteText:''})
     }
  }
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
    
  },
  scroll:{
      width:'100%',
      height:400,
      backgroundColor:'#ccc',
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