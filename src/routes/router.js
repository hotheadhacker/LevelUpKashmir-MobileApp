import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import NewsItem from '../screens/newsItem';
import MyWeb from '../screens/webView';

const screens = {
  'Level Up Kashmir': {
    screen: Home,
  },
  Details: {
    screen: NewsItem,
  },
  Browser: {
    screen: MyWeb,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
