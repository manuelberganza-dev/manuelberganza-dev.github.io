---
layout: layout-post.njk
title: Punto de Venta | Spring MVC, Spring Security, Spring Data JPA
---

<h2 class="text-center text-4xl font-bold mb-8">Punto de Venta App - Spring MVC</h2>

<img class="rounded-md shadow-lg mb-8" src="/img/post/pos-portada.png" />

<div class="mb-12">
    <p>
        La aplicación <span class="text-mb-blue-light"><strong>Punto de Venta</strong></span> es uno de los proyectos que más me ha gustado desarrollar porque aborda todo lo esencial de un comercio. Por ejemplo: <span class="text-mb-blue-light"><strong> Ventas, Inventario, Proveedores, Clientes, Facturación</strong></span>  y para los empleados con el rol de Administrador pueden <span class="text-mb-blue-light"><strong>Administrar los Usuarios</strong></span> (empleados). <br/><br/>
        La idea surgió al ver cómo algunos negocios enfrentan dificultades para gestionar ventas, controlar inventarios y manejar facturas de manera organizada. Mi objetivo principal fue crear una herramienta intuitiva, capaz de cubrir todas estas necesidades. <br/><br/>
    </p>

    <p class="bg-gray-700/10 p-4 rounded-md">
        <span class="font-bold text-xl">Tecnologías: </span> <span class="text-mb-blue-light"><strong>Spring MVC</strong></span>, <span class="text-mb-blue-light"><strong>Spring Data JPA</strong></span>, <span class="text-mb-blue-light"><strong>Spring Security</strong></span>, <span class="text-mb-blue-light"><strong>Spring Validation</strong></span>, <span class="text-mb-blue-light"><strong>MySQL</strong></span>, <span class="text-mb-blue-light"><strong>Thymeleaf</strong></span>, <span class="text-mb-blue-light"><strong>HTML</strong></span>, <span class="text-mb-blue-light"><strong>TailwindCSS</strong></span> y <span class="text-mb-blue-light"><strong>Javascript</strong></span>.
    </p>
</div>

<div class="mb-12">
    <p class="text-xl font-bold mb-2">Estructura del proyecto:</p>
    <ul class="mb-4">
        <li>
            com.manuelberganza.pos_app
        </li>
    </ul>
    <img class="rounded-md shadow-lg w-64 md:w-full mx-auto" src="/img/pos-app/5-pos.png" />
</div>

<div class="mb-12">
    <p>
        En esta clase Modelo <span class="text-mb-blue-light"><strong>Producto</strong></span> incluye atributos como el id único del producto, nombre, descripción, precio, cantidad en stock, categoría, y proveedor. 
        Cada instancia de la clase <span class="text-mb-blue-light"><strong>Producto</strong></span> refleja un ítem específico dentro del inventario y un registro dentro de la base de datos.
    </p>
    <img class="rounded-md w-64 md:w-2/3 mx-auto" src="/img/pos-app/1-pos.png" />
</div>

<div class="mb-12">
    <p>
        El archivo  de configuración <span class="text-mb-blue-light"><strong>SpringConfig</strong></span> donde manejo la autenticación y autorización en el sistema.
        Es aquí donde tengo el <span class="text-mb-blue-light"><strong>PasswordEncoder</strong></span>, <span class="text-mb-blue-light"><strong>FilterChain</strong></span> y <span class="text-mb-blue-light"><strong>UserDetailsManager</strong></span>. <br/><br/>
    </p>
    <p class="mb-4">
        El <span class="text-mb-blue-light"><strong>PasswordEncoder</strong></span> que se encarga de encriptar y verificar las contraseñas de los usuarios.
    </p>
    <p class="mb-4">
        Mientras el <span class="text-mb-blue-light"><strong>FilterChain</strong></span>, que es una estructura de filtros que procesa cada solicitud y respuesta en el sistema, manejando la autenticación para permitir que solo usuarios autorizados accedan a los recursos.    
    </p>
    <p class="mb-4">
        Por último, incluyo <span class="text-mb-blue-light"><strong>UserDetailsManager</strong></span>, el componente encargado de cargar y gestionar la información de los usuarios desde la base de datos, como los nombres de usuario y roles, para facilitar el control de acceso en la aplicación.
    </p>
    <img class="rounded-md w-64 md:w-full mx-auto" src="/img/pos-app/2-pos.png" />
</div>

<div class="mb-12">
    <p>
        En el archivo <span class="text-mb-blue-light"><strong>ProductoRepository</strong></span>, he implementado métodos personalizados utilizando la anotación @Query para realizar consultas específicas que van más allá de las funciones estándar de los repositories en <span class="text-mb-blue-light"><strong>Spring Data JPA</strong></span>.
    </p>

    <p>
        Gracias a <span class="text-mb-blue-light"><strong>@Query</strong></span>, puedo utilizar consultas JPQL o SQL nativas directamente en el repository, lo que brinda flexibilidad y control en el acceso a los datos.
    </p>
    <img class="rounded-md w-64 md:w-2/3 mx-auto" src="/img/pos-app/4-pos.png" />
</div>

<div class="mb-12">
    <p>
        En el paquete <span class="text-mb-blue-light"><small class="font-bold">com.manuelberganza.pos_app.security.validations</small></span> he creado una anotación personalizada para validar que un usuario existe en la base de datos antes de realizar ciertas operaciones, como la autenticación o asignación de permisos.
    </p>
    <img class="rounded-md w-64 md:w-2/3 mx-auto" src="/img/pos-app/3-pos.png" />
</div>

<div class="mb-12">
    <p class="text-xl font-bold mb-8">Factura hecha con HTML, TailwindCSS.</p>
    <img class="rounded-md w-64 md:w-2/3 mx-auto" src="/img/pos-app/factura-pos.png" />
</div>