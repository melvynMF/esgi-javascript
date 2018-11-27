
a = type_chek_v1("dd");
console.log(a);
function type_chek_v1(number) {
    bool=false;
    if(typeof number == 'number'){
        bool= true;
    }
    return bool;
}
/*
function type_chek_v2(number) {
    bool=false;

    // Pour les nombres
   
    typeof 37 === 'number';
 if(typeof number == 'number'){
        bool= true;
    }


    // Les chaînes de caractères
    typeof "" === 'string'; // String convertit n'importe quelle valeur en chaîne


    // Les booléens
    typeof true === 'boolean';

    // Les symboles
    typeof Symbol() === 'symbol'
    // Indéfini
    typeof undefined === 'undefined';
    // Les objets
    typeof {a:1} === 'object';

    // Utiliser la méthode Array.isArray ou Object.prototype.toString.call
    // afin de différencier les objets des tableaux
    typeof [1, 2, 4] === 'object';

    typeof new Date() === 'object';
    typeof /regex/ === 'object'; // Voir la section sur les expressions rationnelles

    // Les expressions suivantes sont source de confusion
    // à ne pas utiliser sous cette forme
    typeof new Boolean(true) === 'object'; 
    // Les fonctions
    typeof function(){} === 'function';

    return bool;
}*/