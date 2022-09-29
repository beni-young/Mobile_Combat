import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import CreationCounter from '../../Components/CreationCounter';

const STAT_SCREEN_STATE = "characterCreation";
const COMBAT_SCREEN_STATE = "dancing";


const Creation = () => {   

    const [gameState, setGameState] = useState(STAT_SCREEN_STATE);
    var whatToDisplay;

    // Player Stats
    const [strength, setStrength] = useState(1);
    const [health, setHealth] = useState(10);
    const [magic, setMagic] = useState(1);
    const [total, setTotal] = useState(15); 

    // Enemy Stats
    const [estrength, enemyStrength] = useState(5);
    const [ehealth, enemyHealth] = useState(100);
    const [emagic, enemyMagic] = useState(5);

    //Combat Text
    const [msgCombat, setCombat] = useState('Whatcha goin do baby?!?!');
    
    // changes state from Creation to Combat Screen
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

    // Combat Log 
    // Player has first turn to choose an attack with either (magic, strength, heal)
    // heals increase health between 5-10 points and uses 1 magic point
    // magic attack does 10-15 points and uses 2 magic points
    // attack does base strength dmg + random 2-10 points

    const Combat = (move) => {
      let damage = 0;
      let mouth = '';

      mouth= Math.floor(Math.random() * 2);

      if(move == 'vogue'){
        damage = strength + Math.floor(Math.random() * 10);
        enemyHealth(ehealth - damage);
        setCombat( txtCombat(mouth) + "\n" + 'Vogue did ' + damage + ' dmg ');
      }
    }

    // different phrases to say during the combat
    // if Icon or Player health == 0 then game is over
    const txtCombat = (dancer) => {
      
      switch(dancer) {
        case 0:
          return "You will never be an Icon like me!";
          break;
        case 1:
          return "Don't you ever try to disrespect Mother!";
          break;
        case 2:
          return "You may Slay another day!"
      }

      return null;
  }

    switch(gameState){    
      case STAT_SCREEN_STATE:
        whatToDisplay = <View style={{backgroundColor: '#87ceeb', padding: 1}}>
          <Text style={{ alignSelf: 'center'}}>Grow in Power n Beat the Grrls!</Text>
          <Text></Text>
          <Text></Text>
          <CreationCounter name="Kunti" value={strength}
          onDecrease={ () => {setDecrease('strength')}}       
          onIncrease={ () => {setIncrease('strength')}}    
          />
          <Text></Text>
          <Text></Text>
          <CreationCounter name="Serving Body" value={health}
          onDecrease={ () => {setDecrease('health')}}       
          onIncrease={ () => {setIncrease('health')}}  
          />
          <Text></Text>
          <Text></Text>
          <CreationCounter name="Shade" value={magic}
          onDecrease={ () => {setDecrease('magic')}}       
          onIncrease={ () => {setIncrease('magic')}}      
          />
          <Text></Text>
          <Text></Text>
          <Text>Coins Remaining: {total}</Text>
          <Text></Text>
          <Text></Text> 
          { total > 0 ? <Text style={{ alignSelf: 'center'}}>Spend all your coins to continue!</Text>: null }
          { total === 0 ? <Button title="Lets see whatcha got!"
            onPress={() => loginHandler('d')}/> : null}
          </View>
        break;
    case COMBAT_SCREEN_STATE:
        whatToDisplay = <View style={{padding: 5}}><Text style={styles.txtTitle}>Vogue Battle!</Text>
        <Text style={styles.EstatView}>Icon Stats{'\n'}
          Serving Body: {ehealth}{'\n'}
          Kunti: {estrength}{'\n'}
          Shade: {emagic} {'\n'}
        </Text>
        <Text style={styles.statView}>Player Stats{'\n'}
        Serving Body: {health} {'\n'}
        Kunti: {strength} {'\n'}
        Shade: {magic}{'\n'}
        </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Image style={styles.mstImage} source={require('../../assets/hbo-max-legendary.png')} />
        <Text style={{ alignSelf: 'center'}}>House Extravaganza</Text>
        <Text></Text>
        <Text style={styles.txtCombat}>{msgCombat}</Text>
        <Text>are you ready to let it all out on the floor?!</Text>
        <Text></Text>
        <TouchableOpacity style={styles.btnVogue} onPress={() => Combat('vogue')}>
          <Text>Vogue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDuck} onPress={() => loginHandler('c')}>
          <Text>Duck Walk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnShade} onPress={() => loginHandler('c')}>
          <Text>Throw Shade</Text>
        </TouchableOpacity>        
        </View>
        break;

    }
    return whatToDisplay;
  }

const styles = StyleSheet.create({
    viewStyle: {
      color: "blue"
    },
    mstImage: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      borderRadius: 5,
    },
    statView: {
      color: "green",
      flexDirection: "row",
      borderColor: 'green',
      borderWidth: 1,
      alignSelf: "flex-end",
      position: "absolute",
      paddingLeft: 15,
      paddingBottom: 4,
      
    },
    EstatView: {
      color: "purple",
      flexDirection: "row",
      borderColor: 'purple',
      borderWidth: 1,
      position: "absolute",
      alignSelf: "flex-start",
      padding: 2,
    },
    txtTitle: {
      fontSize: 20,
      flexDirection: "row",            
      alignSelf: "flex-start",
      position: "absolute",
      left:150,
      right: 100

    },
    txtCombat: {      
      padding: 5,       
      borderWidth: 1,
      borderColor: 'blue',
      height: 75
    },
    btnVogue: {      
      padding: 5,       
      borderWidth: 1,
      borderColor: 'blue',  
      position: "absolute",
      right: 330,
      left: 10,
      bottom: 44,
        
    },
    btnDuck: {      
      padding: 5,       
      borderWidth: 1,
      borderColor: 'blue', 
      alignSelf: "center",     
    },
    btnShade: {      
      padding: 5,       
      borderWidth: 1,
      borderColor: 'blue',   
      alignSelf: "flex-end",    
    },
  });

export default Creation;