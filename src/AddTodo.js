import React ,{useState} from 'react'
import {View,StyleSheet , TextInput, Button , Alert} from 'react-native'


export const AddTodo = ({onSubmit}) => {
    const [value,setValue] = useState('');


    const pressHandler = () =>{
        if(value.trim() ){
            onSubmit(value)
            setValue('')
        }
        else
       { 
           Alert.alert('Field is empty!!!')
       }
    }

    return(
        <View styles={styles.block}>
            <TextInput style={styles.input}
            onChangeText = {setValue}
            value={value}
            placeholder="Write what you will do"
            autoCorrect={false}
            autoCapitalize='none'
             />
            <Button title='Add' onPress={pressHandler} />
        </View>
    )
}


const styles = StyleSheet.create({
    block:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        marginBottom:10
    },
    input:{
        width:'95%',
        padding:10,
        margin:10,
        borderStyle:'solid',
        borderBottomWidth:2,
        borderBottomColor:'#3949ab',
    },
}) 