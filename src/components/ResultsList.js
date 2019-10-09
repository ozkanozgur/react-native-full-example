import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => {
                    return result.id;
                }}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            return navigation.navigate('ResultsShow', {id: item.id});
                        }}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15
    }
});

export default withNavigation(ResultsList);
