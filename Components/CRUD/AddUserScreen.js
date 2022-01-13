import React, {useState} from "react";
import {View, Text, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import firebase from '../../firebase/firebase_config'
import ListUserScreen from "./ListUserScreen";

const AddUserScreen  = (props) => {
    const initialState = {nome: '', sobrenome: '', curso: '', ira: ''}
    const [state, setState] = useState (initialState)
    
    const addNewUser = async () => {
        try{
            await firebase.db
                .collection('alunos')
                .add({
                    nome: state.nome,
                    sobrenome: state.sobrenome,
                    curso: state.curso,
                    ira: state.ira
            })
            props.navigation.navigate('ListUserScreen')
        }catch (error){
            console.log(error)
        }
    }


    const handleChangeText = (value, nome) => {
        setState({...state, [nome]:value})
    }

    return(
        <ScrollView style={Styles.container}>
          
          
           <View style={Styles.textInput}>
               <TextInput
                placeholder="Nome"
                value={state.nome}
                onChangeText={(value) => handleChangeText(value, 'nome')}/>
            </View>

            <View style={Styles.textInput}>
               <TextInput
                placeholder="Sobrenome"
                value={state.sobrenome}
                onChangeText={(value) => handleChangeText(value, 'sobrenome')}/>
            </View>

            <View style={Styles.textInput}>
               <TextInput
                placeholder="Curso"
                value={state.curso}
                onChangeText={(value) => handleChangeText(value, 'curso')}/>
            </View>

            <View style={Styles.textInput}>
               <TextInput
                placeholder="IRA"
                value={state.ira}
                onChangeText={(value) => handleChangeText(value, 'ira')}/>
            </View>


            <View>
                <Button title='Adicionar aluno' onPress={()=> addNewUser()}/>
            </View>


        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    textInput: {
        flex: 1,
        padding: 13,
        top:0,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default AddUserScreen;