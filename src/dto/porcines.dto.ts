export class CreatePorcineDto {
    readonly breed: "york" | "hamp" | "duroc";
    readonly age: number;
    readonly weight: number;
    readonly feedId: number;
    readonly clientId: number;
}

export class UpdatePorcineDto {
    readonly breed: "york" | "hamp" | "duroc";
    readonly age: number;
    readonly weight: number;
    readonly feedId: number;
    readonly clientId: number;
}
