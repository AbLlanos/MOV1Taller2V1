import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground, Alert, StatusBar } from 'react-native';
import { User } from '../navigator/StackNavigator';
import { styles } from '../themes/appThemes';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { CommonActions, useNavigation } from '@react-navigation/native';
import { InputLogin } from '../components/InputLogin';


//CREAR INTERFAZ E IMPORTAR USER[] DESDE STACK NAVIGATOR
interface Props {
    users: User[];
}


//INTERFAZ PARA LAS VARIABLES DEL LOGIN
interface LoginForm {
    email: string,
    password: string,
}

export const LoginScreen = ({ users }: Props) => {

    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: "",
        password: "",
    })

    const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);

    const navigation = useNavigation()

    //FUNCION PARA CONTORLAS LAS CARACTERES INGRESADOS
    const handledChange = (name: string, value: string) => {
        console.log(name, value);
        setLoginForm({ ...loginForm, [name]: value });
    }

    //FUNCION PARA VERIFICAR COMPROBAR DATOS DEL USUARIO
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.correoElectronico === loginForm.email && user.contrasena === loginForm.password);
        return existUser;
    }

    //FUNCION PARA VERIFICAR EL LOGIN
    const handleLogin = () => {

        //VERIFICAR SI EL LOGIN TIENE LOS CAMPOS COMPLETOS
        if (loginForm.email === '' || loginForm.password === '') {
            Alert.alert("Error", "Todos los campos son obligatorios");
            console.log("Todos los campos son obligatorios")
            return;
        }

        //TRAE LA FUNCION Y VERIFICA SI EL USUARIO O CONTRASEÑA ES INCORRECTA
        if (!verifyUser()) {
            Alert.alert("Error", "Usuario y/o contraseña incorrectos")
            console.log("Usuario o contraseña incorrectos")
            return;
        }


        //SI TODO SE SE CUMPLE REDIRRECCIONA AL PRODUCTOSSCREEN
        console.log(loginForm);
        navigation.dispatch(CommonActions.navigate({ name: "productosScreen" }))
    };



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ImageBackground
                source={require('../img/0002-fondoTiendaV2.jpg')}
                style={styles.imagenFondo}
                imageStyle={{ opacity: 0.6 }}
            >


                {/*AQUI SE TRAE LOS InpuLogin PARA PROCESAR LOS CAMPOS*/}

                <View style={styles.formContainer}>

                    <View style={styles.logoContainer}>
                        <Image source={require('../img/0001-logoTienda.png')} style={styles.imagenLogo} />
                    </View>

                    <InputLogin
                        textoLabel='Ingrese su correo electrónico'
                        placeholder='Correo electrónico'
                        handledChange={handledChange}
                        KeyBoardType='email-address'
                        name='email' />

                    <View>

                        <InputLogin
                            textoLabel='Ingrese su contraseña'
                            placeholder='Contraseña'
                            handledChange={handledChange}
                            KeyBoardType='default'
                            name='password'
                            isPassword={hiddenPassword}
                        />

                        <Icon
                            name={hiddenPassword ? "visibility-off" : "visibility"}
                            size={20}
                            onPress={() => sethiddenPassword(!hiddenPassword)}
                            style={styles.iconoPassword}
                        />


                        <TouchableOpacity
                            style={styles.btnIniciarSesion}
                            onPress={handleLogin}>
                            <Text style={styles.btnTexto}>Iniciar sesión</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnRegistro}
                            onPress={() => navigation.dispatch(CommonActions.navigate({ name: "registroScreen" }))}>
                            <Text style={styles.btnTexto}>Registrarse</Text>
                        </TouchableOpacity>


                    </View>







                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

