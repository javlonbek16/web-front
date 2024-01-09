document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://127.0.0.1:8000/api';
  
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
  
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.token) {
        localStorage.setItem('token', data.token); // Save token in local storage
        window.location.href = 'index.html';
      }
    });
  });
  