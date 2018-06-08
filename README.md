# Redux Dojo Step 2

Documentation : https://redux.js.org/basics/usage-with-react

## Rappel

Le state général de l'application est la forme :
```
{
    users : [
        {
            name: 'John Doe',
            id: 1
        },
    ]
}
```

## Step 1 `containers/AddUser.js`

Réaliser le formulaire d'ajout d'un utilisateur qui permet de soumettre un nouvel utilisateur via son nom.

> Un simple `input` et un `button` suffissent.

Ce container devra `dispatch` l'action d'ajouter un utilisateur.

## Step 2 `containers/UsersList.js`

Réaliser le container pour le composant `UserList` qui se chargera :
 * de transmettre les informations essentielles du `state` au `props`.
 * de faciliter le dispatch de l'action qui supprime un utilisateur.
 
 ## Step 3 `components/UsersList.js`
 
 Implémenter le corps de la fonction `onDeleteClick()` qui dispatchera l'action qui supprime un utilisateur.