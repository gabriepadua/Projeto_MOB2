import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container:{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        padding: 8,
        margin: 1
    },
    viewimg:{
        width: '18%',
        height: 150,
        padding: 8

    },
    image:{
        width:'100%',
        height:'115%',
        borderRadius:  15
        
    },
    viewdata:{
        width: '65%',
        height: '100%',
        backgroundColor: 'white',
        pading: 12,
        borderRadius: 18,
        marginBottom: 2
    
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 7
    },
    descricao:{
        fontSize: 18,
        color: 'black',
        marginBottom: 3
    },
     btn:{
       width:'50%',
       padding: 10,
       borderRadius: 20,
       marginBottom: 2
       
     },    
});