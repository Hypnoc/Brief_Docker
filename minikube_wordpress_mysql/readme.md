# Brief Minikube

Contexte:

Projet Minikube, l'objectif est de déployer la partie front Wordpress connecté avec le back MYSQL. J'utilise le fichier kustomization pour prendre en compte tous les yaml nécessaires.


---------------------------------------------------------------------------------------------

Pour commencer :

À la racine du repo, le fichier kustomization.yaml qui déploie les yaml nécessaires.

Dans le dossier front : les yaml relatifs à Wordpress
Dans le dossier back : les yaml relatifs à MYSQL 8

$ kubectl apply -k ./           # (./ si vous vous trouvez à la racine) pour déployer et connecter le front et le back
$ minikube service wordpress    # pour se connecter au service wordpress
$ kubectl delete -k ./		    # (./ si vous vous trouvez à la racine) pour détruire tout le déploiement relatif à votre fichier kustomization.yaml

--------------------------------------------------------------------------------------------