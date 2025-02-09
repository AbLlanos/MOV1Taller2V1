import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User } from '../navigator/StackNavigator';
import { styles } from '../themes/appThemes';
import { Alert } from 'react-native';
import { InputRegistro } from '../components/InputRegistro';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { CommonActions, useNavigation } from '@react-navigation/native';


//CREAR INTERFAZ E IMPORTAR USER[] DESDE STACK NAVIGATOR Y LA FUNCION ADDUSERS
interface Props {
    users: User[]
    addUsers: (users: User) => void;
}

//INTERFAZ PARA LAS VARIABLES DEL REGISTRO
interface RegisterForm {
    nombre: string;
    apellido: string;
    usuario: string;
    correoElectronico: string;
    contrasena: string;
    confirmarContrasena: string;
}


export const RegistroScreen = ({ users, addUsers }: Props) => {

    const [registroForm, setRegistroForm] = useState<RegisterForm>({
        nombre: "",
        apellido: "",
        usuario: "",
        correoElectronico: "",
        contrasena: "",
        confirmarContrasena: "",
    })

    //FUNCION PARA CONTORLAS LAS CARACTERES INGRESADOS
    const handleChange = (name: string, value: string) => {
        console.log(name, value)
        setRegistroForm({ ...registroForm, [name]: value })
    }

    //FUNCION PARA VERIFICAR SI EL USUARIO REGISTRADO EXISTE 
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user =>
            user.correoElectronico === registroForm.correoElectronico
            || user.usuario === registroForm.usuario)
        return existUser;
    }


    //FUNCION PARA GENERAR LA ID DE LOS USUARIOS NUEVOS
    const getIdNewUser = (): number => {
        const getIdUser = users.map(user => user.id);
        return Math.max(...getIdUser) + 1;
    }



    const navigation = useNavigation();
    const [hiddenPassword, sethiddenPassword] = useState<boolean>(true)
    const [hiddenConfirmarPassword, sethiddenConfirmarPassword] = useState<boolean>(true)



    //FUNCION PARA REGISTAR USUARIOS
    const handleRegistro = () => {
        console.log(registroForm);

        //VERIFICA SI LOS CAMPOS ESTAN COMPLETOS
        if (
            registroForm.nombre === "" ||
            registroForm.apellido === "" ||
            registroForm.usuario === "" ||
            registroForm.correoElectronico === "" ||
            registroForm.contrasena === "" ||
            registroForm.confirmarContrasena === ""
        ) {
            Alert.alert("Error", "Existen campos vacíos");
            console.log("Existen campos vacíos")
            return;
        }



        //TRAE LA FUNCION Y VERIFICA SI EL USURIO EXISTE
        if (verifyUser()) {
            Alert.alert('Error', 'El usuario ya existe');
            console.log("El usuario ya existe")
            return;
        }

        //VERIFICA SI LOS CONTRASEÑAS COINCIDEN
        if (registroForm.contrasena !== registroForm.confirmarContrasena) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            console.log("Las contraseñas no coinciden")
            return;
        }

        //CREA NUEVO USUARIO E ID AUTOMATICAMENTE AL LLAMARA A LA FUNCION

        const newUser: User = {
            id: getIdNewUser(),
            nombre: registroForm.nombre,
            apellido: registroForm.apellido,
            usuario: registroForm.usuario,
            correoElectronico: registroForm.correoElectronico,
            contrasena: registroForm.contrasena,
            confirmarContrasena: registroForm.confirmarContrasena,
        }

        //SE AGREGA NUEVO USUARIO AL ARREGLO users - CONEXION CON STACK
        addUsers(newUser)
        console.log("Usuario registrado:", newUser);
        Alert.alert('Registro', 'Usuario registrado con éxito')


        //SI TODO SE SE CUMPLE REDIRRECCIONA AL LOGIN
        navigation.dispatch(CommonActions.navigate({ name: "loginScreen" }))
    };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ImageBackground
                source={require('../img/0004-fondoRegistro.jpg')}
                style={styles.imagenFondo}
                imageStyle={{ opacity: 0.3 }}
            >

                <View style={styles.contenedorFormulario}>

                    <Text style={styles.textoSuperior}>Llene todos los campos a continuación</Text>

                    <InputRegistro
                        textoLabel="Ingrese su nombre"
                        placeholder="Nombre"
                        KeyBoardType="default"
                        handledChange={handleChange}
                        name='nombre'
                    />
                    <InputRegistro
                        textoLabel="Ingrese su apellido"
                        placeholder="Apellido"
                        KeyBoardType="default"
                        handledChange={handleChange}
                        name='apellido'
                    />
                    <InputRegistro
                        textoLabel="Ingrese su usuario"
                        placeholder="Usuario"
                        KeyBoardType="default"
                        handledChange={handleChange}
                        name='usuario'
                    />
                    <InputRegistro
                        textoLabel="Ingrese su correo electrónico"
                        placeholder="Correo electrónico"
                        KeyBoardType="email-address"
                        handledChange={handleChange}
                        name='correoElectronico'
                    />
                    <View>
                        <InputRegistro
                            textoLabel="Ingrese su contraseña"
                            placeholder="Contraseña"
                            KeyBoardType="default"
                            handledChange={handleChange}
                            name='contrasena'
                            isPassword={hiddenPassword}
                        />
                        <Icon
                            name={hiddenPassword ? "visibility-off" : "visibility"}
                            size={20}
                            onPress={() => sethiddenPassword(!hiddenPassword)}
                            style={styles.iconoPasswordRegistro}
                        />
                    </View>

                    <View>
                        <InputRegistro
                            textoLabel="Reingrese la contraseña"
                            placeholder="Confirmar contraseña"
                            KeyBoardType="default"
                            handledChange={handleChange}
                            name='confirmarContrasena'
                            isPassword={hiddenConfirmarPassword}
                        />
                        <Icon
                            name={hiddenConfirmarPassword ? "visibility-off" : "visibility"}
                            size={20}
                            onPress={() => sethiddenConfirmarPassword(!hiddenConfirmarPassword)}
                            style={styles.iconoPasswordRegistro}
                        />
                    </View>


                </View>

                <View style={styles.contenedorFormulario}>
                    <TouchableOpacity
                        style={styles.btnRegistrar}
                        onPress={handleRegistro}>
                        <Text style={styles.textoBtnRegistrar}
                        >Registrarse</Text>
                    </TouchableOpacity>
                </View>




                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.dispatch(CommonActions.navigate({ name: "loginScreen" }))}>

                    <Text style={styles.textoLogin}>¿Ya tienes una cuenta? <Text style={styles.enlaceLogin}>Iniciar Sesión</Text></Text>
                </TouchableOpacity>

            </ImageBackground>

        </SafeAreaView>

    );
};
