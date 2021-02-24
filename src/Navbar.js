import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import {THEME} from './theme'
import AppTextBold from './ui/AppTextBold'

export const Navbar = props => {
    return(
        <View style={styles.navbar}>
            <AppTextBold style={styles.text}>Todo List</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
     navbar:{
         height : 70,
         alignItems:'center',
         justifyContent:'flex-end',
         backgroundColor:THEME.MAIN_COLOR,
         
     },
     text:{
         color:'white',
         fontSize:20
     }
})
