// Acces to data-* attribute value with "dataset":
const elem = document.querySelector("li:first-child");

elem.dataset.id; // 10784
elem.dataset.author; // Jason Walters
elem.dataset.role = "Acteur de cinéma"; // // Renseigne le rôle de la personne
"author" in elem.dataset; // true
"notAttribute" in elem.dataset; // false
elem.dataset.notAttribute = `Il n'ya pas d'attribut`; // Ajoute un nouvel attribut 'data' à l'élément
"notAttribute" in elem.dataset; // true
