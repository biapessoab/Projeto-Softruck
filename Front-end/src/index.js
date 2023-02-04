import data from './frontend_data_gps.json' assert { type: "json" };

const { courses } = data

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlhcGVzc29hYiIsImEiOiJjbGRuZXR4Z2YwY3VoM3ZvNGpoeW1yZmZnIn0.IUZFAtmrh6HRT_62ziwTIQ';

let origin = [-73.97003, 40.67264];

let destination = [-73.97228, 40.67008];

function clicked1() {

    origin = [courses[0].stop_points.coordinates[0][0], courses[0].stop_points.coordinates[0][1]];
    destination = [courses[0].stop_points.coordinates[courses[0].stops.valueOf() - 1][0], courses[0].stop_points.coordinates[courses[0].stops.valueOf() - 1][1]];

    let map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [origin[0], origin[1]],
        zoom: 16
    });
    // Load an image from an external URL.
    map.loadImage('car.png', (error, image) => {
        if (error) throw error;
        // Add the loaded image to the style's sprite with the ID 'kitten'.
        map.addImage('pngcar', image);
    });

    let route = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'color': 'red'
                },
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [-73.97003, 40.67264],
                        [-73.96985, 40.67235],
                        [-73.96974, 40.67191],
                        [-73.96972, 40.67175],
                        [-73.96975, 40.67154],
                        [-73.96987, 40.67134],
                        [-73.97015, 40.67117],
                        [-73.97045, 40.67098],
                        [-73.97064, 40.67078],
                        [-73.97091, 40.67038],
                        [-73.97107, 40.67011],
                        [-73.97121, 40.66994],
                        [-73.97149, 40.66969],
                        [-73.97169, 40.66985],
                        [-73.97175, 40.66994],
                        [-73.97191, 40.66998],
                        [-73.97206, 40.66998],
                        [-73.97228, 40.67008],
                        [-73.97003, 40.67264],
                        [-73.96985, 40.67235],
                        [-73.96974, 40.67191],
                        [-73.96972, 40.67175],
                        [-73.96975, 40.67154],
                        [-73.96987, 40.67134],
                        [-73.97015, 40.67117],
                        [-73.97045, 40.67098],
                        [-73.97064, 40.67078],
                        [-73.97091, 40.67038],
                        [-73.97107, 40.67011],
                        [-73.97121, 40.66994],
                        [-73.97149, 40.66969],
                        [-73.97169, 40.66985],
                        [-73.97175, 40.66994],
                        [-73.97191, 40.66998],
                        [-73.97206, 40.66998],
                        [-73.97228, 40.67008],
                        [-73.97003, 40.67264],
                        [-73.96985, 40.67235],
                        [-73.96974, 40.67191],
                        [-73.96972, 40.67175],
                        [-73.96975, 40.67154],
                        [-73.96987, 40.67134],
                        [-73.97015, 40.67117]
                    ],
                }
            }
        ]
    };

    document.write(`${route[0].features.geometry.coordinates[i][0]} + ${route[0].features.geometry.coordinates[i][1]}`)

    for (let i = 0; i < courses[0].gps_count; i++) {
        route.features[1].geometry.coordinates[i][0] = (courses[0].gps[i].longitude)
        route.features[1].geometry.coordinates[i][1] = (courses[0].gps[i].latitude)
        document.write(`${route.features[1].geometry.coordinates[i][0]} + ${route.features.geometry.coordinates[i][1]}`)
    }

    // for (let i = 0; i < courses[0].gps_count; i++) {
    //     document.write(`${route.features[1].geometry.coordinates[i][0]} + ${route.features.geometry.coordinates[i][1]}`)
    // }

    // document.write(origin)
    // document.write(destination)

}

function clicked2() {

    origin = [courses[1].stop_points.coordinates[0][0], courses[1].stop_points.coordinates[0][1]];
    destination = [courses[1].stop_points.coordinates[courses[1].stops.valueOf() - 1][0], courses[1].stop_points.coordinates[courses[1].stops.valueOf() - 1][1]];

    document.write(origin)
    document.write(destination)

    // for (let i = 0; i < courses[1].gps_count; i++) {
    //     document.writeln(courses[1].gps[i].longitude + " " + courses[1].gps[i].latitude)
    //     document.writeln()
    // }
}

function clicked3() {

    origin = [courses[2].stop_points.coordinates[0][0], courses[2].stop_points.coordinates[0][1]];
    destination = [courses[2].stop_points.coordinates[courses[2].stops.valueOf() - 1][0], courses[2].stop_points.coordinates[courses[2].stops.valueOf() - 1][1]];

    document.write(origin)
    document.write(destination)

    // for (let i = 0; i < courses[2].gps_count; i++) {
    //     document.writeln(courses[2].gps[i].longitude + " " + courses[2].gps[i].latitude)
    //     document.writeln()
    // }
}

function clicked4() {

    origin = [courses[3].stop_points.coordinates[0][0], courses[3].stop_points.coordinates[0][1]];
    destination = [courses[3].stop_points.coordinates[courses[3].stops.valueOf() - 1][0], courses[3].stop_points.coordinates[courses[3].stops.valueOf() - 1][1]];

    document.write(origin)
    document.write(destination)

    // for (let i = 0; i < courses[3].gps_count; i++) {
    //     document.writeln(courses[3].gps[i].longitude + " " + courses[3].gps[i].latitude)
    //     document.writeln()
    // }
}

function clicked5() {

    origin = [courses[4].stop_points.coordinates[0][0], courses[4].stop_points.coordinates[0][1]];
    destination = [courses[4].stop_points.coordinates[courses[4].stops.valueOf() - 1][0], courses[4].stop_points.coordinates[courses[4].stops.valueOf() - 1][1]];

    document.write(origin)
    document.write(destination)

    // for (let i = 0; i < courses[4].gps_count; i++) {
    //     document.writeln(courses[4].gps[i].longitude + " " + courses[4].gps[i].latitude)
    //     document.writeln()
    // }
}

// routeOne.on('click', clicked1)
const route = document.getElementById("route-2") 
route.onclick = clicked2
