import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes/index.js';
import { AuthProvider } from './context/AuthContext.js';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Routes />
      </AuthProvider>
       
    </NavigationContainer>
  );
}
