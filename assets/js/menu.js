var buttons = [].slice.call(document.querySelectorAll('button'))
    
    Array.from(buttons).forEach(link => {
      link.addEventListener('click', (event) => {
            event.preventDefault();
            switch(link.dataset.link){
              case 'VisitarComercion' :
                window.location.href = "/buscarComercio.html";
                break;
              case 'Rutas':
              
                break;
              case 'NuevoComercio':
                window.location.href = '/visitarComercio.html'
                break;
              case 'Rendicion':
                window.location.href = '/rendicion.html'
                break;
              case 'Inventario':
                window.location.href = '/inventario.html'
                break;
              case 'CerrarSesion':
                console.log('Cerrar Sesion')
                break;
              default:
                alert('AGREGAR EL BOTON A LINKS')

            }
            
        });
    })