# Brief_Docker

Contexte:

Ce repo contient mes propres rendus de plusieurs exercices sur Docker et la conteneurisation.

---------------------------------------------------------------------------------------------

Pour commencer :

Chaque dossier contient un fichier texte nommé par le numéro de l'exercice et les fichiers de configuration (yaml, js, etc) nécessaire à la résolution de l'exercice en question. Le fichier texte liste les manipulations (commandes et GUI) pour effectuer l'exercice.

Vous trouverez à la racine de ce repo un fichier "livrable.odt" téléchargeable, il contient des screenshots et les manipulations pour l'ensemble des exercices.

Les énoncés des exercices se trouvent ci-après.

--------------------------------------------------------------------------------------------
Énoncés des exercices:

Exercice 1 - Shell interactif

Démarrer un conteneur en mode interactif avec l’image alpine en version 3.17.2. Le conteneur devra s’auto-détruire lorsque vous quitterez la session shell. Vérifier que vous êtes bien à l'intérieur d’une session shell du conteneur alpine en vous déplaçant dans l'arborescence puis vérifier que le conteneur disparaît en sortant du shell interactif.

​

Exercice 2 - Kit main libre

Démarrer un conteneur nginx depuis le hub docker en arrière plan. Le conteneur devra s’appeler “enjoy_nx” et doit pouvoir redémarrer de lui-même en cas d'échec. Il exposera son port 80 sur le port 5000 de votre machine. Vérifier que vous pouvez visiter la page web par défaut de nginx en vous rendant sur http://localhost:5000.

​

Exercice 3 - Logger

En reprenant, l'exercice précédent “Kit main libre”, attacher votre terminal au logs du conteneur nginx “enjoy_ginx”. Vérifier que lorsque vous visitez une nouvelle fois la page par défaut de nginx, des logs apparaissent dans la console.

​

Exercice 4 - Commit IT

Démarrer un conteneur alpine en interactif et installer le package nodejs. Avec la commande “docker commit”, sauvegarder l'état du conteneur dans une image nommée alpine-node en version 0.0.1. Redémarrer un nouveau conteneur avec l’image alpine-node:0.0.1 sauvegarde précédemment, TADAAAA vous avez une image nodejs sur alpine réutilisable ! Vérifier que le binaire node est bien présent que lorsque vous démarrer un conteneur en interactif avec l’image alpine-node:0.0.1. Lancer par exemple la commande “node --version”.

​

Exercice 5 - Persistance des données

Redémarrer le conteneur nginx vu dans l’exercice précédent “Kit main libre” en modifiant la page par défaut grâce à un volume docker. Pour modifier la page par défaut de nginx, vous devrez lier le dossier du conteneur “/usr/share/nginx/html” a un dossier sur votre machine à l'aide de volume (documentation nginx). Vérifier que la page par défaut de nginx a bien été modifiée en vous rendant à l'adresse http://localhost:8080.

​

Exercice 6 - Composition multiple

A l’aide d’un fichier docker compose, démarrer en arrière plan un container wordpress ET une base de données MYSQL. Le conteneur wordpress devra exposer son port 80 sur le port 8080 de votre machine et ses données doivent être persistantes. Le conteneur de base de données MYSQL doit lui aussi avoir des données persistantes. Vous devrez configurer les variables d’environnement du container wordpress et du conteneur MYSQL pour les faire communiquer entre eux. Vérifier que l’application wordpress est bien visitable sur http://localhost:8080 et que vous n’avez pas besoin de re-configurer wordpress au démarrage du conteneur.

​

Exercice 7 - Créer sa première image

Rédiger un fichier Dockerfile qui affichera la liste de processus en cours dans le conteneur. Vous utiliserez la commande “top -b”. Builder votre image sous le nom “top” en version “0.0.1”. Démarrer le conteneur a partir l’image top:0.0.1 et vérifier que le terminal s’attache au logs de celui-ci et affiche la liste des processus.

​

Exercice 8 - Je m’appelle “Dockerfile”

Rédiger un fichier Dockerfile qui génère une image pour afficher le nom et le prénom (sous la forme “nom.prenom” ) lorsque l’on démarre un conteneur. On passera au conteneur le nom et le prénom en variable d’environnement. Vérifier que lorsque vous démarrer un conteneur avec cette image et les variables d’environnement prénom et nom, vous obtenez bien dans la console “nom.prenom” Exemple avec les variables d'environnement nom=dujardin et prenom=jean, on obtient “jean.dujardin”

​

Exercice 9 - ARGS vs ENV

Rédiger un fichier Dockerfile pour créer une image nodejs dont la version sera configurable lors de la phase de build uniquement. Vous utiliserez l'instruction “ARGS” du Dockerfile pour configurer la version de l’image de nodejs. Vous pouvez baser votre image sur n’importe quelle version de linux dans la mesure où vous pourrez configurer la version de nodejs lors du build avec l”ARGS” nommé “NODE_VERSION”. Votre image lancera simplement le shell interactif “node”. Vous pouvez tester votre image en utilisant docker compose. Builder l’image en précisant la version de nodejs avec l’argument “NODE_VERSION” puis vérifier que la version de nodejs du conteneur correspond bien à celle-ci.

​

Exercice 10 - CMD VS ENTRYPOINT

Rédiger un fichier Dockerfile pour déployer un serveur nginx avec des paramètres configurables . Vous utiliserez les 2 instructions “ENTRYPOINT” et “CMD”. ENTRYPOINT sera utilisée pour démarrer le binaire nginx. CMD sera utilisé comme paramètre par défaut pour configurer arguments du binaire nginx. Example: nginx -g demon off Vous pouvez utiliser docker compose pour lancer votre application et modifier la commande par défaut du conteneur nginx. Vérifier en modifiant la commande par défaut, que le comportement du conteneur nginx correspond à cette même commande.

​

Exercice 11 - Multicouche

Rédiger un fichier Dockerfile qui conteneurise une application nodejs en utilisant 2 couches d’image. Vous pouvez conteneuriser n’importe quelle type d’application (script, API, etc..) dans la mesure où vous respectez l’architecture du Dockerfile en multi-couche et que vous avez des dépendances npm. Vous définirez une première couche nommée “BUILD” qui se basera sur node:18.0.5 et qui installera les dépendances de votre projet. Vous définirez une seconde couche (qui se base la couche “BUILD”) pour copier le contenu de la couche “BUILD” dans cette seconde couche et lancer l’application js copiée. Vérifier que l’application se lance bien malgré l’utilisation des 2 couches dans le Dockerfile.
