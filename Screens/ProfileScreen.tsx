import {
   Button,
   StyleSheet,
   Text,
   TextInput,
   View,
   Image,
   Pressable,
} from "react-native";
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
      <SafeAreaView
         style={{ flex: 1, backgroundColor: isDark ? "#020817" : "#f0f9ff" }}
      >
         {/* Header */}
         <View
            style={[
               styles.header,
               {
                  backgroundColor: backgroundColorHeader,
                  borderBottomColor: borderColorHeader,
               },
            ]}
         >
            <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
               Tela de Perfil
            </Text>
            <ThemeSwitch isDark={isDark} onToggle={setIsDark} />
         </View>

         {/* Foto e Input */}
         <View
            style={[
               styles.content,
               { backgroundColor: isDark ? "#020817" : "#f0f9ff" },
            ]}
         >
            <Image
               source={require("@/assets/images/foto-perfil-gemini.png")}
               style={styles.image}
            />
            <Text
               style={[styles.label, { color: isDark ? "#fff" : "#1e293b" }]}
            >
               Nome Completo
            </Text>
            <TextInput
               style={[styles.input, { color: isDark ? "#f1f5f9" : "#0f172a" }]}
               placeholder="Digite seu nome"
               placeholderTextColor={isDark ? "#475569" : "#94a3b8"}
            />
            <Pressable
               style={[
                  styles.buttonContent,
                  { backgroundColor: isDark ? "#38b000" : "#008000" },
               ]}
               onPress={() => alert("Perfil salvo!")}
            >
               <Text style={styles.buttonText}>Salvar Perfil</Text>
            </Pressable>
         </View>

         {/* Footer */}
         <View
            style={[
               styles.footer,
               {
                  borderTopColor: isDark ? "#1e293b" : "#E2E8F0",
                  backgroundColor: isDark ? "#0f172a" : "#ffffff",
               },
            ]}
         >
            <Text
               style={[
                  styles.footerText,
                  { color: isDark ? "#38b000" : "#008000" },
               ]}
            >
               Atualização concluída!
            </Text>
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
   },
   footerText: {
      fontSize: 16,
      fontWeight: "600",
   },
   footerButton: {
      marginTop: 16,
      width: "100%",
   },
   content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
      gap: 0,
   },
   label: {
      fontSize: 14,
      fontWeight: "600",
      alignSelf: "flex-start",
      marginBottom: 6,
   },
   input: {
      height: 54,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 16,
      alignSelf: "stretch",
      marginBottom: 32,
   },
   image: {
      width: 150,
      height: 150,
      resizeMode: "cover",
      borderRadius: 75,
      borderWidth: 3,
      borderColor: "#669bbc",
      marginBottom: 56,
   },
   buttonContent: {
      paddingVertical: 10,
      borderRadius: 14,
      alignSelf: "stretch",
   },
   buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
      padding: 5,
   },
});
