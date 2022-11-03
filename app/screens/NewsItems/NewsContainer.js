import React , {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator,Dimensions} from 'react-native';

import NewsItemList from './NewsItemList';
import SearchBarTheme from '../../shared/SearchBarTheme';
import Banner from '../../shared/Banner';
import CategoryFilter from './CategoryFilter';

var width = Dimensions.get('window');


const NewsItemContainer = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setNewsItems(json))

         setCategories(["All", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"]);
         setActive(-1);
         setInitialState(newsItems);

        return () => {
            setNewsItems([]);
            setCategories([]);
            setActive();
            setInitialState();
        }

    }, []);

    const renderItem = ({ item }) => {
        // when no input, show all
        if (searchPhrase === "") {
          return <NewsItemList key={item.id} item={item} />;
        }
        // filter of the title
        if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
          return <NewsItemList key={item.id} item={item} />;
        }
      };


  return (
    <View style={styles.container}>
        <SearchBarTheme 
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
        />
        {/*<View><CategoryFilter/></View>*/}
        <View style={styles.listContainer}>
        <FlatList
            data={newsItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </View>
     </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
    },
    listContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#fff',

    },
});

export default NewsItemContainer;
