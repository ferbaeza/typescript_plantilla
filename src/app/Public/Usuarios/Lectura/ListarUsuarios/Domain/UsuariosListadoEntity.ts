export class UsuariosListadoEntity {

    constructor(
        public readonly id: string,
        public readonly nombre: string,
        public readonly email: string,
        public readonly activo: boolean,
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