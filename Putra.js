import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Putra = ({navigation}) => {
    return (
        <View>
            <Text>Klik untuk kembali ke halaman Home</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
            <Text>Klik untuk kembali ke halaman About</Text>
            <Button title='Go to About'
            onPress={()=>navigation.navigate('About')}/>
            <Text>Klik untuk kembali ke halaman Aprillian</Text>
            <Button title='Go to Aprillian'
            onPress={()=>navigation.navigate('Aprillian')}/>
        </View>
    );
};

export default Putra;