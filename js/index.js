window.oncontextmenu = function() {
    return false;
}

var cantidadHabilitados = 0;

function invalitarCasilla () {
    if (this.className === 'columna invalidar') {
        swal({
            title: "Advertencia",
            text: "Esta casilla ya se encuentra desabilitada.",
            icon: "warning",
            button: "Continuar",
        });
    }
    else {
        this.className += ' invalidar'
        this.removeEventListener('click', habilitarCasilla)
    }
}

function habilitarCasilla () {

    if (this.className === 'columna invalidar') {
        swal({
            title: "Error",
            text: "Esta casilla no se puede habilitar.",
            icon: "error",
            button: "Continuar",
        });

        return
    }

    if (cantidadHabilitados === 5) {
        swal({
            title: "Error",
            text: "No se pueden habilitar mas casillas, maximo 5.",
            icon: "error",
            button: "Continuar",
        });
    }
    else {
        this.className += ' invalidar'
        this.style.backgroundColor = '#55d60b'
        cantidadHabilitados++
    }
}

let columnas = document.getElementsByClassName('columna')

for (columna of columnas) {
    columna.addEventListener('click', invalitarCasilla)
    columna.addEventListener('contextmenu', habilitarCasilla)
}