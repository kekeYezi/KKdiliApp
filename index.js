import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScene from './src/Home'

const App = StackNavigator(
    {
        Home: {screen: HomeScene},
    }
)

AppRegistry.registerComponent('KKdiliApp', () => App);
