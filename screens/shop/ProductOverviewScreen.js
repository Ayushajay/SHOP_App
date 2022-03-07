import React from 'react'
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem'

const ProductOverviewScreen = (props) => {
    const products = useSelector(state => state.products.avaliableProducts)

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onViewDetail={() => {
                    props.navigation.navigate(
                        'ProductDetails', {
                        productId: itemData.item.id,
                        productTitle: itemData.item.title
                    });
                }}
                onAddToCart={() => { }}
            />}
        />
        // <Text>AYUSH AJAY</Text>

    );
};

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};



export default ProductOverviewScreen