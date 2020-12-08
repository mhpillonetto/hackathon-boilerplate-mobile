import React, { useState } from 'react';
import { View, Text, Slider, TouchableOpacity, StyleSheet, Image } from 'react-native';


const HomeScreen = props => {
    const [frequencyValue, setFrequencyValue] = useState(1);
    const [volume, setVolume] = useState(1);
    const [power, setPower] = useState(1);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <View style={{ marginTop: 55, alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 4 }}>Silencia</Text>
                <View style={{ backgroundColor: 'black', height: 2, width: '90%' }}></View>
            </View>
            <View style={{ marginTop: 20, marginHorizontal: 20, alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 20 }}>Volume</Text>
                    <Slider
                        style={{ width: 200 }}
                        minimumValue={1}
                        maximumValue={100}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#BBBBBB"
                        value={volume}
                        onValueChange={value => setVolume(value)}
                    />
                    <Text style={styles.labelText}>{Math.round(volume)}</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: 20 }}>Frequência principal</Text>
                    <Slider
                        style={{ width: 200 }}
                        minimumValue={1}
                        maximumValue={32000}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#BBBBBB"
                        value={frequencyValue}
                        onValueChange={value => setFrequencyValue(value)}
                    />
                    <Text style={styles.labelText}>{frequencyValue} Hz</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: 20 }}>Potencia</Text>
                    <Slider
                        style={{ width: 200 }}
                        minimumValue={1}
                        maximumValue={100}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#BBBBBB"
                        value={power}
                        onValueChange={value => setPower(value)}
                    />
                    <Text style={styles.labelText}>{Math.round(power)} W</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity><Image style={{height:20}}resizeMode='contain'source={require('../assets/power.png')}/></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={{fontSize: 18}}>Aplicar Mudanças</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {marginTop:20}]}><Text style={{fontSize: 18}}>Ligar / Desligar</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    labelText: {

    },
    labelTitle: {

    },
    button: {
        borderRadius: 3,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#DDDDDD',
        alignItems: 'center'
    },
})
export default HomeScreen;