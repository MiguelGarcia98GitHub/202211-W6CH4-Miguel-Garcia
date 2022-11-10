import http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 7000;
const server = http.createServer((request, response) => {
    // IGNORE FAVICON REQUEST
    if (!request.url?.includes('calculator')) {
        response.writeHead(200, { 'Content-Type': 'image/x-icon' });
        response.end();
        return;
    }

    const queryParams = (request.url as string).split('?')[1];
    const queryParamsNumbers = queryParams.split('&');

    const parsedNumber1 = Number(queryParamsNumbers[0].split('=')[1]);
    const parsedNumber2 = Number(queryParamsNumbers[1].split('=')[1]);

    console.log(parsedNumber1);
    console.log(parsedNumber2);

    response.write('Calculating through parameters with base Node.JS:');
    response.write(
        `The received numbers are: ${parsedNumber1} and ${parsedNumber2}              `
    );
    response.write(`Add: ${parsedNumber1 + parsedNumber2}              `);
    response.write(
        `Substraction: ${parsedNumber1 - parsedNumber2}              `
    );
    response.write(
        `Multiplication: ${parsedNumber1 * parsedNumber2}              `
    );
    response.write(`Division: ${parsedNumber1 / parsedNumber2}              `);
    response.end();
});

server.listen(port);
console.log('Listen on port ', port);
