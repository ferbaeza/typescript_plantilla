export class UsuariosListadoEntity {

    constructor(
        id: string,
        nombre: string,
        email: string,
        activo: boolean,
    ) {
    }

    static fromRepository(model: any) {
        return new UsuariosListadoEntity(
            model.id,
            model.nombre,
            model.email,
            model.activo ?? false,
        );
    }
}