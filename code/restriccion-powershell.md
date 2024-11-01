---
layout: layout-post.njk
title: Restricción para ejecutar Script en PowerShell
---

<h2 class="text-center text-4xl font-bold mb-8">Restricción para ejecutar Scripts en PowerShell</h2>

<div class="mb-6 space-y-6">
    <p>
        Para poder corregir la restricción que trae por defecto la PowerShell de Windows para ejecutar Script, debemos realizar:
    </p>

    <ul>
        <li>
            1- Abrimos la consola PowerShell como administrador y comprobamos el error escribiendo <span class="text-mb-blue-light"><strong>«Get-ExecutionPolicy»</strong></span>.
        </li>
        <li>
            2- <span class="text-mb-blue-light"><strong>SOLUCIÓN</strong></span>: Escribimos en la consola <span class="text-mb-blue-light"><strong>«Set-ExecutionPolicy Unrestricted»</strong></span>.
        </li>
    </ul>

    <div class="w-fit mx-auto">
        <img class="w-52 rounded-md" src="/img/tech/windows.svg">
        <h2 class="text-center font-bold text-xl mt-2">Windows 10 y 11</h2>
    </div>

</div>
