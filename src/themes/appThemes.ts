import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { SECONDARY_COLOR, TERTIARY_COLOR, COLOR_AZUL_PRINCIPAL, COLOR_ROJO_PRINCIPAL, COLOR_CELESTE_PRINCIPAL, COLOR_PLOMO_PRINCIPAL } from './commons/constants';


const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: TERTIARY_COLOR,
    },
    imagenFondo: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: 'center',
        marginBottom:20,
        
    },
    imagenLogo: {
        width: 320,
        height: 220,
        maxWidth: "100%",
        maxHeight: "200%",
        resizeMode: "contain",
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    label: {
        color: SECONDARY_COLOR,
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
    },
    btnIniciarSesion: {
        backgroundColor: COLOR_ROJO_PRINCIPAL ,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },

    btnRegistro: {
        backgroundColor: COLOR_AZUL_PRINCIPAL,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    btnTexto: {
        color: '#f9ebea',
        fontSize: 20,
        fontWeight: '500',
    },
    iconoPassword: {
        right: 10,
        position: "absolute",
        bottom: 28,
    },





    //REGISTRO

    textoSuperior: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        color: SECONDARY_COLOR,
        paddingVertical: 10,
    },

    labelFormulario: {
        color: SECONDARY_COLOR,
        fontSize: 15,
        marginBottom: 4,
        fontWeight: "700",
    },
    opcionMedia: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: TERTIARY_COLOR
    },

    ubicacionMedia: {
        alignItems: "center",
        justifyContent: "center",
    },

    textoInferior: {
        fontSize: 17,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: "center",
    },

    contenedorFormulario: {
        width: '100%',
        padding: 10,
    },

    inputRegistro: {
        width: '100%',
        padding: 9,
        marginVertical: 3,
        borderWidth: 1,
        borderColor: COLOR_ROJO_PRINCIPAL,
        borderRadius: 10,
        backgroundColor: SECONDARY_COLOR,
        fontSize: 12,
    },
    btnRegistrar: {
        backgroundColor: COLOR_AZUL_PRINCIPAL,
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
    },
    textoBtnRegistrar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
    },
    textoLogin: {
        
        fontSize: 18,
        color: SECONDARY_COLOR,
    },
    enlaceLogin: {
        color: COLOR_CELESTE_PRINCIPAL,
        fontWeight: "bold",
    },

    iconoPasswordRegistro: {
        right: 10,
        position: "absolute",
        bottom: 10,
    },


    //PRRODUCTO SCREEN
    //CARDS
       //PRRODUCTO SCREEN
    //CARDS
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 13,
        marginHorizontal: 10,
        color:SECONDARY_COLOR,
        backgroundColor: TERTIARY_COLOR,
        borderRadius:20,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    card: {
        width: width * 0.45,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10
        
        

    },
    image: {
        width: "100%",
        height: height * 0.2,
        resizeMode: 'contain',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: "center",
        maxWidth: "100%",
    },
    price: {
        fontSize: 15,
        color: COLOR_PLOMO_PRINCIPAL,
        marginVertical:5,
        textAlign: "center",
        
    },
    button: {
        backgroundColor: COLOR_AZUL_PRINCIPAL,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    buttonText: {
        color: SECONDARY_COLOR,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: "center"
    },


    //STACKNAVIGATOR 
    titulosVentanas: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: '700',
    }



})

