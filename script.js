//your JS code here. If required.
const input = document.getElementById("fname");
    function capitalizeName() {
      input.value = input.value.toUpperCase();
    }
    input.addEventListener("blur", capitalizeName);