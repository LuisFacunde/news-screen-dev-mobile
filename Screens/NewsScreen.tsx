import { Header } from "@/components/Header";
import { NewsCard } from "@/components/NewsCard";
import { NEWS_ITEM } from "@/data/NewsItem";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function NewsScreen() {
   const router = useRouter();
   const [isDark, setIsDark] = useState(false);

   return (
      <SafeAreaView
         style={{ flex: 1, backgroundColor: isDark ? "#020817" : "#f0f9ff" }}
      >
         {/* Header */}
         <Header isDark={isDark} onToggleTheme={setIsDark} />

         {/* Notícias */}
         <View style={{ flex: 1 }}>
            <FlatList
               data={NEWS_ITEM}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({ item }) => (
                  <NewsCard isDark={isDark} news={item} />
               )}
               contentContainerStyle={{ paddingBottom: 16 }}
            />
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
                  { color: isDark ? "#80ed99" : "#008000" },
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
      width: "100%",
   },
});
