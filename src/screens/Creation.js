import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import CreationCounter from '../../Components/CreationCounter';

const STAT_SCREEN_STATE = "characterCreation";
const COMBAT_SCREEN_STATE = "dancing";


const Creation = () => {   

    const [gameState, setGameState] = useState(STAT_SCREEN_STATE);
    var whatToDisplay;

    const [strength, setStrength] = useState(1);
    const [health, setHealth] = useState(10);
    const [magic, setMagic] = useState(1);
    const [total, setTotal] = useState(15); 

    // Enemy Stats
    const [estrength, enemyStrength] = useState(5);
    const [ehealth, enemyHealth] = useState(100);
    const [emagic, enemyMagic] = useState(5);
    

    loginHandler = (state) => {

      if(state ==='d') {
        return setGameState(COMBAT_SCREEN_STATE);
      } else {
        return setGameState(STAT_SCREEN_STATE);
      }
    }

    const setDecrease = (type) => {

        if(type === 'strength'){
            strength - 1 < 1 ? null : (setStrength(strength - 1), setTotal(total + 1));
        }

        if(type === 'health'){
            health - 10 < 10 ? null : (setHealth(health - 10), setTotal(total + 1));
        }

        if(type === 'magic'){
            magic - 1 < 1 ? null : (setMagic(magic - 1), setTotal(total + 1));
        }
    }

    const setIncrease = (type) => {

        if(type === 'strength'){
            total - 1 < 0 ? null : (setStrength(strength + 1), setTotal(total - 1)); 
        }

        if(type === 'health'){
            total - 1 < 0  ? null : (setHealth(health + 10), setTotal(total - 1)); 
        }

        if(type === 'magic'){
            total - 1 < 0  ? null : (setMagic(magic + 1), setTotal(total - 1));
        }
    }

    switch(gameState){    
      case STAT_SCREEN_STATE:
        whatToDisplay = <View>
          <Text>Grow in Power</Text>
          <Text></Text>
          <Text></Text>
          <CreationCounter name="strength" value={strength}
          onDecrease={ () => {setDecrease('strength')}}       
          onIncrease={ () => {setIncrease('strength')}}    
          />
          <Text></Text>
          <Text></Text>
          <CreationCounter name="health" value={health}
          onDecrease={ () => {setDecrease('health')}}       
          onIncrease={ () => {setIncrease('health')}}  
          />
          <Text></Text>
          <Text></Text>
          <CreationCounter name="magic" value={magic}
          onDecrease={ () => {setDecrease('magic')}}       
          onIncrease={ () => {setIncrease('magic')}}      
          />
          <Text></Text>
          <Text></Text>
          <Text>Points Remaining: {total}</Text>
          <Text></Text>
          <Text></Text> 
          { total > 0 ? <Text>Spend all your points to continue!</Text>: null }
          { total === 0 ? <Button title="Click Me To Embark On Your Journey!"
            onPress={() => loginHandler('d')}/> : null}
          </View>
        break;
    case COMBAT_SCREEN_STATE:
        whatToDisplay = <View><Text style={styles.txtTitle}>Dancing!</Text>
        <Text style={styles.EstatView}>Monster Stats{'\n'}
          Health: {ehealth}{'\n'}
          Strength: {estrength}{'\n'}
          Magic: {emagic}{'\n'}
        </Text>
        <Text style={styles.statView}>Player Stats{'\n'}
        Health: {health} {'\n'}
        Stength: {strength} {'\n'}
        Magic: {magic}{'\n'}
        </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Image source={require('../../assets/hbo-max-legendary.png')} />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button title="Go Back!" onPress={() => loginHandler('c')}/> 
        
        </View>
        break;

    }
    return whatToDisplay;
  }

const styles = StyleSheet.create({
    viewStyle: {
      color: "blue"
    },
    statView: {
      color: "green",
      flexDirection: "row",
      borderColor: 'green',
      borderWidth: 1,
      alignSelf: "flex-end",
      position: "absolute",
      
    },
    EstatView: {
      color: "green",
      flexDirection: "row",
      borderColor: 'green',
      borderWidth: 1,
      position: "absolute",
      alignSelf: "flex-start"
    },
    txtTitle: {
      fontSize: 20,
      flexDirection: "row",
      borderColor: "blue",
      borderWidth: 1,
      alignSelf: "flex-start",
      position: "absolute",
      left:150,
      right: 175

    },
  });

export default Creation;