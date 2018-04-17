![Polytech Paris-sud](https://www.usinenouvelle.com/mediatheque/3/4/0/000268043_image_260x175.jpg)
# calcul-time-distances
A module to calcul time and distance between 2 points. Based on [Google Maps API](https://developers.google.com/maps/documentation/distance-matrix/start)

## Prerequisite
You need to obtain an api key. [How to obtain API key ?](https://developers.google.com/maps/documentation/distance-matrix/get-api-key)

## Install
```
npm install calcul-time-distances
```

## Example
```javascript
// Import package
var calculDistance = require("calcul-time-distances")

calculDisance.getDistances(
  "Paris",  // Origin
  "Orsay",  // Destination
  "driving", // Mode
  "AIzaSyD35qhFxfb4gzqB4a_egNd0z4JgmgCIUUY" // Api Key
).then(data => {
  // Do something with data
  console.log(data)
})
```
### Available modes
- [x] driving
- [x] walking
- [x] bicycling
- [ ] transit _(premium)_

## Returned value
```json
{
   "destination_addresses" : [ "91400 Orsay, France" ],
   "origin_addresses" : [ "Paris, France" ],
   "rows" : [
      {
         "elements" : [
            {
               "distance" : {
                  "text" : "32,0 km",
                  "value" : 31962
               },
               "duration" : {
                  "text" : "38 minutes",
                  "value" : 2295
               },
               "status" : "OK"
            }
         ]
      }
   ],
   "status" : "OK"
}
```
