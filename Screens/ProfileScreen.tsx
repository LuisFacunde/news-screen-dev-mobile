import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function ProfileScreen() {
    const router = useRouter();
    const [isDark, setIsDark] = useState(false);
    const backgroundColorHeader = isDark ? "#0f172a" : "#ffffff";
    const borderColorHeader = isDark ? "#1e293b" : "#E2E8F0";

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? "#020817" : "#f0f9ff" }}>
            
            {/* Header */}
            <View style={[styles.header, { backgroundColor: backgroundColorHeader, borderBottomColor: borderColorHeader }]}>
                <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>Tela de Perfil</Text>
                <ThemeSwitch isDark={isDark} onToggle={setIsDark}/>
            </View>

            <View>
                <Text> CONTEÚDO </Text>
            </View>

            {/* Footer */}
            <View style={[styles.footer, { borderTopColor: isDark ? "#1e293b" : "#E2E8F0", backgroundColor: isDark ? "#0f172a" : "#ffffff" }]}>
                <Text style={[styles.footerText, { color: isDark ? "#80ed99" : "#008000" }]}>Atualização concluída!</Text>
                <View style={styles.footerButton}>
                    <Button title="Voltar" onPress={() => router.back()} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
    },
    title: {
        flex: 1,
        fontSize: 15,
        fontWeight: "600",
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderTopWidth: 1,
    },
    footerText: {
        fontSize: 16,
        fontWeight: "600",
    },
    footerButton: {
        marginTop: 16,
        width: "110%",
    },
});
