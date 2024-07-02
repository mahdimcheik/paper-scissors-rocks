# Getting Started

Cette application est conçue en utilisant Node.js version 21 et Express.js pour la partie back-end, et Angular 17 pour la partie front-end. MySQL est utilisé pour stocker les données dans la base de données. La librairie PrimeNG est utilisée pour le style.

## Installation

### Pré-requis

- Angular 17
- Node.js 18
- MySQL

### Étapes d'installation

1. Clonez le dépôt et accédez au répertoire :

   ```
   git clone git@github.com:mahdimcheik/paper-scissors-rocks.git
   ```

   ```
   cd paper-scissors-rocks
   ```

2. Installez les dépendances :

   ```bash
   npm i
   ```

   Puis

   ```bash
   npm run inst
   ```

   Cette commande installera toutes les dépendances côté front-end et back-end.

3. Configurez la base de données :

   - Créez un fichier `.env` à la racine du dépôt du back-end (paper-scissors-rocks-express). Ce fichier doit contenir les informations nécessaires à la connexion avec la base de données :

   ```env
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_USER=votreUsername
   DB_PASSWORD=votreMDP
   DB_NAME=NomBaseDD
   ```

4. Créez la base de données en utilisant la commande suivante :

   ```bash
   npm run db
   ```

   Cette commande va créer une base de données avec une seule table pour les utilisateurs.

## Lancement

Pour lancer l'application, exécutez la commande suivante :

    ```bash
    npm run dev
    ```

# Utilisation

## Inscription et connexion

Pour utiliser cette application :

1. Il faut d'abord créer un compte.
2. Se connecter.

Une fois connecté, vous serez redirigé vers la page principale de jeu.

## Jouer

On commence par choisir l'option qu'on veut :

- Paper
- Rock
- Scissors

En cliquant sur l'une des images correspondantes, la partie se déclenche automatiquement et votre score sera ajusté en fonction du résultat. La partie se termine après 5 coups.

## Déconnexion

En cours, mais il suffit de rafraîchir la page pour retenter votre chance de casser votre record. Vous serez immédiatement redirigé vers la page d'inscription.

# Ranking

La page ranking est dédiée aux résultats des meilleurs joueurs. Ils sont classés par ordre croissant.

# Bugs and Issues

1. L'application se réinitialise si on rafraîchit la page.
2. La déconnexion ne fonctionne pas.
