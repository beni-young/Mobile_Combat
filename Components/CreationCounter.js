import React, {useState} from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';

const CreationCounter = (props) => {   
    

    return <View>
        <Button title="Decrease" onPress={props.onDecrease}/>
        <Text>Status Level - {props.name}: {props.value}</Text>
        <Button title="Increase" onPress={props.onIncrease} />
    </View>
}



export default CreationCounter;