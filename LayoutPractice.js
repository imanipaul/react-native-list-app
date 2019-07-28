import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class LayoutPractice extends React.Component {
    render() {
        return (
            <View style={styles.parent}>
                <Text style={styles.child}>Child One</Text>
                <Text style={styles.child}>Child Two</Text>
                <Text style={styles.child}>Child Three</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        borderColor: '#0099aa',
        borderWidth: 5,
        marginTop: 30
    },
    child: {
        flex: 1,
        borderColor: '#aa0099',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    }
})

export default LayoutPractice