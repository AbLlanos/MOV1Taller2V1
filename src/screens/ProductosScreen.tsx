import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { styles } from '../themes/appThemes';
import { ImageBackground } from 'react-native';

const sampleData = [
    { id: '1', title: 'LED ZEPPELIN – 4TH ALBUM', price: '$40', image: 'https://cdcmusicec.com/wp-content/uploads/2021/12/1-1.jpg' },
    { id: '2', title: 'METALLICA – KILL ‘EM ALL (VINILO ROJO)', price: '$70', image: 'https://cdcmusicec.com/wp-content/uploads/2024/04/5-670x670.png' },
    { id: '3', title: 'GUNS N’ ROSES – LIVE IN SOUTH AMERICA (PICTURE DISC)', price: '$20', image: 'https://cdcmusicec.com/wp-content/uploads/2024/01/FET-7-756x756.png' },
    { id: '4', title: 'KISS – Kiss ’88 (WNEW FM Broadcast: The Ritz, New York 1988)', price: '$65', image: 'https://cdcmusicec.com/wp-content/uploads/2024/01/FET-5.png' },
];

export const ProductosScreen = () => {



    return (
        <SafeAreaView style={styles.container}>


            <StatusBar />
            <ImageBackground
                source={require('../img/0008-fondoRegistroV4.jpg')}
                style={styles.imagenFondo}
                imageStyle={{ opacity: 0.2 }}
            >
                <Text style={styles.header}>Bienvenido</Text>
                
                <View style={styles.ubicacionMedia}>

                    <FlatList
                        data={sampleData}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        columnWrapperStyle={styles.row}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Añadir al carro</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};


