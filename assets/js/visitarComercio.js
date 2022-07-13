
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    const modalInventario = new bootstrap.Modal('#modalInventario');
    var sumarSn = document.getElementById('sumarSn');
    var buttonsInventario = [].slice.call(document.querySelectorAll('#modalInventario button'))
    var snContainer = document.getElementById('snContainer');
    var snArray = []
    var btnOkInv = document.getElementById('btnInv')
    sumarSn.addEventListener('click', (event) => {
        event.preventDefault()
        modalInventario.show()
    })

    btnOkInv.addEventListener('click', () => {inventarioMngr()})

    Array.from(buttonsInventario).forEach(button => {
            if (button.dataset.invSn) {
                
                button.addEventListener('click', (event) => {
                    if(Array.from(button.classList).find(val => val == 'list-group-item-success')){
                        button.classList.remove('list-group-item-success')
                        snArray = snArray.filter(item => item != button.dataset.invSn)
                        
                    }else{
                        snArray.push(button.dataset.invSn)
                        button.classList.add('list-group-item-success')
                    };
                })
            }
    });



    var imgList = document.getElementById('imgList');
    var inputImg = document.getElementById('file_1')
    var inputs = []
    var validIds = new Array('file_1','file_2','file_3','file_4','file_5')

    var switchNoContacto = document.getElementById('switchNoContacto');
    var encuesta = document.getElementById('encuesta')
    var boxComentario = document.getElementById('boxComentario')

    switchNoContacto.addEventListener('change', function() {
        if (this.checked) {
            encuesta.remove()
        } else {
            boxComentario.parentNode.insertBefore(encuesta, boxComentario)
        }
    });

    function newImg() {
        var [img] = inputImg.files

        if(img){
                if (!(inputImg.getAttribute('id') in inputs) && inputs.length < 5){
                   
                    inputs.push(inputImg.getAttribute('id'))

                    var newId = []
                    newId = inputs.filter(item => {
                        return validIds.filter(val => val != item ? true : false)
                    })

                    var imgItem = document.createElement('li');
                    var divName = document.createElement('div');
                    var divImg = document.createElement('div');
                    var input = document.createElement('input');
                    var imgOb = document.createElement('img');
                    var a = document.createElement('a')

                    inputImg.classList.add('d-none')
                    input.classList = 'form-control'
                    input.setAttribute('type','file')
                    input.setAttribute('id', validIds[newId.length])
                    input.setAttribute("accept","image/*")
                    input.setAttribute('onchange', 'newImg()')
                    document.querySelector('#imgInputs').appendChild(input)

                    divImg.classList = 'ms-3 col-12 justify-content-center';
                    divName.classList = 'badge bg-primary text-wrap';
                    divName.innerHTML = img.name;
                    imgOb.src = URL.createObjectURL(img)
                    imgOb.classList = 'img-fluid img-input';
                    imgItem.classList = 'list-group-item d-flex justify-content-center align-items-center';
                    imgItem.setAttribute('id', 'img_' + inputImg.getAttribute('id'))
                    a.href = ''
                    a.classList = 'btn btn-danger d-block'
                    a.setAttribute('onClick','delImg(event)')
                    a.setAttribute('data-input', inputImg.getAttribute('id'))
                    a.innerHTML = "Borrar"

                    divImg.appendChild(divName)
                    divImg.appendChild(imgOb)
                    divImg.appendChild(a)
                    imgItem.appendChild(divImg) 
                    imgList.appendChild(imgItem)

                    inputImg = document.getElementById(validIds[newId.length])
                    
                }
        }
    };

    function delImg(event) {

        event.preventDefault()
        var input = document.querySelector('#' + event['target'].getAttribute('data-input'));
        var img = document.querySelector('#' +'img_' + event['target'].getAttribute('data-input'));

        inputs = inputs.filter(item => item !== event['target'].getAttribute('data-input'))

        input.classList.remove('d-none');
        img.remove();
        inputImg.remove();
        inputImg = input;
        if (inputs.length == 0){
            inputImg.remove()
            var input = document.createElement('input');
            
            input.classList = 'form-control'
            input.setAttribute('type','file')
            input.setAttribute('id', 'file_1')
            input.setAttribute('onchange', 'newImg()')
            document.querySelector('#imgInputs').appendChild(input)
            inputImg = document.getElementById('file_1')
        }

    };
    
    function inventarioMngr(event){
        if(event){
            event.preventDefault()
            modalInventario.show()
        }else{
            snContainer.innerHTML = ''
        snArray.map(item => {
            
            var a = document.createElement('a')
            var icon = document.createElement('i')
            var input = document.createElement('input')
            var span = document.createElement('span');

            a.classList = 'btn btn-success d-inline rounded';
            a.innerHTML = item;
            a.setAttribute('onClick',"inventarioMngr(event)");
            icon.classList = 'fa fa-xmark-circle';
            input.setAttribute('value', item);
            input.setAttribute('name',('addSm-'+item));
            input.classList.add('d-none');
            span.appendChild(icon)
            a.appendChild(span)
            snContainer.appendChild(a)
            snContainer.appendChild(input)
        })

        modalInventario.hide()
        
    }
    }