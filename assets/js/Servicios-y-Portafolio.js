/**
 * @fileoverview Este archivo contiene  para mostrar la imagen y el modal de información respectiva a cada tarjeta 
 * @author [Luis Antonio]
 * @version 1.0.0
 */

const servicesData = [
    //CONSULTORÍA
    {
        title: "CONSULTORÍA",
        imageUrl: "/assets/img/Servicios/consultoria.png",
        mediaType: "image", // 'image' o 'video'
        modalId: "modal-consultoria",
        modalContent: "Aquí puedes detallar los servicios de consultoría que ofreces. Por ejemplo: Análisis de negocio, estrategias de mercado, optimización de procesos, etc."
    },
    // GESTIÓN Y TRAMITES
    {
        title: "GESTIÓN Y TRÁMITES",
        imageUrl: "/assets/img/Servicios/gestion-y-tramites.png", // Asegúrate de tener estas imágenes
        mediaType: "image",
        modalId: "modal-gestion",
        modalContent: "Aquí puedes detallar los servicios de gestión y trámites que ofreces. Por ejemplo: Trámites legales, gestión de permisos, asesoría documental, etc."
    },
    //CAPACITACIÓN Y ENTRENAMIENTO
    {
        title: "CAPACITACIÓN Y ENTRENAMIENTO",
        imageUrl: "/assets/img/Servicios/capacitacion.png",
        mediaType: "image",
        modalId: "modal-capacitacion",
        modalContent: "Aquí puedes detallar los servicios de capacitación y entrenamiento. Por ejemplo: Cursos personalizados, talleres prácticos, desarrollo de habilidades, etc."
    },
    //GESTIÓN DE SEGURIDAD EN EL TRABAJO 
    {
        title: "GESTIÓN DE SEGURIDAD <br> Y SALUD EN EL TRABAJO", // Puedes incluir HTML aquí
        imageUrl: "/assets/img/Servicios/seguridad-en-trabajo.png",
        mediaType: "image",
        modalId: "modal-gestion-seguridad",
        modalContent: "Detalles sobre los servicios de gestión de seguridad y salud ocupacional. Implementación de sistemas de gestión, auditorías, elaboración de programas de seguridad, etc."
    },
    //CONTROL Y ELIMINACIÓN DE RIESGOS
    {
        title: "CONTROL Y ELIMINACIÓN <br> DE RIESGOS",
        imageUrl: "/assets/img/Servicios/eliminacion-riesgos.png",
        mediaType: "image",
        modalId: "modal-control-riesgos",
        modalContent: "Servicios enfocados en la identificación, evaluación y control de riesgos laborales en tu empresa."
    },
    //INGENIERÍA
    {
        title: "INGENIERÍA",
        imageUrl: "/assets/img/Servicios/ingenieria.png",
        mediaType: "image",
        modalId: "modal-ingenieria",
        modalContent: "Ofrecemos soluciones de ingeniería especializada para proyectos de diversa índole, incluyendo diseño, supervisión y consultoría técnica."
    },
    //VENTA DE EQUIPO DE PROTECCIÓN PERSONAL Y DE EMERGENCIA
    {
        title: "VENTA DE EQUIPO DE PROTECCIÓN <br> PERSONAL Y DE EMERGENCIA",
        imageUrl: "/assets/img/Servicios/venta-de-equipo.png",
        mediaType: "image",
        modalId: "modal-venta-equipo",
        modalContent: "Suministro de equipos de protección personal (EPP) certificados y equipos de emergencia para garantizar la seguridad de tu personal."
    },
    //PROTECCIÓN CIVIL
    {
        title: "PROTECCIÓN CIVIL",
        imageUrl: "/assets/img/Servicios/proteccion-civil.png",
        mediaType: "image",
        modalId: "modal-proteccion-civil",
        modalContent: "Asesoría y capacitación en planes de protección civil, evacuación y atención a emergencias."
    },
    //GESTIÓN AMBIENTAL
    {
        title: "GESTIÓN AMBIENTAL",
        imageUrl: "/assets/img/Servicios/gestion-ambiental.png",
        mediaType: "image",
        modalId: "modal-gestion-ambiental",
        modalContent: "Servicios de consultoría para el cumplimiento de normativas ambientales, estudios de impacto ambiental y gestión de residuos."
    },
    //INSTALACIÓN Y MANTENIMIENTO PREVENTIVO Y CORRECTIVO A CCTV Y CONTROL DE ACCESO
    {
        title: "INSTALACIÓN Y MANTENIMIENTO <br> PREVENTIVO Y CORRECTIVO A CCTV, <br> CONTROL DE ACCESO",
        imageUrl: "/assets/img/Servicios/mantenimiento-CCTV.jpg",
        mediaType: "image",
        modalId: "modal-instalacion-cctv",
        modalContent: "Implementación y soporte técnico para sistemas de videovigilancia (CCTV) y control de acceso, mejorando la seguridad de tus instalaciones."
    }
    // Ejemplo de video
    /*{
        title: "DEMO DE SEGURIDAD (Video)",
        videoUrl: "/assets/videos/demo-seguridad.mp4", // Ruta al video
        mediaType: "video",
        modalId: "modal-demo-seguridad",
        modalContent: "Aquí puedes ver un demo de nuestros sistemas de seguridad."
    }*/
];

// Datos para el portafolio
const portfolioData = [
    // USO Y MANEJO APROPIADO DEL MONTACARGAS
    {
        title: "USO Y MANEJO APROPIADO <br> DEL MONTACARGAS",
        imageUrl: "/assets/img/Portafolio/montacargas.png",
        mediaType: "image" // Agrega mediaType para que generateCards sepa que es una imagen
    },
    // USO CORRECTO DEL EQUIPO <br> DE SEGURIDAD PARA TRABAJOS <br> EN ALTURAS
    {
        title: "USO CORRECTO DEL EQUIPO DE SEGURIDAD PARA TRABAJOS EN ALTURAS",
        imageUrl: "assets/img/Portafolio/trabajos-en-alturas.png",
        mediaType: "image" // Agrega mediaType para que generateCards sepa que es una imagen
    },
    // COMBATE DE INCENDIOS
    {
        title: "COMBATE DE INCENDIOS",
        imageUrl: "assets/img/Portafolio/combate-incendios.png",
        mediaType: "image" // Agrega mediaType para que generateCards sepa que es una imagen
    },
    // RESCATE EN ALTURAS
    {
        title: "RESCATE EN ALTURAS",
        imageUrl: "assets/img/Portafolio/rescate-en-alturas.png",
        mediaType: "image" // Agrega mediaType para que generateCards sepa que es una imagen
    },
    // USO Y MANIPULACIÓN ADECUADO EN PLATAFORMAS DE ELEVACIÓN
    {
        title: "USO Y MANIPULACIÓN ADECUADO <br> EN PLATAFORMAS DE ELEVACIÓN",
        imageUrl: "assets/img/Portafolio/plataformas-elevacion.png",
        mediaType: "image" // Agrega mediaType para que generateCards sepa que es una imagen
    }/*,{
        title: "Demo de Software (Video)", // Título para la tarjeta
        videoUrl: "assets/videos/demo-software.mp4", // Ruta al archivo de video
        mediaType: "video" 
    }
    */
];