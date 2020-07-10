import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import ComicDetail from './ComicDetail';
import username from './SearchBar';
import ComicSearch from './SearchBar';

const axios = require ("axios");
const md5 = require ("js-md5");

const date = new Date();
const timestamp = date.getTime();
const PUBLIC_KEY = "f70c2d3816561b7bdcc440dc8eca4cb2"
const PRIVATE_KEY = "8e78a9f4a4d854779f054fce1a812f1ed7712c8d"
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
console.log(timestamp)
console.log(PUBLIC_KEY)
console.log(PRIVATE_KEY)
console.log(hash.hex())

class ComicList extends Component {
    constructor(props) {
        super(props)
        this.url = ("https://gateway.marvel.com/v1/public/characters?ts="+timestamp+"&nameStartsWith="+"hulk"+"&orderBy=name&limit=50&apikey="+PUBLIC_KEY+"&hash="+hash);
    }
    state = { comics: [] };
    
    async componentWillMount() {
        try {
            const response = await axios.get(this.url)
            .then(response => {
                console.log(response.data.data.results)
                this.setState ({ comics: response.data.data.results })
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    renderComics() {
       return this.state.comics.map(comic => 
       <ComicDetail key={comic.name} comic={comic} />
        );
       }
    render() {
       console.log(this.state)
       return (
          <ScrollView>
               {this.renderComics()}
           </ScrollView>
        )
    }
}

export default ComicList;
