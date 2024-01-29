const axios = require('axios');
const express = require('express');

const app = express();
const port = 3000;

// URL of the page containing the HTML table
const url = 'https://www.epos.mp.gov.in/abstract_Transaction_office_report.action?dist_code=454&trans_date=24-01-2024';

// Function to fetch HTML content from the URL
async function fetchData() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Define route to handle API requests
app.get('/', async (req, res) => {
  try {
    // Fetch HTML data from the URL
    const htmlData = await fetchData();
    // Send the raw HTML content as response
    res.send(htmlData);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
