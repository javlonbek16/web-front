document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const token = localStorage.getItem('token');
  
    if (!token) {
      window.location.href = 'register.html'; // Redirect to register if not registered
    }
  
    // Code Storage Form
    document.getElementById('codeForm').addEventListener('submit', async (event) => {
      event.preventDefault();
      const code = document.getElementById('codeInput').value;
  
      const response = await fetch(`${baseUrl}/store_code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Send token in header
        },
        body: JSON.stringify({ code }),
      });
  
      const data = await response.json();
      console.log(data);
    });
  
    // Fetch and Display Stored Codes
    const fetchCodes = async () => {
      const response = await fetch(`${baseUrl}/get_code`, {
        headers: {
          'Authorization': `Bearer ${token}` // Send token in header
        },
      });
  
      const data = await response.json();
      const codeList = document.getElementById('codeList');
  
      codeList.innerHTML = '<h2>Stored Codes</h2>';
      data.data.forEach((code) => {
        const codeItem = document.createElement('div');
        codeItem.textContent = code.code;
        codeList.appendChild(codeItem);
      });
    };
  
    fetchCodes(); // Fetch and display codes on page load
  });
  