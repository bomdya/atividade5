import React,  { Component }  from "react";
import { View, Text} from 'react-native'
import Mensagem from "./Resultado";

const CalcIMC = (props) =>{   

    const imc = props.peso/(props.altura*props.altura)
    if(props.altura!=null && props.peso!=null)
    
    return(
        <View>
            <Text style={{fontWeight:"bold", fontSize:20, marginBottom:30}}> 
                Seu IMC é: {imc.toFixed(2)}
            </Text>

            
         <Text style={{fontWeight:"bold", fontSize:25}}>Condição </Text>
            <Mensagem IMC={imc}/>
        </View>
        
    )

return null
    
}
  

export default CalcIMC;