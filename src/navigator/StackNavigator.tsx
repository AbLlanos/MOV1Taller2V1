import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistroScreen } from '../screens/RegistroScreen';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { ProductosScreen } from '../screens/ProductosScreen';
import { styles } from '../themes/appThemes';



//VARIABLES QUE SE HEREDAN Y REVISAN EN LOGIN Y REGISTROS, SE DEBE EXPORTAR
export interface User {
    id: number,
    nombre: string;
    apellido: string;
    usuario: string;
    correoElectronico: string;
    contrasena: string;
    confirmarContrasena: string;
}


//USUARIOS FIJOS Y QEU NO ELIMINAN AA RECARGAR LA PAGINA
const users: User[] = [
    {
        id: 1,
        nombre: "Daniel",
        apellido: "Solis",
        usuario: "1",
        correoElectronico: "1@gmail.com",
        contrasena: "1",
        confirmarContrasena: "1",
    },
    {
        id: 2,
        nombre: "Sofia",
        apellido: "García",
        usuario: "sog",
        correoElectronico: "sog11@gmail.com",
        contrasena: "23456",
        confirmarContrasena: "23456",
    }
]

//CREAR VARIABLE PARA NAVEGAR ENTRE SCREENS
const Stack = createStackNavigator();

export const StackNavigator = () => {

    //CONTROLA LOS USUARIOS REGISTRADOS
    const [userManager, setUserManager] = useState<User[]>(users)


    //FUNCION PARA AÑADIR USUARIOS
    const addUsers = (user: User): void => {
        setUserManager([...userManager, user])
    }

    return (
        <Stack.Navigator
            initialRouteName='loginScreen'
            screenOptions={{
                headerStyle: {
                    elevation: 10
                },
                headerShown: true,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}>
            <Stack.Screen name="loginScreen"
                options={{
                    title: 'Iniciar sesión',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center",
                }}
                //PERMITE HEREDAR LOS DATOS CON LA SCREEN
                children={() => <LoginScreen users={userManager} />} />
            <Stack.Screen name="registroScreen"
                options={{
                    title: 'Registro',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center",
                }}
                //PERMITE HEREDAR LOS DATOS CON LA SCREEN Y LA FUCION DE AÑADIR
                children={() => <RegistroScreen users={userManager} addUsers={addUsers} />} />

            <Stack.Screen name="productosScreen"
                options={{
                    title: 'Productos',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center",
                }}
                component={ProductosScreen} />
        </Stack.Navigator>
    );
}
