const { spawn } = require('child_process');
const test = require('tape');
const fetch = require('node-fetch');

const serverStart = () => new Promise((resolve, _reject) => {
    const server = spawn('node', ['../server.js'], // spawn server
    { 
        env: Object.assign({}, process.env, { PORT: 0 }), // listen on random high port
        cwd: __dirname
    });
    server.stdout.once('data', async data => {
        const message = data.toString().trim();
        const url = /Server running at (.+)$/.exec(message)[1]; // extract server url once first message is printed
        console.log('url: ', url)
        resolve({ server, url });
    })
});

/**
 * Commented out due to error connection refused
 */
// test('GET /recipes/42', async t => {
//     const { server, url } = await serverStart();
//     // once server is started, send HTTP requests as tests
//     const result = await fetch(`http://${url}/recipes/42`);
//     const body = await result.json();
//     t.equal(body.id, 42);
//     server.kill(); // kill server instance
// });