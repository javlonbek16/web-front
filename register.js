document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://127.0.0.1:8000/api';
  
    document.getElementById('registerForm').addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('regUsername').value;
      const password = document.getElementById('regPassword').value;
      const fullname = document.getElementById('regFullname').value;
      const phone = document.getElementById('regPhone').value;
  
      const response = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, fullname, phone_number: phone }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.success) {
        localStorage.setItem('token', data.token); 
        window.location.href = 'index.html';
      }
    });
  });
  