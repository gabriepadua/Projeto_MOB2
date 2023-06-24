import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { useAuth } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native/types";


export default function Routes(){
    const {logado, loading} = useAuth;
    if(loading){
        return(
            <View style={{flex: 1, alignItems: 'center'}}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
    
    return( 
       logado == true ? <AppRoutes/> : <AuthRoutes/>
    );
}