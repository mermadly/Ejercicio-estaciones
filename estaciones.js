var mes = prompt('Quiero saber en qué estación está el mes de:');

var mesLC = mes.toLowerCase();
var mesDAT = mesLC.replace(/á/g, 'a');
var mesDAT = mesDAT.replace(/é/g, 'e');
var mesDAT= mesDAT.replace (/í/g, 'i');
var mesDAT= mesDAT.replace (/ó/g, 'o');
var mesDAT= mesDAT.replace (/ú/g, 'u');

switch (mesDAT) {
    case 'enero':
    case 'febrero':
    case 'marzo':
    console.log ('En', mesDAT, 'es verano en Argentina.');
    break;
    case 'abril':
    case 'mayo':
    case 'junio':
    console.log ('En', mesDAT, 'es otoño en Argentina.');
    break;
    case 'julio':
    case 'agosto':
    case 'septiembre':
    console.log ('En', mesDAT, 'es invierno en Argentina.');
    break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
    console.log ('En', mesDAT, 'es primavera en Argentina.');
    break;
    default: console.log (mesDAT, 'no es un mes válido. Por favor, ingrese un mes válido.');
}