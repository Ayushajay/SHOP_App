// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailsScreen from "../screens/shop/ProductDetailScreen";
import color from '../constants/color';

const ProductNavigation = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetails: ProductDetailsScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? color.primary : ''
            },
            headerTitle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTintColor: Platform.OS === 'android' ? 'black' : color.primary
        }
    }
);

export default createAppContainer(ProductNavigation);
