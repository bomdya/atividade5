import React, { Component } from "react";
import {View, Text, Button } from 'react-native';
import AddUserScreen from "./CRUD/AddUserScreen";
import ListUserScreen from "./CRUD/ListUserScreen";


export default class navegadorApp extends Component {
    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                
                <Text style={{fontWeight:'bold', fontSize:25, color: "#039dfc", marginTop: -130}}> Perfil do aluno </Text>
                <Text style={{fontSize:16}}> Escolha uma ação </Text>

                    <View style={{marginTop:100, marginBottom:10, width:200}}>
                            <Button title = 'Lista de Alunos' 
                                onPress={()=>this.props.navigation.navigate('ListUserScreen')}/>
                    </View>

                    <View style={{margin:10, marginBottom:10, width:200}}>
                        <Button title = 'Cadastro de aluno' 
                            onPress={()=>this.props.navigation.navigate('AddUserScreen')}/>
                    </View>


                    <View style={{margin:10, width:200}}>
                            <Button title = 'Sobre' 
                                onPress={()=>this.props.navigation.navigate('About')}/>    
                    </View>
                
            
            </View>
        )
    }
}