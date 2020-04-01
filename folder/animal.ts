import { Iname } from './common';

export class Animal implements Iname {
    constructor (public name: string){
    }
}

export class Animals extends Array<Animal> {
    constructor(){
        super();
        ['Lynx', 'Jaguar', 'Panther', 'Leopard','Lion','Tiger'].forEach(
            name => {this.push(new Animal(name));
            });
        }
    };