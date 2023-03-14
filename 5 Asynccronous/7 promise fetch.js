// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat/salah')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })