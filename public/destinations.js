mapboxgl.accessToken='pk.eyJ1IjoiY29zbWluMjgwMiIsImEiOiJjbGJmMmVyMjEwMjJzM29wZHczN2JuZDQyIn0.TqZbu8NH54R_M37w02mVwA'

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [15.2551, 48.5620],
    zoom: 4
});

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
    color: 'orange',
    },
    mapboxgl: mapboxgl,
    });
     
map.addControl(geocoder, 'top-left');

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
}));

const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
});
map.addControl(scale);
scale.setUnit('metric');



map.doubleClickZoom.enable();

const popupParis = new mapboxgl.Popup({ offset: 25 }).setText(
    "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
    );

const popupLondon = new mapboxgl.Popup({ offset: 25 }).setText(
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
        );

const popupRome = new mapboxgl.Popup({ offset: 25 }).setText(
        "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale."
        );

const popupPrague = new mapboxgl.Popup({ offset: 25 }).setText(
        "Prague, capital city of the Czech Republic, is bisected by the Vltava River. Nicknamed “the City of a Hundred Spires,” it's known for its Old Town Square, the heart of its historic core, with colorful baroque buildings, Gothic churches and the medieval Astronomical Clock, which gives an animated hourly show. Completed in 1402, pedestrian Charles Bridge is lined with statues of Catholic saints."
        ); 
        
const popupVienna = new mapboxgl.Popup({ offset: 25 }).setText(
        "Vienna, Austria’s capital, lies in the country’s east on the Danube River. Its artistic and intellectual legacy was shaped by residents including Mozart, Beethoven and Sigmund Freud. The city is also known for its Imperial palaces, including Schönbrunn, the Habsburgs’ summer residence. In the MuseumsQuartier district, historic and contemporary buildings display works by Egon Schiele, Gustav Klimt and other artists."
        );

const popupDubai = new mapboxgl.Popup({ offset: 25 }).setText(
        "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks."
        );

const popupIstanbul = new mapboxgl.Popup({ offset: 25 }).setText(
        "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics."
        );



const markerParis = new mapboxgl.Marker()
    .setLngLat([2.35, 48.85])
    .setPopup(popupParis)
    .addTo(map);

const markerLondon = new mapboxgl.Marker()
    .setLngLat([0.11, 51.50])
    .setPopup(popupLondon)
    .addTo(map);

const markerRome = new mapboxgl.Marker()
    .setLngLat([12.49, 41.90])
    .setPopup(popupRome)
    .addTo(map);

const markerPrague = new mapboxgl.Marker()
    .setLngLat([14.43, 50.07])
    .setPopup(popupPrague)
    .addTo(map);

const markerVienna = new mapboxgl.Marker()
    .setLngLat([16.37, 48.20])
    .setPopup(popupVienna)
    .addTo(map);

const markerIstanbul = new mapboxgl.Marker()
    .setLngLat([28.97, 41.0082])
    .setPopup(popupIstanbul)
    .addTo(map);

const markerDubai = new mapboxgl.Marker()
    .setLngLat([55.27, 25.20])
    .setPopup(popupDubai)
    .addTo(map);


