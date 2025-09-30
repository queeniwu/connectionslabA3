
var map = L.map('map', {
            center: [40.7263, -73.98600],
            zoom: 15,
            minZoom: 14, // Minimum zoom level
            maxZoom: 20, // Maximum zoom level
            maxBounds: [
                [40.6958, -74.0563], // Southwest coordinates
                [40.7531, -73.9268]  // Northeast coordinates
            ]
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
    }).addTo(map);

        
var sidewalks = {
            "type": "FeatureCollection",
            "features": [
                // 2nd Ave
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98490081184029, 40.73222747331209],
                            [-73.98527896956669, 40.7316789142922]
                        ]
                    },
                    "properties": {
                        "name": "E2nd Ave, 14-13",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98514626653014, 40.73232261623263],
                            [-73.9855137318729, 40.73177991504733]
                        ]
                    },
                    "properties": {
                        "name": "W2nd Ave, 14-13",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.985371833167, 40.73154197872654],
                            [-73.98575332687632, 40.731039879241415]
                        ]
                    },
                    "properties": {
                        "name": "E2nd Ave, 13-12",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98562662956498, 40.731647131905376],
                            [-73.98600423592899, 40.73113957157072]
                        ]
                    },
                    "properties": {
                        "name": "W2nd Ave, 13-12",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.9858537199781, 40.73090864806279],
                            [-73.9862201547252, 40.73040844571583]
                        ]
                    },
                    "properties": {
                        "name": "E2nd Ave, 12-11",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98610313283385, 40.73102715835547],
                            [-73.98646725325631, 40.73048552838361]
                        ]
                    },
                    "properties": {
                        "name": "W2nd Ave, 12-11",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.986312405347, 40.73027569540546],
                            [-73.98667888464193, 40.729800542027235]
                        ]
                    },
                    "properties": {
                        "name": "E2nd Ave, 11-10",
                        "width": 4
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98655676532316, 40.73037342426501],
                            [-73.98689873552831, 40.72991910477378]
                        ]
                    },
                    "properties": {
                        "name": "W2nd Ave, 11-10",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98675905203076, 40.729663853423126],
                            [-73.98708258453331, 40.72922124083537]
                        ]
                    },
                    "properties": {
                        "name": "E2nd Ave, 10-9",
                        "width": 4
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98700172474223, 40.72977533828167],
                            [-73.98732761437243, 40.72931255048199]
                        ]
                    },
                    "properties": {
                        "name": "W2nd Ave, 10-9",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98717993060538, 40.72909106009689],
                            [-73.98752064182487, 40.72862023765252]
                        ]
                    },
                    "properties": {
                        "name": "E2nd Ave, 9-8",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98741844244489, 40.72919578848211],
                            [-73.98775882310274, 40.72872316177853]
                        ]
                    },
                    "properties": {
                        "name": "W2nd Ave, 9-8",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98761390687181, 40.7284903795192],
                            [-73.98794301383485, 40.72802061655312]
                        ]
                    },
                    "properties": {
                        "name": "2nd Ave, 8-7",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98804670508737, 40.7279044564588],
                            [-73.98838032036498, 40.7274124821024]
                        ]
                    },
                    "properties": {
                        "name": "2nd Ave, 7-6",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98848175745111, 40.7272877796831],
                            [-73.98882664351513, 40.726824841290835]
                        ]
                    },
                    "properties": {
                        "name": "2nd Ave, 6-5",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98892808062284, 40.72667109718465],
                            [-73.98928423747326, 40.72620473793936]
                        ]
                    },
                    "properties": {
                        "name": "2nd Ave, 5-4",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98937214961947, 40.726088574678535],
                            [-73.98971703568348, 40.72560683668031]
                        ]
                    },
                    "properties": {
                        "name": "2nd Ave, 4-3",
                        "width": 4
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98981396446905, 40.72546675616896],
                            [-73.9901678671622, 40.72494401414708]
                        ]
                    },
                    "properties": {
                        "name": "2nd Ave, 3-2",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.99029288359384, 40.7248071895916],
                            [-73.99064904044425, 40.724310067347695]
                        ]
                    },
                    "properties": {
                        "name": "2nd Ave, 2-1",
                        "width": 3
                    }
                },

                // 1 Ave
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98607795999229, 40.72629892342134],
                            [-73.98687116933087, 40.72523478450905]
                        ]
                    },
                    "properties": {
                        "name": "1st Ave, 6-4",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98699378853223, 40.72505934441277],
                            [-73.9873108049563, 40.7246227585505]
                        ]
                    },
                    "properties": {
                        "name": "1st Ave, 4-3",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98740836352526, 40.72447007513508],
                            [-73.98777184938812, 40.72398599526443]
                        ]
                    },
                    "properties": {
                        "name": "1st Ave, 3-2",
                        "width": 2
                    }
                },

        // Ave A
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.9821709465047, 40.727758431482954],
                            [-73.98337922169263, 40.72608191228281]
                        ]
                    },
                    "properties": {
                        "name": "Ave A, 7-10",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98348180472492, 40.725944065665026],
                            [-73.98381653954978, 40.72549601465179]
                        ]
                    },
                    "properties": {
                        "name": "Ave A, 7-6",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98389044200746, 40.72538400141823],
                            [-73.98425995447646, 40.724883234108624]
                        ]
                    },
                    "properties": {
                        "name": "Ave A, 6-5",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98579934638975, 40.723174304084274],
                            [-73.98545065921209, 40.72364183887632]
                        ]
                    },
                    "properties": {
                        "name": "Ave A, 2-3",
                        "width": 3
                    }
                },

                // Ave B
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98175251332364, 40.72450191964845],
                            [-73.98212163509812, 40.723983081868965]
                        ]
                    },
                    "properties": {
                        "name": "Ave B, 5-6",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.980623235464, 40.72572522161098],
                            [-73.98028780061081, 40.72619799638472]
                        ]
                    },
                    "properties": {
                        "name": "Ave B, 8-9",
                        "width": 2
                    }
                },

                //Ave C

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.97890523828339, 40.72418308787498],
                            [-73.97856075933466, 40.72467298859134]
                        ]
                    },
                    "properties": {
                        "name": "Ave C, 7-8",
                        "width": 3
                    }
                },
                
                // Streets
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98787457738791, 40.72380803811384],
                            [-73.98592624725266, 40.72300856474366]
                        ]
                    },
                    "properties": {
                        "name": "2nd street, 1-A",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98569380775793, 40.72289588328877],
                            [-73.98357218043121, 40.72199942317153]
                        ]
                    },
                    "properties": {
                        "name": "2nd street, A-B",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98522210752643, 40.72355610779121],
                            [-73.98307891463227, 40.72267489078813]
                        ]
                    },
                    "properties": {
                        "name": "3rd street, A-B",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98337747179248, 40.726079139275775],
                            [-73.9812647299109, 40.72520280316463]
                        ]
                    },
                    "properties": {
                        "name": "7th street, A-B",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98564970911207, 40.72686428181854],
                            [-73.98369712753795, 40.726042994271985]
                        ]
                    },
                    "properties": {
                        "name": "7th street, 1-A",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98795219995786, 40.728005689712454],
                            [-73.98585724193066, 40.72711993412188]
                        ]
                    },
                    "properties": {
                        "name": "7th street, 2-1",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98064134616082, 40.72571325503263],
                            [-73.97848293262545, 40.72480577785173]
                        ]
                    },
                    "properties": {
                        "name": "8th street, B-C",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98252083550656, 40.72722696680645],
                            [-73.98046089894937, 40.72634479375585]
                        ]
                    },
                    "properties": {
                        "name": "9th street, A-B",
                        "width": 4
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98216323614058, 40.72775181154051],
                            [-73.98004630698944, 40.726850461985315]
                        ]
                    },
                    "properties": {
                        "name": "10th street, A-B",
                        "width": 4
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98692883476552, 40.72991820190196],
                            [-73.98886699159712, 40.730726948420475]
                        ]
                    },
                    "properties": {
                        "name": "10th street, 3-2",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98674005318378, 40.72968549470127],
                            [-73.98464835405771, 40.72880043698203]
                        ]
                    },
                    "properties": {
                        "name": "10th street, 2-1",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98435788682795, 40.72867901123227],
                            [-73.98238161882651, 40.72784923730104]
                        ]
                    },
                    "properties": {
                        "name": "10th street, 1-A",
                        "width": 2
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98384867850957, 40.729384524462134],
                            [-73.98186384380604, 40.7285592929107]
                        ]
                    },
                    "properties": {
                        "name": "12th street, 1-A",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98582095239719, 40.73091954015124],
                            [-73.98377174467623, 40.73004148116596]
                        ]
                    },
                    "properties": {
                        "name": "12th street, 2-1",
                        "width": 3
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.9853470766375, 40.731543809034264],
                            [-73.98327801530127, 40.730668866984125]
                        ]
                    },
                    "properties": {
                        "name": "13th street, 2-1",
                        "width": 4
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.9848901693937, 40.73221598334681],
                            [-73.98281234332022, 40.7313350624379]
                        ]
                    },
                    "properties": {
                        "name": "14th street, 2-1",
                        "width": 4
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98250616254319, 40.73120944191335],
                            [-73.98056529928164, 40.73037913639863]
                        ]
                    },
                    "properties": {
                        "name": "14th street, 2-1",
                        "width": 4
                    }
                },

                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98426807730111, 40.72488292900598],
                            [-73.98212743396878, 40.72398628976176]
                        ]
                    },
                    "properties": {
                        "name": "5th street, A-B",
                        "width": 2
                    }
                },


                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-73.98410788088185, 40.72548877786549],
                            [-73.98606807995662, 40.7263213857268]
                        ]
                    },
                    "properties": {
                        "name": "6th street, 1-A",
                        "width": 3
                    }
                }
            ]
    };

    // Function to filter and display sidewalks based on selected width
function updateSidewalks(width) {
    // Clear existing sidewalk layers
    map.eachLayer(function (layer) {
        if (layer.options && layer.options.className === 'sidewalk') {
            map.removeLayer(layer);
        }
    });

    // Filter sidewalks based on width
    sidewalks.features.forEach(function (feature) {
        if (feature.properties.width >= width) {
            L.geoJSON(feature, {
                style: {color: "#8c5640", weight: 2.5},
                className: 'sidewalk'
            }).addTo(map);
        }
    });
}

// Initialize with default width (3 people)
updateSidewalks(3);

// Event listener for dropdown change
document.getElementById('widthSelector').addEventListener('change', function () {
    var selectedWidth = parseInt(this.value);
    updateSidewalks(selectedWidth);
});


// new code to fetch sidewalks from NYC Open Data

// fetch and display sidewalks
async function loadEastVillageSidewalks() {
  try {
    console.log('Fetching sidewalks...');
    // query using bounding box
    const url = 'https://data.cityofnewyork.us/resource/52n9-sdep.json?' + 
      '$where=intersects(the_geom, "POLYGON((' +
      '-73.9927 40.7242, ' +
      '-73.9787 40.7202, ' +
      '-73.9756 40.7285, ' +
      '-73.9875 40.7325, ' +
      '-73.9927 40.7242' +
      '))")&$limit=5000';
    
    // filter using bounding box at API level
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(`Fetched ${data.length} total east village sidewalks`);
    console.log('A polygon:', data[66]);

    const features = [];
    
    data.forEach((sidewalk, index) => {
      if (!sidewalk.the_geom?.coordinates?.[0]?.[0]) return;
      
      const coords = sidewalk.the_geom.coordinates[0];
      const centerline = createCenterline(coords);
      if (!centerline) return;
    
    //   if (!Array.isArray(coords) || coords.length === 0) return;

    //   const width = calculateWidth(coords);
    //   if (width < 1) return; // filter out very narrow sidewalks
      
    //   console.log('Sidewalk', index, 'width:', width.toFixed(2), 'ft, category:', categorizeWidth(width));

    // geojson push 

      features.push({
        type: "Feature",
        properties: {
          width: centerline.width,
          category: centerline.category
        },
        geometry: {
          type: "LineString",
          coordinates: centerline.line
        }
      });


    // Convert to Leaflet format [lat, lng]
      const leafletCoords = coords.map(coords => {
        if (!Array.isArray(coords) || coords.length < 2) return null;
        return coords.map(coord => [coord[1], coord[0]])
      }).filter(coords => coords !== null);
      
      if (leafletCoords.length === 0) return;


      
      // Add to map
      L.polygon(leafletCoords, {
        color: 'blue',
        weight: 2,
        fillColor: 'blue',
        fillOpacity: 0.3
      }).addTo(map);
   
    });
    
    const geojson = {
      type: "FeatureCollection",
      features: features
    };
    
    
    console.log(`Added ${data.length} sidewalks to map`);
    console.log(`Processed ${features.length} sidewalk lines`);
    console.log('GeoJSON ready:', geojson);

    return geojson;
    
  } catch (error) {
    console.error('Failed to load sidewalks:', error);
  }
}


// Calculate distance between two lat/lng points (in feet)
function haversineDistance(coord1, coord2) {
  const [lon1, lat1] = coord1;
  const [lon2, lat2] = coord2;
  
  const R = 6371000; // earth radius lmao
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c * 3.28084; // convert to feet
}


// Calculate width
function calculateWidth(rings) {
  const outerRing = rings[0];
  const innerRing = rings[1];
  
  if (outerRing.length < 4) return 0;
  
  // If there's an inner ring (hole), measure distance between outer and inner
  if (innerRing && innerRing.length >= 3) {
    let minWidth = Infinity;
    for (let i = 0; i < outerRing.length - 1; i++) {
      for (let j = 0; j < innerRing.length - 1; j++) {
        const distance = haversineDistance(outerRing[i], innerRing[j]);
        minWidth = Math.min(minWidth, distance);
      }
    }
    return minWidth === Infinity ? 0 : minWidth;
  }
  
  // No inner ring - measure across outer ring
  let minWidth = Infinity;
  for (let i = 0; i < outerRing.length - 1; i++) {
    for (let j = i + Math.floor(outerRing.length / 3); j < outerRing.length - 1; j++) {
      const distance = haversineDistance(outerRing[i], outerRing[j]);
      minWidth = Math.min(minWidth, distance);
    }
  }
  return minWidth === Infinity ? 0 : minWidth;
}

// Create centerline from outer ring
function createCenterline(rings) {
  const outerRing = rings[0];
  
  if (outerRing.length < 4) return null;
  
  const width = calculateWidth(rings);
  
  if (width < 2) return null;
  
  // Create simplified centerline from outer ring
  // Take every Nth point to simplify
  const linePoints = [];
  const lineStep = Math.max(1, Math.floor(outerRing.length / 4));
  
  for (let i = 0; i < outerRing.length - 1; i += lineStep) {
    linePoints.push(outerRing[i]);
  }
  
  if (linePoints.length < 2) return null;
  
  return {
    line: linePoints,
    width: Math.round(width * 10) / 10,
    category: categorizeWidth(width)
  };
}



// Categorize width
function categorizeWidth(width) {
  if (width < 6) return 'narrow';
  if (width <= 9) return 'mid';
  return 'wide';
}


// Call the function
loadEastVillageSidewalks();

