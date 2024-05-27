import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
const images: string[] = [
    "https://marketplace.canva.com/EAFBe-_WG8k/1/0/1600w/canva-gold-minimalist-fashion-stylist-service-medium-banner-9yTc9dnW3fE.jpg",
    "https://marketplace.canva.com/EAFD-b6yF6g/1/0/1600w/canva-brown-%26-cream-modern-woman-fashion-collection-promo-banner-Vbn2VoCIVnA.jpg",
    "https://marketplace.canva.com/EAEyB45JlPM/1/0/800w/canva-brown-minimalist-aesthetic-fashion-sale-discount-promotion-banner-IOtvrcJu450.jpg"
];

export const Slide = () => { 
    return (
        <Swiper style={styles.wrapper} autoplay autoplayTimeout={3}>
            {images.map((url, index) => {
            return <View key={index} style={styles.slide}>
                        <Image source={{ uri: url }} style={styles.image}/>
                   </View>
            })}
         </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    }
});