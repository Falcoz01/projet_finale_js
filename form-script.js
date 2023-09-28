/** beggin::image */
var image = document.createElement("img");


image.src = "medias/checkbox.png"; 
image.alt = "checkbox";
image.style.width = "20px";
image.style.height = "20px";

/** ------------end::image------------------ */

/** ------------beggin::Nom------------------ */

var errorsNom = document.getElementById("errorsNom");
var nomInput = document.getElementById("nom");

nomInput.addEventListener("keyup",  (e) => {
    var nom = nomInput.value;
    if(valideOnlyLettre(nom) && nom.length > 1){
        errorsNom.innerHTML = "";
        errorsNom.appendChild(image);
        nomInput.style.border = "2px solid green";
        return true;
    }
    else{
        errorsNom.textContent = "le nom doit contenir que des lettres";
        errorsNom.style.color = "red";
        nomInput.style.border = "2px solid red";
        return false;
       
    }
});

function valideOnlyLettre(nom) {
    return /^[a-zA-Z]+$/.test(nom);
}/** ------------end::Nom------------------ */


/** ------------beggin::Prenom------------------ */
var errorsPrenom = document.getElementById("errorsPrenom");
var prenomInput = document.getElementById("prenom");

prenomInput.addEventListener("keyup",  (e) => {
    var prenom = prenomInput.value;
    if(valideOnlyLettre(prenom) && prenom.length > 1){
        errorsPrenom.innerHTML = "";
        errorsPrenom.appendChild(image);
        prenomInput.style.border = "2px solid green";
        return true;
    }
    else{
        errorsPrenom.textContent = "le prenom doit contenir que des lettres";
        errorsPrenom.style.color = "red";
        prenomInput.style.border = "2px solid red";
        return false;
    }
});

function valideOnlyLettre(prenom) {
    return /^[a-zA-Z]+$/.test(prenom);
}
/** ------------end::Prenom------------------ */

/** ------------beggin::Email------------------ */
var errorsEmail = document.getElementById("errorsEmail");
var emailInput = document.getElementById("email");

emailInput.addEventListener("keyup",  (e) => {
    var email = emailInput.value;
if (ValidateEmail(email))
    {
        errorsEmail.innerHTML = "";
        errorsEmail.appendChild(image);
        emailInput.style.border = "2px solid green";
        return true;
        
    }
    else
    {
        emailInput.style.border = "2px solid red";
        errorsEmail.innerHTML = "Veuillez entrer une adresse email valide";
        errorsEmail.style.color = "red";
        return false;
    }
});

function ValidateEmail(email) 
{
 return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
/** ------------end::Email------------------ */


/** ------------beggin::Password------------------ */


    var errorsPassword = document.getElementById("errorsPassword");
    var passwordInput = document.getElementById("password");

    passwordInput.addEventListener("keyup",  (e) => {
    var password = passwordInput.value;
    const regexUpperCase = /[A-Z]/; 
    const regexLowerCase = /[a-z]/; 
    const regexDigit = /[0-9]/; 
    const regexSpecialChar = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]/; 
  
    if (
      password.length < 8 || !regexUpperCase.test(password) || !regexLowerCase.test(password) || !regexDigit.test(password) || !regexSpecialChar.test(password) 
    ) {
      errorsPassword.innerHTML  = 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une majuscule, une minuscule, un chiffre et un caractère spécial.'; // Display an error message
      passwordInput.style.border = "2px solid red";
      errorsPassword.style.color = "red";
      return true;
    } else {
        errorsPassword.innerHTML = "";
        errorsPassword.appendChild(image);
        passwordInput.style.border = "2px solid green";
        return false;
    }
  });
  

/** ------------end::Password------------------ */

/** ------------beggin::ConfirmPassword------------------ */
var errorsConfirmPassword = document.getElementById("errorsConfirmPassword");
var confirm_passwordInput = document.getElementById("confirm_password");

confirm_passwordInput.addEventListener("keyup",  (e) => {
    var password = passwordInput.value;
    var confirm_password = confirm_passwordInput.value;

    if(password == confirm_password){
        errorsConfirmPassword.innerHTML = "";
        errorsConfirmPassword.appendChild(image);
        confirm_passwordInput.style.border = "2px solid green";
        return true;
    }
    else{
        confirm_passwordInput.style.border = "2px solid red";
        errorsConfirmPassword.innerHTML = "Les mots de passe ne correspondent pas";
        errorsConfirmPassword.style.color = "red";
        return false;
    }

});

/** ------------end::ConfirmPassword------------------ */

/** ------------beggin::Jour_naissance------------------ */
var errorsJourNaissance = document.getElementById("errorsJourNaissance");
var jour_naissanceInput = document.getElementById("jour_naissance");

jour_naissanceInput.addEventListener("keyup",  (e) => {
    var jour_naissance = jour_naissanceInput.value;

    if(jour_naissance >= 1 && jour_naissance <= 31){
        errorsJourNaissance.innerHTML = "";
        errorsJourNaissance.appendChild(image);
        jour_naissanceInput.style.border = "2px solid green";
        return true;
    }
    else{
        jour_naissanceInput.style.border = "2px solid red";
        errorsJourNaissance.innerHTML = "Le jour de naissance doit etre entre 1 et 31";
        errorsJourNaissance.style.color = "red";
        return false;
    }

});

/** ------------end::Jour_naissance------------------ */

/** ------------beggin::Mois_naissance------------------ */
var moisArray = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];


var moisSelect = document.getElementById("mois");


for (var i = 0; i < moisArray.length; i++) {
    var option = document.createElement("option");
    option.value = i + 1; 
    option.text = moisArray[i]; 
    moisSelect.appendChild(option); 
}

/** ------------end::Mois_naissance------------------ */

/** ------------beggin::Année_naissance------------------ */
var errorsAnneeNaissance = document.getElementById("errorsAnneeNaissance");
var annee_naissanceInput = document.getElementById("annee_naissance");

annee_naissanceInput.addEventListener("keyup",  (e) => {
    var annee_naissance = annee_naissanceInput.value;

    if(annee_naissance >= 1900 && annee_naissance <= 2100){
        errorsAnneeNaissance.innerHTML = "";
        errorsAnneeNaissance.appendChild(image);
        annee_naissanceInput.style.border = "2px solid green";
        return true;
    }
    else{
        annee_naissanceInput.style.border = "2px solid red";
        errorsAnneeNaissance.innerHTML = "L'année de naissance doit etre entre 1900 et 2100";
        errorsAnneeNaissance.style.color = "red";
        return false;
    }

});

/** ------------end::Année_naissance------------------ */

/** ------------beggin::Numéro de rue------------------ */
var errorsNumeroRue = document.getElementById("errorsNumeroRue");
var numero_rueInput = document.getElementById("numero_rue");

numero_rueInput.addEventListener("keyup",  (e) => {
    var numero_rue = numero_rueInput.value;
if (OnlyNumber(numero_rue))
    {
        errorsNumeroRue.innerHTML = "";
        errorsNumeroRue.appendChild(image);
        numero_rueInput.style.border = "2px solid green";
        return true;
        
    }
    else
    {
        numero_rueInput.style.border = "2px solid red";
        errorsNumeroRue.innerHTML = "Chiffre";
        errorsNumeroRue.style.color = "red";
        return false;
    }
});

function OnlyNumber(numero_rue)  
{
    return /^\d+$/.test(numero_rue);
}


/** ------------end::Numéro de rue------------------ */

/** -------------beggin::Nom de rue---------------- */

var errorsNomRue = document.getElementById("errorsNomRue");
var nom_rueInput = document.getElementById("nom_rue");

nom_rueInput.addEventListener("keyup",  (e) => {
    var nom_rue = nom_rueInput.value;
    if(valideOnlyLettre(nom_rue)){
        errorsNomRue.innerHTML = "";
        errorsNomRue.appendChild(image);
        nom_rueInput.style.border = "2px solid green";
        return true;
    }
    else{
        errorsNomRue.textContent = "le nom de rue doit contenir que des lettres";
        errorsNomRue.style.color = "red";
        nom_rueInput.style.border = "2px solid red";
        return false;
    }
});

function valideOnlyLettre(nom_rue) {
    return /^[a-zA-Z]+$/.test(nom_rue);
}


/** ------------end::Nom de rue------------------ */

/** -------------beggin::Code postale---------------- */
    var errorsCodePostal = document.getElementById("errorsCodePostal");
    var code_postalInput = document.getElementById("code_postal");

    code_postalInput.addEventListener("keyup",  (e) => {
        var code_postal = code_postalInput.value;

        if(code_postal.length === 5){
            errorsCodePostal.innerHTML = "";
            errorsCodePostal.appendChild(image);
            code_postalInput.style.border = "2px solid green";
            return true;
        }
        else{
            code_postalInput.style.border = "2px solid red";
            errorsCodePostal.innerHTML = "5 chiffres";
            errorsCodePostal.style.color = "red";
            return false;
        }
    });

/** -------------end::Code postale---------------- */

/** -------------beggin::Ville---------------- */
var errorsVille = document.getElementById("errorsVille");
var villeInput = document.getElementById("ville");

villeInput.addEventListener("keyup",  (e) => {
    var ville = villeInput.value;
    if(valideOnlyLettre(ville)){
        errorsVille.innerHTML = "";
        errorsVille.appendChild(image);
        villeInput.style.border = "2px solid green";
        return true;
    }
    else{
        errorsVille.textContent = "la ville doit contenir que des lettres";
        errorsVille.style.color = "red";
        villeInput.style.border = "2px solid red";
        return false;
        
    }
});

function valideOnlyLettre(ville) {
    return /^[a-zA-Z]+$/.test(ville);
}

/** -------------end::Ville---------------- */

/** -------------beggin::ajout de course--------- */
var courseInput = document.getElementById("course_realise");
var buttonAdd = document.getElementById("add_course");
var buttonDelete = document.getElementById("delete_course");
var courseContainer = document.getElementById("courseContainer");
var form = document.getElementById("form");

buttonAdd.addEventListener("click", function(e) {
    e.preventDefault();
    var courseValue = courseInput.value.trim();

    if (courseValue !== '') {
        var newCourseSpan = document.createElement('p');
        newCourseSpan.textContent = courseValue;
        courseContainer.appendChild(newCourseSpan);
        courseInput.value = '';
    }
});

buttonDelete.addEventListener("click", function(e) {
    e.preventDefault();
    var spans = courseContainer.querySelectorAll('p');
    for (var i = 0; i < spans.length; i++) {
        spans[i].remove();
    }
});
/** -------------end::Ajout de course---------------- */

