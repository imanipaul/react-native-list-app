import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Mondrian extends React.Component {
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.topBlock}>
                    <View style={styles.leftCol}>
                    </View>
                    <View style={[styles.cellThree, styles.base]} />
                </View>
                <View style={styles.bottomBlock}>
                    <View style={[styles.cellFour, styles.base]} />
                    <View style={[styles.cellFive, styles.base]} />
                    <View style={styles.bottomRight}>
                    </View>
                </View>
            </View>
        )
    }
}

export default Mondrian
