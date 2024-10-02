# 🌟 Minikube WordPress + MySQL Deployment

## 📝 Contexte

Ce projet a pour objectif de déployer **WordPress** comme frontend connecté à une base de données **MySQL** comme backend sur **Minikube**. Le fichier `kustomization.yaml` est utilisé pour orchestrer et gérer tous les fichiers YAML nécessaires au déploiement.

---

## 🚀 Pour commencer

### Structure du projet :
- **À la racine du repo** : Le fichier `kustomization.yaml` qui déploie toutes les ressources nécessaires.
- **Dossier `front/`** : Contient les fichiers YAML relatifs à WordPress (frontend).
- **Dossier `back/`** : Contient les fichiers YAML relatifs à MySQL (backend).

### Commandes principales :
1. **Déployer WordPress et MySQL**  
   Utilisez la commande suivante pour déployer et connecter le frontend WordPress au backend MySQL :
   
    ```bash
   $ kubectl apply -k ./
    ```

    Accéder au service WordPress
    Une fois le déploiement terminé, accédez à WordPress via Minikube avec la commande suivante :

    ```bash
   $ minikube service wordpress
    ```

Nettoyer le déploiement
Pour supprimer toutes les ressources créées lors du déploiement :

    ```bash
    $ kubectl delete -k ./
    ```
    

📁 Structure du projet

.   ├── kustomization.yaml # Fichier principal de configuration Kustomize 
    ├── front/ # Contient les fichiers YAML pour WordPress 
    └── back/ # Contient les fichiers YAML pour MySQL