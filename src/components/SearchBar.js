import React,{ Component } from 'react';
import { Button, TextInput, Text, View } from 'react-native';
  
class ComicSearch extends Component {
  _handlePress(event) {
  console.log('Pressed!');
  console.log(this.state.username);
  };

    render() {
      return (
        <View style={styles.containerStyle}>
          <TextInput
          ref="usr"
          style={{height: 40, borderColor: 'gray', borderWidth: 1 , marginTop: 10 , padding : 10 , marginLeft : 5 , marginRight : 5 }}
          
        returnKeyType = {"next"}
        autoFocus = {true}
        autoCapitalize = "none"
        autoCorrect = {false}
        clearButtonMode = 'while-editing'
        onChangeText={(text) => {
            this.setState({username:text});
          }}
        onSubmitEditing={(event) => {
       this.refs.psw.focus();
        }}
        />
        <Button
          style={{borderWidth: 1, borderColor: 'blue'}}
          onPress={this._handlePress.bind(this)}
          title="Press me"
        />
        </View>
      );
    }
}
const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      flexWrap: 'wrap',
      justifyContent: 'center',
      flexDirection: 'column',
      borderColor: '#ddd',
      position: 'relative',
  }
}
export default ComicSearch;
