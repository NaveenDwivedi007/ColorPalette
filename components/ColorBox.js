import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  const style = StyleSheet.create({
    Box:{
      alignItems:"center",
      justifyContent:"center",
      paddingHorizontal:50,
      paddingVertical:10,
      marginBottom:10,
      marginHorizontal:15,
      elevation:2,
    },
    BoxText:{
      fontSize:20,
      color:"white"
    },
    bgColor:{
      backgroundColor:props.hexCode
    }
  })
  const textColor ={
    color:parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black':'white'
  }
  return(
    <View style = {[style.Box,style.bgColor]}>
    <Text style = {[style.BoxText,textColor]}>{`${props.name}: ${props.hexCode}`}</Text>
    </View>
  )
  
}


export default ColorBox