async function getUser() {
    const response = await fetch('https://api.github.com/users/octocat')
    // rewrite the Fetch request
    const data = await response.json()
    
    // munculkan data ke log
    console.log(data)
  }
  
  // Execute async function
  getUser()