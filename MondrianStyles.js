import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        bottom: 0
    },
    base: { borderColor: '#000000', borderWidth: 5 },
    topBlock: { flexDirection: 'row', flex: 5 },
    leftCol: { flex: 2 },
    bottomBlock: { flex: 2, flexDirection: 'row' },
    cellOne: { flex: 1, borderBottomWidth: 15 },
    cellTwo: { flex: 3 },
    cellThree: { backgroundColor: '#ff000', flex: 5 },
    cellFour: { flex: 3, backgroundColor: '#0000ff' },
    cellFive: { flex: 6 },
    cellSix: { flex: 1 },
    cellSeven: { flex: 1, backgroundColor: '#ffff00' }
});

export default styles