export default  {
    env: process.env.NODE_ENV,
    server: {
        port: Number(process.env.PORT)
    }
    
};

const port = process.env.PORT || 3000; // Use the environment variable PORT if defined, otherwise use 3000
const host = process.env.HOST || 'http://localhost'; // Use the environment variable 

export const serverURL = `${host}:${port}`;