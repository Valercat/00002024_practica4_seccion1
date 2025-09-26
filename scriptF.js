document.addEventListener("DOMContentLoaded", function() {

    
    function actividad() {                  
        const diaSemana = prompt("Ingrese el día de la semana:").toString();

        switch (diaSemana) {
            case "lunes":
                alert("Los Lunes debo atender un cliente especifico");
                break;
            case "martes":
                alert("Los Martes visito una agencia fuera de la ciudad");
                break;
            case "miercoles":
                alert("Los Miércoles debo llevar a mi hija al ballet");
                break;
            case "jueves":
                alert("En Jueves debo priorizar entregas de desarrollo");
                break;
            case "viernes":
                alert("En Viernes debo atender problemas de manera remota");
                break;
            case "sabado":
                alert("En Sábado debo hacer lo que mi esposa quiera");
                break;
            case "domingo":
                alert("En domingo no hay nada que hacer");
                break;
            default:
                alert("No es un día válido de la semana");
        }
    }
    window.actividad = actividad;
});