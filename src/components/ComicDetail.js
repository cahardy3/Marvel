import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const size = "/portrait_xlarge.jpg"
const ComicDetail = ({comic}) => {
    const { name, resourceURI, thumbnail, items, description } = comic;
    console.log(thumbnail)
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailCountainerStyle,
        headerTextStyle,
        albumStyle,
    } = styles;
    console.log(thumbnail.path+size)
    return (
        <Card>
            <CardSection>
                <View styles={thumbnailCountainerStyle}>
                    <Image
                    style={thumbnailStyle}
                    source={{ uri: thumbnail.path+size }}
                    />
                </View>
                <View styles={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text>{description}</Text>
                </ View>
            </CardSection>
        </Card>
    )
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    albumStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailStyle: {
        height: 225,
        width: 150
    },
    thumbnailCountainerStyle: {
        justifyContent: 'centre',
        alignItems: 'centre',
        marginLeft: 10,
        marginRight: 10
    }
};

export default ComicDetail;
