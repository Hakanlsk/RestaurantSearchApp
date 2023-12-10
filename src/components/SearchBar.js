import { View, Text, StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { Search } from "react-native-feather";

const SearchBar = ({term, onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Search style={styles.iconStyle} stroke="black" height={27} width={27}/>
      <TextInput 
        autoCapitalize='none'//otomatik büyük harf ile başlatma
        autoCorrect={true}//otomatik düzeltme
        style={styles.inputStyle} 
        placeholder='Search Restaurants'
        value={term}                //kullanıcın girdiği değer term değerine atandı bu 'term' diğer sayfaya props olarak geçildi
        onChangeText={onTermChange} //klavyeden girilen her veriden sonra çalışır
        onEndEditing={ onTermSubmit }//kullanıcı klavyeden "Tamam" tuşuna bastığında çalışır       
      />
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#E5E5E5',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        paddingHorizontal:10,
        marginVertical:7
    },
    inputStyle: {
        flex:1,
        fontSize:18
    },
    iconStyle :{
        alignSelf:'center',
        marginHorizontal:10
    }
});

export default SearchBar