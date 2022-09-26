function serverApi(route) {
  fetch(`http://localhost:8080${route}`)
    .then(response => {
      return response;
    }).catch(err => {
      return err;
  })
}

export default serverApi;
