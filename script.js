require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView){
   let map1 = new Map({basemap:"topo"});
   let map2 = new Map({basemap:"streets"});
      
   let mapContainer = new MapView({
    container: "map",
    map: map1,
    zoom: 10,
    center: [-110.5833, 44.4167]
 })
    function zmienMape(MapView) {
     mapContainer = new MapView({
        container: "map",
        map: map2,
        zoom: 10,
        center: [22.50, 51.22]
    })
}
  
    
   })

