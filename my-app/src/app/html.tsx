async function fetchData(): Promise<void>{
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
      console.log(data);
    } catch (error){
      console.error('error fetching data:', error);
    }
  }


fetchData();