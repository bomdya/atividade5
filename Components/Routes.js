import NavegadorApp from "./Home";
import About from "./About";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IMCApp from "./IMC";
import Cadastro from "./Cadastro";
import PerfilModal from "./Perfil";
import EditUserScreen from "./CRUD/EditUserScreen";
import { NavigationContainer } from "@react-navigation/native";
import AddUserScreen from "./CRUD/AddUserScreen";
import ListUserScreen from "./CRUD/ListUserScreen";

const MainStack = createStackNavigator()

function MainStackScreens () {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName='NavegadorApp'>
                    
                    <MainStack.Screen
                        name='NavegadorApp'
                        component={NavegadorApp}
                        options={{title: 'Home'}}/>
                    
                    <MainStack.Screen
                        name='AddUserScreen'
                        component={AddUserScreen}
                        options={{title: 'Add New User'}}/>
                    
                    <MainStack.Screen
                        name='ListUserScreen'
                        component={ListUserScreen}
                        options={{title: 'List Users'}}/>
                    
                    <MainStack.Screen
                        name='EditUserScreen'
                        component={EditUserScreen}
                        options={{title: 'Edit User'}}/>
                
            </MainStack.Navigator>
            
        </NavigationContainer>
    )
}

// const Routes = createAppContainer(
//     createStackNavigator({
//         Home: NavegadorApp,
//         About: About,
//         IMC: IMCApp,
//         Cadastro: Cadastro,
//         Perfil: PerfilModal
        
//     },
//         { 
//             initialRouteName: 'Home'
//         }
        
//     )
// );


export default Routes;