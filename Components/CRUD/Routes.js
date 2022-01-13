import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListUserScreen from "./ListUserScreen";
import EditUserScreen from "./EditUserScreen";
import AddUserScreen from "./AddUserScreen";
import navegadorApp from "../Home";
import About from "../About";



const MainStack = createStackNavigator()

function MainStackScreens() {
    return(
        <NavigationContainer>
            <MainStack.Navigator>
               
                <MainStack.Screen
                    name='Home'
                    component ={navegadorApp}
                    options={{title:'ClassMon'}}
                />
                
                <MainStack.Screen
                    name='AddUserScreen'
                    component ={AddUserScreen}
                    options={{title:'Adicionar novo aluno'}}
                />
                <MainStack.Screen
                    name='EditUserScreen'
                    component ={EditUserScreen}
                    options={{title:'Editar dados'}}
               />
                <MainStack.Screen
                    name='ListUserScreen'
                    component ={ListUserScreen}
                    options={{title:'Listar alunos'}}
                />
                
                <MainStack.Screen
                    name='About'
                    component ={About}
                    options={{title:'Sobre'}}
                />

            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackScreens 