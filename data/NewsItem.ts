import { MaterialIcons } from '@expo/vector-icons';

export type NewsItem = {
    id: number;
    title: string;
    date: string;
    time: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const NEWS_ITEM: NewsItem[] = [
    {
        id: 1,
        title: "Expo SDK 54 é lançado com suporte ao React Compiler",
        date: "19/03/2026",
        time: "09:00",
        icon: "smartphone",
    },
    {
        id: 2,
        title: "React Native 0.81 traz melhorias significativas na Nova Arquitetura",
        date: "18/03/2026",
        time: "14:30",
        icon: "architecture",
    },
    {
        id: 3,
        title: "Novos recursos incríveis do TypeScript 5.9 que você precisa conhecer",
        date: "16/03/2026",
        time: "11:15",
        icon: "code",
    },
    {
        id: 4,
        title: "Como construir aplicativos mobile mais acessíveis e performáticos",
        date: "15/03/2026",
        time: "16:45",
        icon: "accessibility-new",
    },
    {
        id: 5,
        title: "Assistentes de IA estão transformando o desenvolvimento de software",
        date: "14/03/2026",
        time: "08:20",
        icon: "smart-toy",
    },
];
