const apiHost = () => {} // No-op in our mock version.

const searchNasa = () => Promise.resolve({
  data: [{
      "id": 689597,
      "sol": 2540,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FLB_622990123EDR_F0763002FHAZ00341M_.JPG",
      "earth_date": "2019-09-28",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 2540,
        "max_date": "2019-09-28",
        "total_photos": 366206,
        "cameras": [{
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 689598,
      "sol": 2540,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FRB_622990123EDR_F0763002FHAZ00341M_.JPG",
      "earth_date": "2019-09-28",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 2540,
        "max_date": "2019-09-28",
        "total_photos": 366206,
        "cameras": [{
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 689599,
      "sol": 2540,
      "camera": {
        "id": 21,
        "name": "RHAZ",
        "rover_id": 5,
        "full_name": "Rear Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/rcam/RLB_622990164EDR_F0763002RHAZ00341M_.JPG",
      "earth_date": "2019-09-28",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 2540,
        "max_date": "2019-09-28",
        "total_photos": 366206,
        "cameras": [{
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    }
  ]
})

const searchAstronomyPicture = () => Promise.resolve({
  data: [{
    "copyright": "Eric Wagner",
    "date": "2019-10-10",
    "explanation": "On September 24, a late evening commercial flight from Singapore to Australia offered stratospheric views of the southern hemisphere's night sky, if you chose a window seat. In fact, a well-planned seating choice with a window facing toward the Milky Way allowed the set up of a sensitive digital camera on a tripod mount to record the galaxy's central bulge in a series of 10 second long exposures.  By chance, one of the exposures caught this bright fireball meteor in the starry frame. Reflected along the wing of the A380 aircraft, the brilliant greenish streak is also internally reflected in the double layer window, producing a fainter parallel to the original meteor track. In the southern sky Jupiter is the bright source beneath the galactic bulge and seen next to a green beacon, just off the wing tip.",
    "hdurl": "https://apod.nasa.gov/apod/image/1910/MWBolideEricWagner2400.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Mid-Air Meteor and Milky Way",
    "url": "https://apod.nasa.gov/apod/image/1910/MWBolideEricWagner1200.jpg"
  }]

})

export {
  apiHost,
  searchNasa,
  searchAstronomyPicture
}
