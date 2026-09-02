# Synthpedia

Synthpedia est une encyclopédie visuelle consacrée aux synthétiseurs et aux instruments électroniques.

Le projet rassemble **1 667 instruments** dans une grande frise chronologique. Chaque instrument possède sa propre fiche avec, selon les informations disponibles :

- son année de sortie ;
- son fabricant et sa catégorie ;
- une description et des caractéristiques techniques ;
- une photographie ;
- les sources et les crédits de l’image.

## Voir le site

Le prototype est accessible ici :

**[Ouvrir Synthpedia](https://synthpedia-timeline.pliskain.chatgpt.site)**

Le site est actuellement privé : il faut avoir l’autorisation pour y accéder.

## Utiliser la frise

Sur la page principale, on peut :

- parcourir les instruments année par année ;
- rechercher un modèle ou une marque ;
- filtrer par fabricant ou par catégorie ;
- afficher uniquement les instruments qui possèdent une image ;
- cliquer sur un instrument pour ouvrir sa fiche complète.

## État du projet

Le site est un premier prototype fonctionnel. La base contient déjà 1 667 entrées, dont plus de 600 avec une image recommandée. Les images proviennent notamment de sites officiels, d’archives spécialisées, de manuels, de magazines anciens et d’annonces de seconde main.

Les droits d’utilisation de chaque image devront être vérifiés avant une ouverture publique du site.

## Lancer le projet sur un ordinateur

Il faut installer [Node.js](https://nodejs.org/) version 22 ou plus récente.

```bash
git clone https://github.com/broduoliviercontact-web/Synthpedia.git
cd Synthpedia
npm install
npm run dev
```

Le terminal affiche ensuite l’adresse locale à ouvrir dans le navigateur.

## Où sont les données ?

La liste des instruments utilisée par le site se trouve dans :

```text
lib/synths.json
```

Les pages et l’apparence du site se trouvent principalement dans :

```text
app/
components/
```

## Suite envisagée

- continuer la recherche d’images manquantes ;
- vérifier les licences et les crédits ;
- améliorer la navigation sur téléphone ;
- ajouter davantage de filtres et de comparaisons ;
- ouvrir le site au public lorsque le contenu sera prêt.

---

Projet créé et développé par Olivier.
