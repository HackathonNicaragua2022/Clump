export default class Course {
    constructor(nombre, seccion, grado, codigoDeIngreso) {
        this.nombre = nombre;
        this.seccion = seccion;
        this.grado = grado;
        this.codigoDeIngreso = codigoDeIngreso;
    }
}

export const courseConverter = {
    toFirestore: (course) => {
        return {
            nombre: course.nombre,
            seccion: course.seccion,
            grado: course.grado,
            codigoDeIngreso: course.codigoDeIngreso
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Course(data.nombre, data.seccion, data.grado, data.codigoDeIngreso);
    }
};