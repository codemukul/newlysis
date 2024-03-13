const getAnalysis = async () => {
  const res = await fetch('http://localhost:8081/get_analysis');
  const data = await res.text();
  console.log(data);
  Client.updateUI(data);
};


const sendSample = async (data, URL) => {
    const res = await fetch(URL, {
        method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data),
    });
    try {
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
export { sendSample, getAnalysis };