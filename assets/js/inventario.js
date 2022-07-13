
        var linksDevolver = [].slice.call(document.querySelectorAll('[data-modal="showDevolver"]'))
        const modalDevolver = new bootstrap.Modal('#modalDevolverInv')
        
        var buttonsDevolverInventario = [].slice.call(document.querySelectorAll('#modalDevolverInv button'))
        var buttonsRecibirInventario = [].slice.call(document.querySelectorAll('#modalRecibirInv button'))
        var listSnDevolver = [];
        var listSnRecibir = [];

        Array.from(buttonsDevolverInventario).forEach(button => {
            if (button.dataset.invSn) {
                
                button.addEventListener('click', (event) => {
                    devolverInventario(button)
                })
            }
        });

        Array.from(buttonsRecibirInventario).forEach(button => {
            if (button.dataset.invSn) {
                
                button.addEventListener('click', (event) => {
                    recibirInventario(button)
                })
            }
        })

        function devolverInventario(button){
            
            if(Array.from(button.classList).find(val => val == 'list-group-item-success')){
                button.classList.remove('list-group-item-success')
                listSnDevolver = listSnDevolver.filter(item => item !== button.dataset.invSn)
                document.getElementById(button.dataset.invSn).remove()
                
                if (listSnDevolver.length==0){
                    document.querySelector('#modalDevolverInv [type="submit"]').setAttribute('disabled','')
                }
                
            }else{
                document.querySelector('#modalDevolverInv [type="submit"]').removeAttribute('disabled')
                button.classList.add('list-group-item-success')
                listSnDevolver.push(button.dataset.invSn)
                input = document.createElement('input')
                input.setAttribute('id',button.dataset.invSn)
                input.setAttribute('value',button.dataset.invSn)
                input.setAttribute('type', 'text')
                input.setAttribute('hidden','')
                document.querySelector('#modalDevolverInv form').appendChild(input)
                
            }
        }

        function recibirInventario(button){
            
            if(Array.from(button.classList).find(val => val == 'list-group-item-success')){
                button.classList.remove('list-group-item-success')
                listSnRecibir = listSnRecibir.filter(item => item !== button.dataset.invSn)
                document.getElementById(button.dataset.invSn).remove()
                
                if (listSnRecibir.length==0){
                    document.querySelector('#modalRecibirInv [type="submit"]').setAttribute('disabled','')
                }
                
            }else{
                document.querySelector('#modalRecibirInv [type="submit"]').removeAttribute('disabled')
                button.classList.add('list-group-item-success')
                listSnRecibir.push(button.dataset.invSn)
                input = document.createElement('input')
                input.setAttribute('id',button.dataset.invSn)
                input.setAttribute('value',button.dataset.invSn)
                input.setAttribute('type', 'text')
                input.setAttribute('hidden','')
                document.querySelector('#modalRecibirInv form').appendChild(input)
                
            }
        }