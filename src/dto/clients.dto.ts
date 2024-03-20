export class CreateClientDto {
    readonly document: string;
    readonly name: string;
    readonly lastName: string;
    readonly address: string;
    readonly cellphone: string;
}

export class UpdateClientDto {
    readonly document: string;
    readonly name: string;
    readonly lastName: string;
    readonly address: string;
    readonly cellphone: string;
}
