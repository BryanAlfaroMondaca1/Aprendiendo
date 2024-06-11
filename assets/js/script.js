import { actualizarPersona, eliminarPersona, obtenerPersonas, registrarPersona } from "./promesas.js";

window.addEventListener("load", () => {
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
    cargarDatos();
    document.getElementById("btnActualizar").addEventListener("click", actualizar);
});

const registrar = () => {
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eRut = document.getElementById("rut");
    let eCorreo = document.getElementById("correo");
    let eFecha = document.getElementById("fecha");
    let eEdad = document.getElementById("edad");

    let objeto = {
        nombre: eNombre.value,
        apellido: eApellido.value,
        rut: eRut.value,
        correo: eCorreo.value,
        fecha: eFecha.value,
        edad: eEdad.value
    };

    registrarPersona(objeto).then(() => {
        alert("Se registró exitosamente");
        cargarDatos();
    }).catch((error) => {
        console.log(error);
    });
};

const cargarDatos = () => {
    obtenerPersonas().then((personas) => {
        let estructura = "";
        personas.forEach((p) => {
            estructura += "<tr>";
            estructura += "<td>" + p.nombre + "</td>";
            estructura += "<td>" + p.apellido + "</td>";
            estructura += "<td>" + p.rut + "</td>";
            estructura += "<td>" + p.correo + "</td>";
            estructura += "<td>" + p.fecha + "</td>";
            estructura += "<td>" + p.edad + "</td>";
            estructura += "<td><button id='UPD" + p.id + "'>Actualizar</button></td>";
            estructura += "<td><button id='DEL" + p.id + "'>Eliminar</button></td>";
            estructura += "</tr>";
        });
        document.getElementById("cuerpotabla").innerHTML = estructura;

        personas.forEach((p) => {
            document.getElementById("UPD" + p.id).addEventListener("click", () => {
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDapellido").value = p.apellido;
                document.getElementById("UPDrut").value = p.rut;
                document.getElementById("UPDcorreo").value = p.correo;
                document.getElementById("UPDfecha").value = p.fecha;
                document.getElementById("UPDedad").value = p.edad;
                document.getElementById("btnActualizar").value = p.id;
            });

            document.getElementById("DEL" + p.id).addEventListener("click", () => {
                if (confirm("Desea eliminar a:\n" + p.nombre + " " + p.apellido)) {
                    eliminarPersona(p.id).then(() => {
                        alert("Eliminaste con éxito");
                        cargarDatos();
                    }).catch((e) => {
                        console.log(e);
                    });
                }
            });
        });
    }).catch((error) => {
        console.log(error);
    });
};

const actualizar = () => {
    let id = document.getElementById("btnActualizar").value;

    let eNombre = document.getElementById("UPDnombre");
    let eApellido = document.getElementById("UPDapellido");
    let eRut = document.getElementById("UPDrut");
    let eCorreo = document.getElementById("UPDcorreo");
    let eFecha = document.getElementById("UPDfecha");
    let eEdad = document.getElementById("UPDedad");

    let objeto = {
        nombre: eNombre.value,
        apellido: eApellido.value,
        rut: eRut.value,
        correo: eCorreo.value,
        fecha: eFecha.value,
        edad: eEdad.value
    };

    actualizarPersona(objeto, id).then(() => {
        alert("Se actualizó correctamente");
        cargarDatos();
    }).catch((e) => {
        console.log(e);
    });
};
