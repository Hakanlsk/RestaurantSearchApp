import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'
import {useNavigation} from '@react-navigation/native'


const ResultsList = ({title, results}) => {

  const navigation = useNavigation();

  if(!results.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={results}
      keyExtractor={(result)=>results.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity 
            onPress={()=> navigation.navigate('Restaurant Detail', {id : item.id})}>
            <ResultsDetail result={item}/> 
          </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
      marginBottom:10
    }
})


export default ResultsList