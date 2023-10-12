import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: Colors.textColor,
        padding: 24,
        borderRadius: 10,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        fontFamily: "open-sans-bold",
        color: Colors.textColor,
        fontSize: 36,
        // fontWeight: "bold",
    }
})