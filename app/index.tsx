import { Button, StyleSheet, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();
    const [isDark, setIsDark] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? "#020817" : "#f0f9ff" }}>
            <View style={styles.buttonScreen}>
                <Button title="Página de Atualizações" onPress={() => router.push("/news")} />
            </View>
            <View style={styles.buttonScreen}>
                <Button title="Página de Perfil" onPress={() => router.push("/profile")} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderTopWidth: 1,
    },
    buttonScreen: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        fontWeight: "600",
        margin: 5,
    },
}); 