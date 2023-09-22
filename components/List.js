import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (props) => {
    const [alarmOn, setAlarmOn] = useState(false);

    const handleToggleAlarm = () => {
        setAlarmOn(!alarmOn);
    };

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <TouchableOpacity onPress={handleToggleAlarm}>
                <View style={[
                    styles.container,
                    alarmOn ? styles.alarmOnContainer : styles.alarmOffContainer
                ]}>
                    <View style={[
                        styles.circular,
                        alarmOn ? styles.alarmOn : styles.alarmOff,
                        alarmOn ? styles.slideRight : styles.slideLeft
                    ]}></View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 36,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
    },
    alarmOnContainer: {
        backgroundColor: '#F5C997',
    },
    alarmOffContainer: {
        backgroundColor: 'black',
    },
    circular: {
        width: 16,
        height: 16,
        borderRadius: 8,
        alignSelf: 'center',
        position: 'absolute',
    },
    slideLeft: {
        left: 0,
    },
    slideRight: {
        left: 20,
    },
    alarmOn: {
        backgroundColor: '#fff',
    },
    alarmOff: {
        backgroundColor: '#fff',
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        maxWidth: '80%'
    },
    square: {
        width: 35,
        height: 35,
        backgroundColor: '#F5C997',
        opacity: 1.0,
        marginRight: 15,
        borderRadius: 8,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    item: {
        backgroundColor: '#7D7C7C',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});

export default Task;
