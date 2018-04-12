exports.getDistances = function (var origin, var destination, var key) {
	var data = [];
	var modes = {"driving","walking","bicycling"};

	for (var mode in modes){ 
		axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?mode=' + mode +'origins=' + origin + '&destinations=' + destination + '&key=' + key)
		  .then(response => {
			let answer = JSON.parse(response.data);
			var info = {};
			if (answer.status == "OK")
			{
				if (answer.rows[0].elements[0].status == "NOT_FOUND")
				{
					info['status'] = "NOT_FOUND";
					console.warn("Warning: Distance API didn't found an itinerary (mode: " + mode + ",origin: " + origin + ", destination: " + destination + ")");
				}
				if (answer.rows[0].elements[0].status == "OK")
				{
					info['status'] = "OK";
					info['distance'] = answer.rows[0].elements[0].distance.value;
					info['duration'] = answer.rows[0].elements[0].duration.value;
				}
			}
			else{
				console.warn("Warning: Distance API respond with a status: " + answer.status + "(mode: " + mode + ",origin: " + origin + ", destination: " + destination + ")");
				info['status'] = "KO";
			}
			info['mode'] = mode;
			data.push(info);
		  })
		  .catch(error => {
			console.error(error);
			return null;
		  });
	}
	
	return data;
};