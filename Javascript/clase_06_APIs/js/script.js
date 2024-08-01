async function getRandomUser() {
  const res = await fetch(`https://randomuser.me/api/ `);

  const data = await res.json();

  console.log(res, "<---- RES");
  console.log(data, "<----- DATA");
  console.log(data.results[0].name.first, "<---- ruta hacia el primer nombre ");
  console.log(data.results[0].gender, "<---- ruta hacia el genero");

  /* -------- DOM + APIs -------- */

  const element = document.querySelector("#user");
  element.innerHTML = `El pais de origen es ${data.results[0].location.country}`;

  /* EJERCICIO */

  const name = document.querySelector(".name");
  const phone = document.querySelector(".phone");
  const city = document.querySelector(".city");
  const img = document.querySelector(".img");

  name.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
  phone.innerHTML = data.results[0].phone;
  city.innerHTML = `${data.results[0].location.city}, ${data.results[0].location.country}`;

  // img.src = data.results[0]["picture"]["large"];
  img.setAttribute("src", data.results[0]["picture"]["large"]);
  img.setAttribute("alt", data.results[0].name.first);
}

getRandomUser();

/* ----------- TRY CATCH ----------- */

async function getTryCatch() {
  try {
    const res = await fetch("https://NOEXISTO./");
    const data = await res.json();

    console.log(data, "<--- DATA EN TRY ");
  } catch (error) {
    console.log(error);
    console.error(error.message);
  }
}

getTryCatch();
