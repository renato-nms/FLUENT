import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Onboarding() {
const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image 
            source={require('../../assets/dddd-Photoroom.png')}
            style={styles.logo}
            resizeMode='contain'
            />
            <View style={styles.container_text}>
                <Text>
                    Aqui vamos começar o entendimento ao curso
                </Text>
            </View>
            <View style={styles.container_buttons}>
        <TouchableOpacity style={styles.button}
            onPress={ () => navigation.navigate('Welcome')}
            activeOpacity={0.7}>
            <Text style={styles.textbutton}>Go to Welcome</Text>
        </TouchableOpacity >

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    container_text:{
        justifyContent: 'center',
        padding: 20,
    },
    title:{
        fontSize: 24,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    textbutton:{
        fontSize: 18,
        color: 'yellow',
        fontWeight: 'bold'
    },
    logo:{
        width: 300,
        height: 300,
    },
    container_buttons:{
        justifyContent: 'center',
    },
    button:{
        backgroundColor: '#00AEEF', // azul igual da imagem
        borderRadius: 50,
        paddingVertical: 12,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    }
    }
)