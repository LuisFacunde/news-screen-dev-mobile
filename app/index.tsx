import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const [isDark, setIsDark] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? "#020817" : "#f0f9ff" }}>
            <View style={styles.buttonScreenNews}>
                <Button title="Página de Atualizações" onPress={() => { }} />
            </View>
            <View style={styles.buttonScreenProfile}>
                <Button title="Página de Perfil" onPress={() => { }} />
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
    buttonScreenProfile: {
        fontSize: 16,
        fontWeight: "600",
        margin: 5
    },
    buttonScreenNews: {
        fontSize: 16,
        fontWeight: "600",
        margin: 5
    },
}); 