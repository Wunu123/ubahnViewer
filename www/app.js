console.log('app.js');
  var karte;
var initKarte= function(){
  var kartenoptionen = {
    center:{lat:48.2,lng:16.3},
    zoom:10
  }
  karte=new google.maps.Map($('#meineKarte').get(0), kartenoptionen);
}

document.addEventListener('deviceready', function(){
  // erst jetzt ist die App geladen und ready um was zu tun!

  console.log('DEVICE READY');

  //GMAP(Fullscreen)



  //U-bahnen
  var hs=[];
  $.ajax({
    url:'http://wifi.1av.at/527/ubahnen.php',
    method:'POST',
    success:function(response){
      //var response = JSON.parse(responseDaten);
      var hs = [];
      for(let i in response.U1.haltestellen ){
        hs.push({lat:response.U1.haltestellen[i].lat, lng:response.U1.haltestellen[i].lng});

      }
      console.log( response );
      console.log( response.U1 );
      console.log( response.U1.haltestellen );



        var metroPath = new google.maps.Polyline({
          path: hs,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        metroPath.setMap(karte);


    /*  for (i=0; i>response.length;i++){

          .html(response.orte)
          .appendTo( 'body')
      }*/
    }
});
  //U-Bahn haltestelle in GMAP mit Icons
  //Pfade zwischen Ubahn Haltestellen in richtiger Farbe
  //Klick auf Station > Info in Echtzeit (Wienerlinien)

  // #e20613
  // #a762a3
  // #ee7d00
  // #009540
  // #9d6930

});
