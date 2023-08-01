class Hospital{

    constructor(id , nombre, descripcion, ubicacion, telefono, correo, logotipo, fotoGoogle, distancia, nroEstrellas){
        this.id = id; 
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.telefono = telefono;
        this.correo = correo;
        this.logotipo = logotipo;
        this.fotoGoogle = fotoGoogle;
        this.distancia = distancia;
        this.nroEstrellas = nroEstrellas;
    }

    toString(){
        return 'nombre:' + this.nombre + 'descripcion: ' + this.descripcion + 'ubicacion: ' + this.ubicacion + 'telefono: ' + this.telefono + 'correo: ' + this.correo;
    }

}

module.exports = Hospital;