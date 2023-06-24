import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';
import RegisterPage from '../components/pages/RegisterPage';
import ForgotPasswordPage from '../components/pages/ForgotPasswordPage';


const Stack = createNativeStackNavigator()

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
           <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='RegisterPage' component={RegisterPage} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    );
}




