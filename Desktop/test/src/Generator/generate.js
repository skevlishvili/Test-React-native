import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';


const Generate = (props) => {
    return(
        <TouchableWithoutFeedback
        
        onPress={()=> {
            props.add()
        }}
        // onLongPress={()=>alert('Touched')}
        // onPressIn={()=> alert('Touched')}
        // onPressOut={()=>alert('Touched')}
        // delayLongPress={5000}
        >
    <View style={styles.generate}>
        <Text>Add Number</Text>
    </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    generate:{
            padding: 10,
            alignItems: 'center',
            backgroundColor:'#00bcd4',
            width:'100%',
            marginTop: 5
    }
})

export default Generate;