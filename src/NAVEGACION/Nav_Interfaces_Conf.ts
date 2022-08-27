export interface ListaNavegacion_Int {
  id: number;
  displayName: string;
  routerTo: string;
}

//Lista de enlaces
//Determina el nombre del enlace, redirección y orden de enlaces
export enum routerLinks_enum {
  '{"displayName":"Uno","minRol":1,"routerTo":"/Uno"}' = 0,
}

//En @/router se determina los componentes a cada ruta
const ListaNavegacion: Array<ListaNavegacion_Int> = [
  {
    id: 0,
    displayName: JSON.parse(routerLinks_enum[0]).displayName,
    routerTo: JSON.parse(routerLinks_enum[0]).routerTo,
  },
];

export default ListaNavegacion;
