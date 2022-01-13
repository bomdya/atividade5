import React, {Component} from "react";
import {View, Text, Button} from 'react-native';


export default class About extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold',  fontSize:30, fontWeight:"bold", color: "#039dfc", marginTop:-50}}>O que é o ClassMon?</Text>
                <Text style={{padding:25, fontSize:18, textAlign: 'center'}}>Esta é uma plataforma feita para alunos, onde é possivel verificar seus dados cadastrais como nome, sobrenome, curso e IRA. </Text>

                <View style={{margin:10, width:160}}>
                 <Button title = 'Ok' 
                    onPress={()=>this.props.navigation.navigate('Home')}/>   
                </View>
                
            </View>
        )
    }
}