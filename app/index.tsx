import { Button, StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();
    const [isDark, setIsDark] = useState(false);
    const iconColor = isDark ? "#bfdbfe" : "#2563eb";

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? "#0f172a" : "#f8fafc" }]}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: isDark ? "#1e293b" : "#fff" }]}>
                {/* Título */}
                <View>
                    <Text style={[styles.title, { color: isDark ? "#f1f5f9" : "#0f172a" }]}>
                        App Notícias
                    </Text>
                    <Text style={[styles.subtitle, { color: isDark ? "#cbd5e1" : "#64748b" }]}>
                        Fique sempre atualizado
                    </Text>
                </View>

                {/* Switch  */}
                <Pressable 
                    onPress={() => setIsDark(!isDark)} 
                    style={[styles.themeToggle, { backgroundColor: isDark ? "#334155" : "#e2e8f0" }]}
                >
                    <MaterialIcons name={isDark ? "light-mode" : "dark-mode"} size={40} color={iconColor} />
                </Pressable>
            </View>

            {/* Conteúdo */}
            <View style={styles.content}>

                {/* Página de Atualizações */}
                <Pressable
                    onPress={() => router.push("/news")}
                    style={({ pressed }) => [
                        styles.card,
                        { backgroundColor: isDark ? "#1e1b4b" : "#eef2ff" },
                        pressed && styles.cardPressed,
                    ]}
                >
                    <View style={[styles.cardIcon, { backgroundColor: isDark ? "#3b82f6" : "#6366f1" }]}>
                        <MaterialIcons name="article" size={40} color="#ffffff" />
                    </View>
                    <Text style={[styles.cardTitle, { color: isDark ? "#f1f5f9" : "#0f172a" }]}>
                        Atualizações
                    </Text>
                    <Text style={[styles.cardDescription, { color: isDark ? "#cbd5e1" : "#64748b" }]}>
                        Veja as últimas notícias e atualizações
                    </Text>
                </Pressable>

                {/* página de perfil */}
                <Pressable
                    onPress={() => router.push("/profile")}
                    style={({ pressed }) => [
                        styles.card,
                        { backgroundColor: isDark ? "#2d1b4e" : "#fde2e4" },
                        pressed && styles.cardPressed,
                    ]}
                >
                    <View style={[styles.cardIcon, { backgroundColor: isDark ? "#d946ef" : "#ec4899" }]}>
                        <MaterialIcons name="person" size={40} color="#ffffff" />
                    </View>
                    <Text style={[styles.cardTitle, { color: isDark ? "#f1f5f9" : "#0f172a" }]}>
                        Seu Perfil
                    </Text>
                    <Text style={[styles.cardDescription, { color: isDark ? "#cbd5e1" : "#64748b" }]}>
                        Gerencie suas informações pessoais
                    </Text>
                </Pressable>
            </View>

            {/* Footer */}
            <View style={[styles.footer, { backgroundColor: isDark ? "#1e293b" : "#fff", borderTopColor: isDark ? "#334155" : "#e2e8f0" }]}>
                <Text style={[styles.footerText, { color: isDark ? "#94a3b8" : "#64748b" }]}>
                    v1.0.0 • 2026
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.05)",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        letterSpacing: 0.3,
    },
    subtitle: {
        fontSize: 14,
        marginTop: 4,
        fontWeight: "500",
    },
    themeToggle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    themeIcon: {
        fontSize: 22,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 24,
        justifyContent: "center",
        gap: 20,
    },
    card: {
        paddingVertical: 24,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    cardPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
    cardIcon: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    icon: {
        fontSize: 32,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 8,
        textAlign: "center",
    },
    cardDescription: {
        fontSize: 13,
        fontWeight: "500",
        textAlign: "center",
        lineHeight: 20,
    },
    footer: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: "center",
        borderTopWidth: 1,
    },
    footerText: {
        fontSize: 12,
        fontWeight: "500",
    },
    buttonScreen: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}); 