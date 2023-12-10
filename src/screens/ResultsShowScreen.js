import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import yelp from '../api/yelp';

const ResultsShowScreen = () => {
  const [result, setResult] = useState(null);
  const route = useRoute();
  const { id } = route.params;

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
    //   console.error('API çağrısında hata oluştu:', error);
      setResult(null);
    }
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  return (
    <ScrollView contentContainerStyle={{alignItems:'center'}}>
      {/* result başlangıçta null olduğu için  önce kontrol etmeliyiz yoksa type hatası alırız */}
      {result && <Text style={styles.name}>{result.name}</Text>}
      {result && result.photos && result.photos.length > 0 && (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo, index) => index.toString()}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    )}
    </ScrollView>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
    name:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10
    },
    image:{
        width:250,
        height:250,
        borderRadius:6,
        marginBottom:15
    }
});
