<script>
    function scrollDown() {
      // Selecciona el elemento al que se hace scroll
      var targetElement = document.getElementById('contacto'); 

      // Se Utiliza scrollIntoView para hacer scroll suave hacia el elemento
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  </script>
