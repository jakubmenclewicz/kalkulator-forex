# 💹 FOREX CALCULATOR - Instrukcja Instalacji

## 📥 Krok 1: Pobierz pliki

Pobierz wszystkie 3 pliki:
- `server.js`
- `package.json`
- `index.ejs`

## 📂 Krok 2: Stwórz strukturę folderów

Stwórz nowy folder dla projektu i umieść pliki w odpowiednich miejscach:

```
forex-calculator/
├── server.js           (pobierz i umieść tutaj)
├── package.json        (pobierz i umieść tutaj)
└── views/
    └── index.ejs       (stwórz folder "views" i umieść tutaj)
```

## 🛠️ Krok 3: Instalacja

Otwórz terminal/cmd w folderze `forex-calculator` i wykonaj:

```bash
npm install
```

To zainstaluje wszystkie potrzebne zależności (express i ejs).

## 🚀 Krok 4: Uruchomienie

W tym samym terminalu wpisz:

```bash
node server.js
```

Zobaczysz komunikat:
```
🚀 Forex Calculator App uruchomiona na http://localhost:3000
```

## 🌐 Krok 5: Otwórz w przeglądarce

Otwórz przeglądarkę i wejdź na adres:
```
http://localhost:3000
```

## ✅ Gotowe!

Teraz masz dostęp do 10 kalkulatorów:
1. 📊 Wielkość Pozycji
2. 🎯 Stop Loss & Take Profit
3. 💰 Zysk/Strata
4. 📈 Wartość Pipsa
5. 💳 Margin
6. 🌀 Fibonacci
7. ⚡ Pivot Points
8. ⚖️ Risk/Reward
9. 🔧 Dźwignia
10. 📊 Procent Składany

## ⚠️ Wymagania

- Node.js (wersja 14 lub nowsza)
- npm (instaluje się razem z Node.js)

## 🔧 Jeśli nie masz Node.js

1. Wejdź na: https://nodejs.org/
2. Pobierz LTS version
3. Zainstaluj
4. Restart komputera
5. Wróć do Kroku 3

## 💡 Dodatkowe Komendy

**Zatrzymanie aplikacji:**
- Naciśnij `Ctrl + C` w terminalu

**Uruchomienie z auto-reload (opcjonalne):**
```bash
npm install -g nodemon
nodemon server.js
```

---

**Powodzenia w tradingu! 📈**
