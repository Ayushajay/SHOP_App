import React from 'react';
import {
    StyleSheet, View, Text, Image, Button, TouchableOpacity,
    TouchableNativeFeedback, Platform
} from 'react-native';

import colors from '../../constants/color';


const ProductItem = props => {
    const TouchableComp = TouchableOpacity;
    if (Platform.OS === 'android') {
        TouchableComp = TouchableNativeFeedback;
    }

    return (
        <View >
            <View style={styles.touchable}>
                <TouchableComp onPress={props.onViewDetail} useForeground>
                    <View style={styles.product}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.images }} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button color={colors.primary} title="View Details" onPress={props.onViewDetail} />
                            <Button color={colors.primary} title="To Cart" onPress={props.onAddToCart} />
                        </View>
                    </View>
                </TouchableComp>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        // fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        // fontFamily: 'open-sans-bold',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 10
    }
});

export default ProductItem;