export class CreateCatDto {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}

export interface Cat {
    name: string;
    age: number;
    breed: string;
}