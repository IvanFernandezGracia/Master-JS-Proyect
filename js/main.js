$(document).ready(function () {
  var logo = document.querySelector("#logo");

  // Mouse over
  logo.addEventListener("mouseover", function () {
    logo.style.background = "blue";
    logo.style.color = "white";
  });

  // Mouseout
  logo.addEventListener("mouseout", function () {
    logo.style.background = "#ccc";
    logo.style.color = "black";
  });

  // Selector de tema
  var theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  // Scroll arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );

    return false;
  });

  if (window.location.href.indexOf("index") > -1) {
    // Posts
    var posts = [
      {
        title: "Prueba de titulo 1",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.",
      },
      {
        title: "Prueba de titulo 2",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.",
      },
      {
        title: "Prueba de titulo 3",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.",
      },
      {
        title: "Prueba de titulo 4",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.",
      },
      {
        title: "Prueba de titulo 5",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.",
      },
      {
        title: "Prueba de titulo 6",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.",
      },
    ];

    posts.forEach((item, index) => {
      var post = `
          <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
          </article>
        `;

      $("#posts").append(post);
    });

    var allTitlePost = document.querySelectorAll(".post h2");
    for (let valor in allTitlePost) {
      if (typeof allTitlePost[valor].textContent == "string") {
        allTitlePost[valor].style.color = "red";
      }
    }

    // Selectores de etiqueta
    var parrafos = $("p").css("cursor", "pointer");

    parrafos.mouseover(function () {
      var that = $(this);
      if (!that.hasClass("grande")) {
        that.addClass("grande");
        that.css("color", "red");
      }
    });
    parrafos.mouseout(function () {
      var that = $(this);
      if (that.hasClass("grande")) {
        that.removeClass("grande");
        that.css("color", "black");
      }
    });

    fakeLogin();

    // Slider
    $(".galeria").bxSlider({
      mode: "fade",
      captions: false,
      slideWidth: 1200,
      responsive: true,
      pager: true,
    });

    // efectos y animaciones
    setInterval(() => {
      $(".galeria").fadeToggle("slow");
    }, 1500);
  }

  if (window.location.href.indexOf("about") > -1) {
    // Acordeon
    $("#acordeon").accordion();
  }

  if (window.location.href.indexOf("reloj") > -1) {
    // Reloj
    setInterval(function () {
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  if (window.location.href.indexOf("contact") > -1) {
    //Formulario
    var formulario = document.querySelector("#form_contact");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      var nombre = $("form input[name='name']")[0].value;
      var apellidos = $("form input[name='surname']")[0].value;
      var edad = $("form input[name='years']")[0].value;

      var p_nombre = document.querySelector("#p_nombre span");
      var p_apellidos = document.querySelector("#p_apellidos span");
      var p_edad = document.querySelector("#p_edad span");

      p_nombre.innerHTML = nombre;
      p_apellidos.innerHTML = apellidos;
      p_edad.innerHTML = edad;

      box_dashed.style.display = "block";
    });

    // Validación
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });

    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true,
    });

    fakeLogin();
  }
});

var fakeLogin = () => {
  // Login falso
  $("#login form").submit(function () {
    var info_login = {
      nombre: $("#login_name").val(),
      email: $("#login_email").val(),
      web: $("#login_email").val(),
    };
    localStorage.setItem("jsonLogin", JSON.stringify(info_login));
  });

  var form_name = JSON.parse(localStorage.getItem("jsonLogin"));

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");

    about_parrafo.html(
      "<br><strong>Bienvenido, " + form_name.nombre + "</strong> "
    );
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

    // fetch("https://reqres.in/api/users/2")
    //   .then((data) => data.json())
    //   .then((user) => addLoginHtml(user));

    // $.get("https://reqres.in/api/users/2", {}, function (response) {
    //   addLoginHtml(response)
    // });

    $.ajax({
      type: "GET",
      url: "https://reqres.in/api/users/2",
      beforeSend: function () {
        console.log("Pidiendo Usuario Informacion...");
      },
      success: function (response) {
        addLoginHtml(response)
        console.log("Respuesta Informacion  usuario...");
      },
      error: function () {
        console.log("A ocurrido un error");
      },
      timeout: 1000,
    });

    let addLoginHtml = (user) => {
      let nombre = document.createElement("h4");
      let avatar = document.createElement("img");

      nombre.innerHTML = user.data.first_name + " " + user.data.last_name;
      avatar.src = user.data.avatar;
      avatar.width = "100";

      about_parrafo.append(nombre);
      about_parrafo.append(avatar);
    };

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }
};
