import React from 'react';
import { Text,View,FlatList,StyleSheet } from 'react-native';


const ColorNav =({Title,ColorArray})=>{
const MyColor = [...ColorArray]
  return(
    <View>
    <View>
        <Text style= {[styles.text]}>{Title}</Text>
        </View>
    <FlatList
      // data={ColorArray.splice(0,5)}
      data={MyColor.splice(0,5)}
      keyExtractor={item=>item.hexCode}
      horizontal={true}
      renderItem={({item})=><View style={[styles.box,{backgroundColor:item.hexCode}]}>
      </View>}
  />
  </View>
  )
}
const styles= StyleSheet.create({
  box:{
    height:30,
    width:30,
    marginHorizontal:5,
    borderWidth:.6,
  },
  text:{
    fontWeight:"bold",
    fontSize:18,
    marginLeft:5,
    marginBottom:5
  }
})


export default ColorNav