class carta {
  // atributo (private, public, protected)
  valor;
  imagen;
  // Constructor
  // necesitamos 1C o QC.
  constructor(representacion) {
    // let cosa = "" // representacion ya podemos usar substring y cambiar luego por representacion.
    this.imagen = `./${representacion}.png`;
    this.valor = representacion.substring(0, representacion.length - 1);
    // O con switch o if
    if (this.valor == "J" || this.valor == "K" || this.valor == "Q") {
      this.valor = 10;
    } else {
      this.valor = Number(this.valor); // En caso de no tener letras si no son numeros ej, sale 9C -> 9 string nueve
    }
    // hacemos un switch para que cuando saque las figuras j q k haga diferentes cosas. En el caso del black jack como las figuras todas son 10 podemos hacer lo siguiente
    /* switch (this.valor) {
      case "J":
      /* this.valor = 11
            break; */
    // case "Q":
    /* this.valor = 12
            break; 
      case "K":
        this.valor = 10;
        break;
      default:
        this.valor = Number(this.valor);
        break;
    } */
  }
  // Metodos
  // getter y setter
}
