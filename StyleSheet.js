import React from 'react'
import { View, Image , StyleSheet } from 'react-native'
import water from '../assets/water.png'

function Sheet(props) {
    return (
        <View>
            <Image source={water} style={styles.WaterImage}></Image>
        </View>
    )
}

export default Sheet

const styles = StyleSheet.create({
    WaterImage: {
        width:64,
        height: 64,
        
    },
});