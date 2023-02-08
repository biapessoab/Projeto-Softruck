import data from '../frontend_data_gps.json' assert { type: "json" };

const { courses } = data

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlhcGVzc29hYiIsImEiOiJjbGRuZXR4Z2YwY3VoM3ZvNGpoeW1yZmZnIn0.IUZFAtmrh6HRT_62ziwTIQ';

const createCarRoute = (route) => ({
    'type': 'geojson',
    'data': route
})

function createRoute(coordinates) {
    return {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'color': '#F7455D'
                },
                'geometry': {
                    'type': 'LineString',
                    coordinates
                }
            }
        ]
    }
}

let map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-46.65, -23.55], // starting position [lng, lat]
    zoom: 10 // starting zoom
    });



function currentRoute(x){
    let selectedCourse = courses[x]

    let {
        stop_points: {
            coordinates
        }
    } = selectedCourse

    const start = coordinates[0];

    const end = coordinates.at(-1);

    const [startLongitude, startLatitude] = start

    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [startLongitude, startLatitude],
        zoom: 14
    });

    map.loadImage('../assets/car.png', (error, image) => {
        if (error) throw error;
        map.addImage('pngcar', image);
    });

    const point = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': [startLongitude, startLatitude]
                }
            }
        ]
    };

    let courseCoordinates = selectedCourse.gps.map(it => [it.longitude, it.latitude])
    courseCoordinates.unshift([startLongitude, startLatitude])
    courseCoordinates.push([end[0], end[1]])
    console.log(courseCoordinates)

    let route = createRoute(courseCoordinates);

    const lineDistance = turf.length(route.features[0]);

    const arc = [];

    // Number of steps to use in the arc and animation, more steps means
    // a smoother arc and animation, but too many steps will result in a
    // low frame rate
    const steps = 500;

    // Draw an arc between the `origin` & `destination` of the two points
    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
        const segment = turf.along(route.features[0], i);
        arc.push(segment.geometry.coordinates);
    }

    // Update the route with calculated arc coordinates
    route.features[0].geometry.coordinates = arc;

    let counter = 0;
    let carRoute = createCarRoute(route)

    map.on('load', () => {
        map.addSource('route', carRoute)

        map.addSource('point', {
            'type': 'geojson',
            'data': point
        });

        map.addLayer({
            'id': 'route',
            'source': 'route',
            'type': 'line',
            'paint': {
                'line-width': 3,
                'line-color': '#F7455D'
            }
        });

        map.addLayer({
            'id': 'point',
            'source': 'point',
            'type': 'symbol',
            'layout': {
                // This icon is a part of the Mapbox Streets style.
                // To view all images available in a Mapbox style, open
                // the style in Mapbox Studio and click the "Images" tab.
                // To add a new image to the style at runtime see
                // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
                'icon-image': 'pngcar',
                'icon-size': 0.4,
                'icon-rotate': ['get', 'bearing'],
                'icon-rotation-alignment': 'map',
                'icon-allow-overlap': true,
                'icon-ignore-placement': true
            }
        });

        function animate() {
            const start =
                route.features[0].geometry.coordinates[
                counter >= steps ? counter - 1 : counter
                ];
            const end =
                route.features[0].geometry.coordinates[
                counter >= steps ? counter : counter + 1
                ];
            if (!start || !end) return;

            // Update point geometry to a new position based on counter denoting
            // the index to access the arc
            point.features[0].geometry.coordinates =
                route.features[0].geometry.coordinates[counter];

            // Calculate the bearing to ensure the icon is rotated to match the route arc
            // The bearing is calculated between the current point and the next point, except
            // at the end of the arc, which uses the previous point and the current point
            point.features[0].properties.bearing = turf.bearing(
                turf.point(start),
                turf.point(end)
            );

            // Update the source with this new data
            map.getSource('point').setData(point);

            // Request the next frame of animation as long as the end has not been reached
            if (counter < steps) {
                requestAnimationFrame(animate);
            }

            counter = counter + 1;
        }

        document.getElementById('replay').addEventListener('click', () => {
            // Set the coordinates of the original point back to origin
            point.features[0].geometry.coordinates = courseCoordinates[0];

            // Update the source layer
            map.getSource('point').setData(point);

            // Reset the counter
            counter = 0;

            // Restart the animation
            animate(counter);
        });

        // Start the animation
        animate(counter);
    });
}


function changeRoute(index) {
    currentRoute(index - 1)
}

const route1 = document.getElementById("route1")
route1.onclick = changeRoute(1)
const route2 = document.getElementById("route2")
route2.onclick = changeRoute(2)
const route3 = document.getElementById("route3") 
route3.onclick = changeRoute(3)
const route4 = document.getElementById("route4") 
route4.onclick = changeRoute(4)
const route5 = document.getElementById("route5") 
route5.onclick = changeRoute(5)
