import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../themes/appThemes';

//Definir la Interfaz
interface Props{
    title: string
}

export const TitleComponents = ({title}: Props) => {
    const {height}= useWindowDimensions();
  return (
    <Text style={{...styles.title,
        height: height *0.15 }}>{title}</Text>
  )
}
