//Mostrar todos los amigos
let $list = document.getElementById("lista");
let $button = document.getElementById("boton");

$button.addEventListener("click", () => {
  /* axios({
    method: "GET",
    url: "http://localhost:5000/amigos",
  })
    .then((respuesta) => {
      $list.innerHTML = "";
      for (const elemento of respuesta.data) {
        let $li = document.createElement("li");
        $li.innerHTML = elemento.name;
        $list.appendChild($li);
      }
    })
    .catch((error) => {
      console.log(error);
    }); */
  axios
    .get("http://localhost:5000/amigos")
    .then((amigos) => {
      $list.innerHTML = "";
      for (const elemento of amigos.data) {
        let $li = document.createElement("li");
        $li.innerHTML = elemento.name;
        $list.appendChild($li);
      }
    })
    .catch((error) => ($list.innerHTML = `${error}`));
});

// Buscar Amigo
let $input = document.getElementById("input");
let $botonBuscar = document.getElementById("search");
let $span = document.getElementById("amigo");

$botonBuscar.addEventListener("click", () => {
  /*  axios({
    method: "GET",
    url: "http://localhost:5000/amigos",
  })
    .then((respuesta) => {
      for (const elemento of respuesta.data) {
        if (elemento.name == $input.value) {
          $span.innerHTML = elemento.name;
          return;
        }
      }
    })
    .catch((error) => ($span.innerHTML = error)); */
  axios
    .get("http://localhost:5000/amigos")
    .then((amigos) => {
      for (const elemento of amigos.data) {
        if (elemento.name == $input.value) {
          $span.innerHTML = elemento.name;
          return;
        }
        $span.innerHTML = `${$input.value} no se encuentra en tu lista de amigos`;
      }
    })
    .catch((error) => console.log(error));
  setTimeout(() => {
    $span.innerHTML = "";
  }, 10000);
});

// Delete

let $inputDelete = document.getElementById("inputDelete");
let $botondelete = document.getElementById("delete");
let $spandelete = document.getElementById("sucess");

$botondelete.addEventListener("click", () => {
  let friend = null;
  axios.get("http://localhost:5000/amigos/").then((respuesta) => {
    for (const elemento of respuesta.data) {
      if (elemento.name == $inputDelete.value) {
        axios
          .delete(`http://localhost:5000/amigos/${elemento.id}`)
          .then((respuesta) => {
            $spandelete.innerHTML = `Borrado ${elemento.name}`;
            console.log(respuesta);
          });
      }
    }
  });
  setTimeout(() => {
    $spandelete.innerHTML = "";
  }, 10000);
});
