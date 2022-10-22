import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({navigation}) => {
    return (
        <View>
            <Text>klik untuk menuju ke halaman Aprillian</Text>
            <Button title='Go to Aprillian'
            onPress={()=>navigation.navigate('Aprillian')}/>
            <Text>Klik untuk kembali ke halaman Home</Text>
            <Button title='Go Back'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default About;