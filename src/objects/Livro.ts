import { Doador } from './Doador';
import { Ong } from './Ong';

export class Livro {
    _id: String;
    nome: String;
    anoFabricacao: String;
    editora: String;
    autor: String;
    doador: Doador;
    ong: Ong;
 }