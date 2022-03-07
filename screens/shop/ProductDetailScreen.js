import REACT from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';

import colors from '../../constants/color'

const ProductDetailsScreen = props => {

    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => state.products.avaliableProducts.find(
        prod => prod.id === productId
    ));
    // props.navigation.setParam('');

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.action}>
                <Button color={colors.primary} title="Add To Cart" onPress={() => { console.log("Add to CArt") }} />
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );

};

ProductDetailsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    },
    price: {
        fontFamily: 'open-sans-bold',
        // frontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    },
    action: {
        marginVertical: 10,
        alignItems: 'center'
    }
});

export default ProductDetailsScreen;