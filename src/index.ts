import axios from 'axios';

// This file imports axios, so it's a "good citizen"
// But lodash is in dependencies and NOT used = GHOST!

async function fetchData() {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
}

export { fetchData };
