---
layout: layout-post.njk
title: Todo API REST | Spring, MySQL
---

<h2 class="text-center text-4xl font-bold mb-12">Todo App - API REST</h2>

<div class="mb-12 space-y-6">
    <p>
        <span class="text-mb-blue-light"><strong>Spring MVC</strong></span> no solo tiene un gran potencial para crear aplicaciones web renderizadas en el servidor, sino también para crear <span class="text-mb-blue-light"><strong>API REST</strong></span> siguiendo este patrón. 
    </p>

    <p class="bg-gray-700/10 p-4 rounded-md">
        <span class="font-bold text-xl">Tecnologías: </span> <span class="text-mb-blue-light"><strong>Spring MVC</strong></span>, <span class="text-mb-blue-light"><strong>Spring Data JPA</strong></span>, <span class="text-mb-blue-light"><strong>Spring Security</strong></span>, <span class="text-mb-blue-light"><strong>Spring Validation</strong></span>, <span class="text-mb-blue-light"><strong>MySQL</strong></span>
    </p>
    <img class="rounded-md shadow-lg mx-auto" src="/img/post/todo-portada.png" />
</div>

<div class="mb-12 space-y-6">
    <p>
        Esta API la diseñe para gestionar tareas y listas de pendientes, permitiendo a los usuarios organizar sus actividades diarias de manera estructurada y segura. 
    </p>
    <img class="rounded-md shadow-lg w-64 md:w-96 mx-auto" src="/img/todo-app/1-todo-api.png" />
</div>

<div class="mb-12 space-y-6">
    <p>
        La API proporciona funcionalidades para <span class="text-mb-blue-light"><strong>crear</strong></span>, <span class="text-mb-blue-light"><strong>actualizar</strong></span> y <span class="text-mb-blue-light"><strong>eliminar tareas</strong></span>, además de poder asignar prioridades y categorías a cada una de ellas, ayudando a los usuarios a mantener un control preciso sobre sus pendientes. 
    </p>
    <img class="rounded-md shadow-lg w-64 md:w-96 mx-auto" src="/img/todo-app/2-todo-api.png" />
</div>

<div class="mb-12 space-y-6">
    <p>
        Permitiendo la integración con el frontend para que acceden a la <span class="text-mb-blue-light"><strong>API de forma segura</strong></span>.
    </p>

    <p>
        TaskController expone los <span class="text-mb-blue-light"><strong>endpoints</strong></span> necesarios para crear, leer, actualizar y eliminar tareas (CRUD). Este controlador mapea las solicitudes a métodos específicos que gestionan cada acción.
    </p>

    <p>
        Para intereactuar con la base de datos el <span class="text-mb-blue-light"><strong>TaskRepository</strong></span> extiende <span class="text-mb-blue-light"><strong>JpaRepository</strong></span>, permitiendo realizar operaciones CRUD de manera directa sobre la entidad Task. Además, podemos definir métodos personalizados utilizando consultas con <span class="text-mb-blue-light"><strong>@Query</strong></span> hacia la base de datos, lo cual es útil para buscar tareas por estado por ejemplo.
    </p>
    <img class="rounded-md shadow-lg w-64 md:w-full mx-auto" src="/img/todo-app/3-todo-api.png" />
</div>

