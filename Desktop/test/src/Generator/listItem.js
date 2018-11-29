import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native';

const Listitem = (props) => {
    return(

        props.items.map((item,i)=>(
            <TouchableOpacity
            onPress = {()=>props.delete(i)}
            key={i}
            style={styles.listitem}
            >
        <View>
            <Text>{item}</Text>
        </View>
        </TouchableOpacity>

        ))
    )
}

const styles = StyleSheet.create({
    listitem:{
        backgroundColor:"#cecece",
        alignItems:"center",
        padding: 10,
        width:'100%',
        margin:5
    }

})


export default Listitem;