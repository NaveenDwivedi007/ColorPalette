import React, {useCallback,useState,useEffect} from 'react';
import { Text,StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import ColorNav from '../components/ColorNav';


const Home =({navigation,route})=>{
  const  NewPalette = route.params ? route.params.NewPalette : undefined;
const [PalArr,setPalArr]= useState([])
const [isRefresh, setisRefresh] = useState(false)
  const ColorApiCall =useCallback(async ()=>{
    const result = await  fetch("https://color-palette-api.kadikraman.vercel.app/palettes");
    if (result.ok) {
      const colorArr = await result.json()
      setPalArr(colorArr)
    }else{
      console.log(result.error);
    }
  })

  useEffect(()=>{
    ColorApiCall()
  },[])
  useEffect(()=>{
    if (NewPalette) {
      console.log(NewPalette.paletteName);
      setPalArr(prevArr=>[NewPalette,...prevArr])
    }
  },[NewPalette])

  const handleRefresh = useCallback(async ()=>{
    setisRefresh(true);
    await ColorApiCall();
    setisRefresh(false);
  },[])

  return(
      <FlatList
      style={styles.sap}
      data={PalArr}
      keyExtractor={item=>item.paletteName}
      renderItem={({item})=>(
        <TouchableOpacity style={styles.btn} 
        onPress={()=>{
          navigation.navigate('ColorPalette',{paletteName: item.paletteName,color:item.colors})
        }}>
          <ColorNav Title={item.paletteName} ColorArray={item.colors} />
        </TouchableOpacity>
      )}
      refreshing={isRefresh}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity onPress={()=>{
          navigation.navigate("ColorPaletteModal")
        }}>
          <Text style={styles.Modaltext}>Press for Adding Color Modal</Text>
        </TouchableOpacity>
      }
      // refreshControl={<RefreshControl refreshing={true} onRefresh={()=>{}} />}
      />
  )
}
const styles = StyleSheet.create({
  sap:{
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:"white",
    flex: 1,
  },
  btn:{
    marginTop:20,
    paddingBottom:20
  },
  Modaltext:{
    fontWeight:'bold',
    fontSize:20,
    color:'#22A3F5',
  },
  
})

export default Home