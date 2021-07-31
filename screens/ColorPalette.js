import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox'


const ColorPalette = ({ route }) =>{
  const { paletteName,color } = route.params;
  return(
    <FlatList
    style={styles.alignItems}
    // ListHeaderComponent={<View style = {[styles.textAlign]}>
    // <Text style= {[styles.header]}>{paletteName}</Text>
    // </View>}
    data={color}
    keyExtractor={item=>item.hexCode}
    renderItem={({item})=><ColorBox name={item.colorName} hexCode={item.hexCode} />}
    />
  )
}

const styles = StyleSheet.create({
 
  textAlign:{
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
  },
  header:{
    // marginVertical:10,
    paddingTop:10,
    paddingBottom:0,
    fontWeight:"bold",
    fontSize:18,
  },
  alignItems:{
    backgroundColor:'white',
    marginTop:10,
  },

})
export default ColorPalette;