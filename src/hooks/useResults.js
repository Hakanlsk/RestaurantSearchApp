import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        try{
        const response = await yelp.get('/search', {
            params: {
            limit: 50,
            term : searchTerm,
            location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        }catch(err){
        setErrorMessage('Bir şeyler yanlış gitti!')
        } 
    }

    //program ilk açıldığında default olarak bazı restaurantların gösterilmesi için
    //ama bu fonksiyon tekrar tekrar sürekli çalışacağı için yanlış bir kullanım
    //searchApi('pasta')
    //bir kez çalışması için useEffect kulllandık

    useEffect(()=>{
        searchApi('pasta');
    },[])

    //searchScreen sayfamızda kullandığımız değişkenleri searchScreene aktarmak için return ediyoruz
    return [searchApi, errorMessage, results];

}
