import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Aprillian = ({navigation}) => {
    return (
        <View>
            <Text>Klik untuk menuju ke halaman Putra</Text>
            <Button title='Go to Putra'
            onPress={()=>navigation.navigate('Putra')}/>
            <Text>Klik untuk kembali ke halaman Home</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
            <Text>Klik untuk kembali ke halaman About</Text>
            <Button title='Go to About'
            onPress={()=>navigation.navigate('About')}/>
        </View>
    );
};

export default Aprillian;