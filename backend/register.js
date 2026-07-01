const registerUser = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'mrizkynurawalin@gmail.com',
        password: 'Rizkyicaa1$',
        fullName: 'KyyCaa',
        role: 'superadmin'
      })
    });
    
    const data = await response.json();
    console.log("HASIL:", data);
  } catch (error) {
    console.error("ERROR:", error);
  }
};

registerUser();