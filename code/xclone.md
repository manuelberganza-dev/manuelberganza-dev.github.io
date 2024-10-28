---
layout: layout-post.njk
title: Xclone App | Spring MVC, Spring Security, Spring Data JPA
---

<h2 class="text-center text-4xl font-bold mb-12">Xclone App - Spring MVC</h2>

<div class="mb-12">
    <p class="mb-8">
        Esta es una de las aplicaciones que me hizo disfrutar su construcción desde el diseño de la base de datos, su implementación en MySQL hasta la programación con Java y Spring con Spring MVC, permite crear post, dar me gustas, comentar, cambiar y guardar la foto de perfil y todo su sistema de Login.
    </p>

    <p class="bg-gray-700/10 p-4 rounded-md mb-8">
        <span class="font-bold text-xl">Tecnologías: </span> <span class="text-mb-blue-light"><strong>Spring MVC</strong></span>, <span class="text-mb-blue-light"><strong>Spring Data JPA</strong></span>, <span class="text-mb-blue-light"><strong>Spring Security</strong></span>, <span class="text-mb-blue-light"><strong>Spring Validation</strong></span>, <span class="text-mb-blue-light"><strong>MySQL</strong></span>, <span class="text-mb-blue-light"><strong>Thymeleaf</strong></span>, <span class="text-mb-blue-light"><strong>HTML</strong></span>, <span class="text-mb-blue-light"><strong>TailwindCSS</strong></span> y <span class="text-mb-blue-light"><strong>Javascript</strong></span>.
    </p>
    <img class="rounded-md shadow-lg mx-auto mb-12" src="/img/post/xclone-portada.jpeg" />
</div>

    
<div class="mb-12">
    <p class="mb-8">
        Podemos ver la estructura de directorios y algunos de sus controladores, donde manejo la validacion de los datos enviados desde un formulario utilizando <span class="text-mb-blue-light"><strong>@Valid</strong></span> y <span class="text-mb-blue-light"><strong>BindingResult</strong></span>.
    </p>
    <img class="rounded-md shadow-lg w-64 md:w-full mx-auto" src="/img/xclone-app/1-xclone.png" />
</div>

<div class="mb-12">
    <p class="mb-4">
        Controlador que procesa el formulario que crea cada post:
    </p>
    <img class="rounded-md shadow-lg w-64 md:w-full mx-auto" src="/img/xclone-app/3-xclone.png" />
</div>

<div class="mb-12">
    <p class="mb-8">
        Y, como podemos ver, que también cuenta con su adaptación a móvil siguiendo el patrón <span class="text-mb-blue-light"><strong>First Mobile</strong></span>, toda la interfaz construida con <span class="text-mb-blue-light"><strong>TailwindCSS</strong></span>
    </p>
    <img class="rounded-md shadow-lg w-48 md:w-80 mx-auto" src="/img/xclone-app/xclone-movil.jpeg" />
</div>