import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Suuny",
        subtitle: "Go outside",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Be careful!",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Clounds",
        subtitle: "I know, Fucking boring",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a snowman",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay",
        icon: 'weather-hail'
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Fuck",
        icon: 'weather-night'
    },
    Mist: {
        colors:["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "Mist, Drive safety",
        icon: 'weather-fog'
    }



}

// export default class Weather extends Component{
//     render(){
//         return (
//         <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//             <View style={styles.upper}>
//                 <Ionicons color="white" size={144} name="ios-rainy" />
//                 <Text style={styles.temp}>Temp Here!</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}>Raining like a MF</Text>
//                 <Text style={styles.subtitle}>For more info look outside</Text>
//             </View>
//         </LinearGradient>
//         );
//     }
// }

function Weather({ weatherName, temp }) {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        marginTop:70
    },
    temp: {
        fontSize: 80,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
        marginLeft: 30
    },
    title: {
        fontSize: 80,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 40,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 80
    }
})