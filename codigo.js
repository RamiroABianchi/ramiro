<script>
    function scrollDown() {
      // Selecciona el elemento al que quieres hacer scroll
      var targetElement = document.getElementById('elementoDestino'); // Cambia 'elementoDestino' con el ID de tu elemento de destino

      // Utiliza scrollIntoView para hacer scroll suave hacia el elemento
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  </script>