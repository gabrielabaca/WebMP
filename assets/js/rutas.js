
var map;

function initMap() {
    const listgrup = document.querySelector('.list-group');
    var activeinfowindows = ''
    var coords = {latitude: markers[0].lat, longitude:markers[0].long}
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
      coords.latitude=pos.coords.latitude
      coords.longitude=pos.coords.longitude
      })
    } 

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: coords.latitude, lng: coords.longitude},
      zoom:15
    });

    const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
    };
    const uMarker = new google.maps.Marker({
      position: new google.maps.LatLng(coords.latitude, coords.longitude),
      map: map,
      label: {
        text: "\uea1d", // codepoint from https://fonts.google.com/icons
        fontFamily: "Material Icons",
        color: "#ffffff",
        fontSize: "30px",
      },
      zIndex: 999,
      shape: shape
      
      })
    
    
    for (let i = 0; i < markers.length; i++) {
      var divGruopItem = document.createElement('div')
      var div = document.createElement('div')
      var h5 = document.createElement('h5')
      var a = document.createElement('a')
      var p = document.createElement('p')
      var aVisitar = document.createElement('a')

      divGruopItem.classList = 'list-group-item'
      div. classList = 'd-flex w-100 justify-content-between'
      h5.classList = 'mb-1 fw-bold'

      h5.innerHTML = markers[i].comercio
      a.innerHTML = '<span><i class="fa fa-light fa-map-location-dot"></i></span> Abrir Map'
      p.innerHTML = 'Direccion: ##########'
      aVisitar.innerHTML = '<span><i class="fa fa-thin fa-square-poll-horizontal"></i></span> Visitar Comercio'

      a.href = 'https://www.google.com/maps/search/?api=1&query=' + markers[i].lat + '%2C' + markers[i].long
      a.setAttribute('target','_blank')
      aVisitar.href = '/visitarComercio.html'
      divGruopItem.appendChild(div)
      div.appendChild(h5)
      divGruopItem.appendChild(p)
      divGruopItem.appendChild(a)
      divGruopItem.appendChild(aVisitar)

      listgrup.appendChild(divGruopItem)
      
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(markers[i].lat, markers[i].long),
      map: map,
    });


    const infowindow = new google.maps.InfoWindow({
      content: divGruopItem
        // content: "<div class='map-info'><h5 class='fw-bold'>" + markers[i].comercio +  "</h5><p>Direcion: ####### </p><a target='_blank' href='https://www.google.com/maps/search/?api=1&query=" + markers[i].lat + "%2C"+ markers[i].long +"'><span><i class='fa fa-light fa-map-location-dot'></i></span> Abrir en Map</a></div>"
    });

    marker.addListener("click", () => {
      if(activeinfowindows){
        activeinfowindows.close()
      }
      activeinfowindows = infowindow
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
    

    }
   
  }