import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"
export default function AccountScreen(props) {

    return (
        <View style={styles.container}>
            <Text>
                AccountScreen
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8D4D0'
    },
})