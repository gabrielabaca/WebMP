
    var buttonsPlanillas = [].slice.call(document.querySelectorAll('table tr'))
    var planillas = [];
    var efectivo = Number(0);
    var tarjeta = Number(0);
    var qr = Number(0);
    var form = document.querySelector('form');

    document.querySelector('form [type="submit"]').addEventListener('click', (event) =>{
        console.log(event)
    });
    
    Array.from(buttonsPlanillas).forEach(link => {
        link.addEventListener('click', (event) => {
                selectPlanilla(link)
            });
    });
    
    function selectPlanilla(tr){
        console.log(tr)
        if (planillas.find(val => val === tr.dataset.snPlanilla)){
            
            planillas = planillas.filter(item => item !== tr.dataset.snPlanilla)
            
            if(tr.dataset.efectivo){
                efectivo -= Number(tr.dataset.efectivo);
            }
            if(tr.dataset.tarjeta){
                tarjeta -= Number(tr.dataset.tarjeta);
            }
            if(tr.dataset.qr){
                qr -= Number(tr.dataset.qr);
            }

            tr.classList.remove('list-group-item-success')
            tr.querySelector('i').remove()
            document.getElementById(tr.dataset.snPlanilla).remove()
            document.querySelector('#totalEfectivo span').innerHTML = efectivo
            document.querySelector('#totalTarjeta span').innerHTML = tarjeta
            document.querySelector('#totalQr span').innerHTML = qr
            if (planillas.length==0){
                    document.querySelector('form [type="submit"]').setAttribute('disabled','')
                }
        }else{
            planillas.push(tr.dataset.snPlanilla)
            tr.classList.add('list-group-item-success')
            document.querySelector('form [type="submit"]').removeAttribute('disabled')
            var input = document.createElement('input')
            
            icon = document.createElement('i')
            icon.classList = 'fa fa-check text-green'
            input.setAttribute('type', 'number')
            input.setAttribute('value',tr.dataset.snPlanilla)
            input.setAttribute('id', tr.dataset.snPlanilla)
            input.setAttribute('hidden','')
            tr.querySelector('h5').appendChild(icon)

            if(tr.dataset.efectivo){
                efectivo += Number(tr.dataset.efectivo);
            }
            if(tr.dataset.tarjeta){
                console.log(tr.dataset.tarjeta)
                tarjeta += Number(tr.dataset.tarjeta);
            }
            if(tr.dataset.qr){
                qr += Number(tr.dataset.qr);
            }
            form.appendChild(input)

            document.querySelector('#totalEfectivo span').innerHTML = efectivo
            document.querySelector('#totalTarjeta span').innerHTML = tarjeta
            document.querySelector('#totalQr span').innerHTML = qr
        }
    }
