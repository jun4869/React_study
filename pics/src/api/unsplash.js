import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID fXIugegNtp2-TNeFNFSTIkree53LbHRZ63lLKgxrRLM'
  }
});
