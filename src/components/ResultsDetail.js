import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

{/* result propu apiden gelen businesses objesine denktir */}
const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.resultDetails}>
          {result.rating} <AntDesign name="star" size={14} color={'#FAC101'} />
        </Text>
        <Text style={styles.resultDetailss}>
           <EvilIcons name="comment" size={16} color="black" /> {result.review_count}
        </Text>
      </View>
           
        
      
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    resultDetails:{
      color:'gray',
      marginRight:10
    },
    resultDetailss:{
      color:'gray'
    },
    name:{
        fontWeight:'bold'
    }
})