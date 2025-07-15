function login() {
      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("error-msg");

      if (user === "" || pass === "") {
        errorMsg.style.display = "block";
      } else {
        errorMsg.style.display = "none";
        alert("Login bem-sucedido!");
        // Nessa parte o Back-End pode usar para validar :)
      }
    }