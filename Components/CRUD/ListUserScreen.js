import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import {ScrollView} from 'react-native-gesture-handler'

import firebase from "../../firebase/firebase_config";

const ListUserScreen  = (props) => {

    const [users, setUsers] = useState([])
    
    useEffect(
        ()=>{
            firebase.db.collection('alunos').onSnapshot(
                (queryOnSnapshot)=>{
                    const users = []
                    queryOnSnapshot.docs.forEach(
                        (doc)=>{
                            const {nome, sobrenome, curso, ira} = doc.data()
                            users.push({id:doc.id, nome, sobrenome, curso, ira})
                        }
                    )
                    setUsers(users);
                } 
            ) // onSnapshot
        }, // interna do useEffect
        []
    )
    useEffect(
        ()=>{
            firebase.db.collection('alunos').onSnapshot(
                (queryOnSnapshot)=>{
                       const users = []
                       queryOnSnapshot.docs.forEach(
                           (doc) => {
                               const {nome, sobrenome, curso, ira} = doc.data()
                               users.push({id:doc.id, nome, sobrenome, curso, ira})
                           }
                       ) 
                       setUsers(users)
                }
            )
        }
        ,
        []
    )


    return(
       <ScrollView>
            

           {
                users.map(
                    (user)=>{
                        
                        return (
                            <ListItem key= {user.id}
                                      bottomDivider
                                      onPress={
                                          ()=>{
                                              props.navigation.navigate('EditUserScreen', {userId:user.id})
                                          }
                                      }
                                      >

                                    {/* <ListItem.Chevron/> */}
                                <Avatar
                                    source={{
                                        uri: 'https://i.pinimg.com/564x/ae/ff/d6/aeffd6d2e76161d3d7b89cffca8662c1.jpg'
                                        
                                    }} rounded />

                                <ListItem.Content>
                                    <ListItem.Title> {user.nome} {user.sobrenome}</ListItem.Title>
                                    <ListItem.Subtitle> {user.curso}-{user.ira} </ListItem.Subtitle>
                                </ListItem.Content>


                            </ListItem>
                        )
                    }
                )
           }

            <View style={Styles.container}>
                    <Button style={Styles.Button}
                        onPress={
                            ()=>props.navigation.navigate('AddUserScreen')
                        }
                        title='+'
                    />
            </View>

       </ScrollView>
    )
}


const Styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        alignItems: "flex-end"
        

    },

    Button: {
        backgroundColor: '#1976d2',
        width: 50,
        height: 50,
        fontSize: 70,
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 45,
        marginRight: 20
    },
    textInput: {
        flex: 1,
        padding: 0,
        top:0,
        marginBottom: 45,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})


export default ListUserScreen;