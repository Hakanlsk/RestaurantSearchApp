import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  //useResult ' tan gerekli veriler çekildi
  const [searchApi, errorMessage, results] = useResults();
  
  const filterResultsByPrice = (price) => {     //apiden gelen fiyat durumuna göre ResultList leri filtreleme
    //price === '$' || '$$' || '$$$' 
    return results.filter(result => {
      return result.price === price;
    })
  }
  return (
    //ScrolView ile kaydırmanın düzgün çalışması için SearchScreenin cihaz ekranına yayılması gerek, flex:1 
    //yada en dış etikette View yerine sadece <> </> etiketleri kullanılır, yine kaydırılabilir olur
    <>
      <SearchBar 
        term={term} //value = term
        onTermChange={setTerm}
        onTermSubmit={()=> searchApi(term)} //term = searchTerm
      />
      {errorMessage ? <Text style={{fontSize:16, color: 'red'}}>{errorMessage}</Text> : null}
      <ScrollView>
          <ResultsList 
            results={filterResultsByPrice('$')} 
            title="Cost Effective"
          />
          <ResultsList 
            results={filterResultsByPrice('$$')} 
            title="Bit Pricier"
          />
          <ResultsList  
            results={filterResultsByPrice('$$$')} 
            title="Big Spender"
          />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen