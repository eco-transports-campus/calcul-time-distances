exports.getDistances = (origins, destinations, mode, keyAPI) => {
  const url = "https://maps.googleapis.com/maps/api/distancematrix/json?"
  const urlAPI = `${url}mode=${mode}&origins=${origins}&destinations=${destinations}&key=${keyAPI}`

  return new Promise((resolve, reject) => {
    axios
      .get(urlAPI)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
