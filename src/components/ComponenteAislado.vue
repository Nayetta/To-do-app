<template></template>

<script>
import { createClient } from "@supabase/supabase-js";
import { ref } from "@vue/reactivity";

// Una consulta simple para comprobar que la base de datos funciona
const asupabase = createClient(
  "https://mseolkbinssvckklhwwe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zZW9sa2JpbnNzdmNra2xod3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA4MTUwMzcsImV4cCI6MTk3NjM5MTAzN30.YhEFFDCzq9tETJ7jCRdNlTNCWdcCC8cLpinQtnHdKOw"
);

//Creamos "la caja" donde meteremos los datos.
const articles = [];

// Usamos lo que hemos definido arriba como "supabase" para pedir información al servidor.
// From dirá cuál es la tabla de la que cogemos los datos
// Select nos devolverá todos los valores encontrados (porque estamos usando *)
// la línea de eq, si la pusieramos, nos devolvería el id 1 (por como está siendo usada)
//then -> cuando recibamos respuesta del servidor llamamos a la función generateArticleList
asupabase
  .from("tasks")
  .select("*")
  .then((response) => {
    generateArticleList(response);
  });

// Este es un ejemplo de función para extraer datos de una tabla. Esta función es llamada en la función de arriba. Lo que hace es colocarnos en la siguiente posición libre del array (en nuestro caso, la 0) toda la información que hemos recibido.
// Para acceder a title, debemos acceder primero a la posición del elemento en la tabla
function generateArticleList(articlesRaw) {
  articles.push(articlesRaw.data); // Todos los datos se introducen en articles[0] porque estamos usando Push()
  console.log(articles[0][0].title);
  console.log(articlesRaw.data);
}
</script>

<style></style>
