const password = document.getElementById("password");
// Cette ligne récupère l'élément de formulaire avec l'ID "password" et le stocke dans la variable password. Cet élément correspond au champ de saisie du mot de passe.

const checkPassword = document.getElementById("check-password");
// Cette ligne récupère l'élément de formulaire avec l'ID "check-password" et le stocke dans la variable checkPassword. Cet élément correspond au champ de saisie pour la vérification du mot de passe.

const message = document.getElementById("message");
// Cette ligne récupère l'élément avec l'ID "message" et le stocke dans la variable message. Cet élément est utilisé pour afficher le message de correspondance ou de non-correspondance des mots de passe.

checkPassword.addEventListener("keyup", function () {
// Cette ligne ajoute un écouteur d'événements pour l'événement "keyup" (relâchement d'une touche du clavier) sur le champ de saisie de vérification du mot de passe. Cela signifie que chaque fois que l'utilisateur relâche une touche dans ce champ, la fonction anonyme sera exécutée.

  if (password.value === checkPassword.value) {
// Cette ligne vérifie si la valeur du champ de saisie du mot de passe (password.value) est égale à la valeur du champ de saisie de vérification du mot de passe (checkPassword.value). Si les deux valeurs sont identiques, cela signifie que les mots de passe correspondent.

    message.innerHTML = "mot de passe identique";
    message.style.color = "green";
// Ces lignes modifient le contenu de l'élément message pour afficher le message "Passwords match" et définissent la couleur du texte en vert pour indiquer que les mots de passe correspondent.

  } else {
// Si la condition précédente n'est pas remplie, cela signifie que les mots de passe ne correspondent pas.

    message.innerHTML = "les mots de passe ne sont pas identique";
    message.style.color = "red";
  }
// Ces lignes modifient le contenu de l'élément message pour afficher le message "Passwords do not match" et définissent la couleur du texte en rouge pour indiquer que les mots de passe ne correspondent pas.

});
