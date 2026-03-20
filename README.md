# Desenvolvimento Mobile - 2026.1

Repositório para a disciplina utilizando React Native e Expo, escrito em TypeScript.

## Sobre

Aplicativo mobile multiplataforma (iOS, Android e Web) desenvolvido com **React Native** e **Expo SDK 54** no contexto da disciplina de Desenvolvimento Mobile 2026/1.

Este é um aplicativo que exibe uma lista de itens de notícias, com suporte a temas claro e escuro. O usuário pode alternar entre os temas usando o interruptor no cabeçalho.

- **Linguagem:** TypeScript 5.9 (strict mode)
- **Framework:** React Native 0.81.5 + Expo ~54.0.33
- **Roteamento:** expo-router v6 (file-based routing)
- **Navegação:** @react-navigation/bottom-tabs
- **New Architecture:** Habilitada (Fabric + TurboModules)
- **Deep linking scheme:** `dm20261ts`

## Funcionalidades

- Exibição de lista de notícias em uma FlatList
- Suporte a temas claro e escuro
- Interface responsiva e acessível
- Navegação baseada em arquivo com expo-router
- Ícones personalizados para cada notícia

## Pré-requisitos

- Node.js >= 18
- npm (gerenciador de pacotes — não usar yarn ou pnpm)
- Expo Go no dispositivo físico ou simulador iOS/Android configurado

## Instalação

```bash
npm install
```

## Executando o projeto

```bash
# Inicia o Metro bundler (menu interativo)
npm start

# Abre diretamente em uma plataforma específica
npm run android
npm run ios
npm run web

# Verifica erros de linting
npm run lint

# Type-check sem emitir arquivos
npx tsc --noEmit
```

Após iniciar, escaneie o QR code com o **Expo Go** (Android/iOS) ou pressione `i` / `a` no terminal para abrir no simulador.

## Estrutura do projeto

```
app/                  # Telas/páginas (roteamento baseado em arquivo expo-router)
  (tabs)/             # Grupo de navegação por abas
  _layout.tsx         # Layout raiz
components/           # Componentes de UI reutilizáveis (exportações nomeadas)
  ui/                 # Componentes de UI de nível inferior/primitivos
constants/            # Configurações e constantes de tema
hooks/                # Hooks customizados do React (um hook por arquivo)
assets/images/        # Ativos de imagem estáticos
data/                 # Dados estáticos ou tipos de dados
scripts/              # Scripts utilitários (JS)
```

## Tecnologias Utilizadas

- **React Native 0.81.5**: Framework para desenvolvimento mobile
- **Expo SDK 54**: Plataforma para React Native
- **TypeScript 5.9**: Linguagem com tipagem estática
- **expo-router v6**: Roteamento baseado em arquivo
- **@react-navigation/bottom-tabs**: Navegação por abas
- **@expo/vector-icons**: Ícones do Material Icons
- **react-native-safe-area-context**: Gerenciamento de áreas seguras

## Testes

Nenhuma estrutura de teste está configurada atualmente. Não há arquivos de teste, executores de teste ou dependências de teste. Se testes forem adicionados no futuro, atualize esta seção com os comandos relevantes (ex.: `npm test`).

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é para fins educacionais e não possui licença específica.