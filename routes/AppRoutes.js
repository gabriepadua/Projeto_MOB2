
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../components/pages/moviesPage/index.js';
import MovieDetailsPage from '../components/pages/moviesDetailsPage';

const Stack = createNativeStackNavigator();



export default function AppRoutes (){
    return(
          <Stack.Navigator>
             <Stack.Screen name='MoviesPage' component={MoviesPage} options={{ headerShown: false}} />
             <Stack.Screen name='MovieDetailsPage' component={MovieDetailsPage} options={{ headerShown: false}} />
          </Stack.Navigator>
    );
}


