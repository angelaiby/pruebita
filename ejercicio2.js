String.prototype.reverse = function(palabra) {
  var cadena =[];
 for (var i=0; i<palabra.length; i--){

    cadena.push(palabra[i]);
 }
  return cadena;
	/*var palabra = palabra.length;
	var cadena = "";
	while (palabra>=0) {
		cadena = cadena + this.charAt(palabra);
		palabra--;
	}
	return cadena;*/

};
var palabra = new String (prompt("Ingrese una palabra o frase"));
document.write (palabra.reverse());
