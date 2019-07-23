const apiUrl = (process.env.NODE_ENV === 'development') ? "http://localhost:3000" : "https://the_real_deal.com";

export { apiUrl };