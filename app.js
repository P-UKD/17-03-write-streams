import { Transform } from 'stream';
import fs from 'fs';

const capitalizeTransform = new Transform({
    transform(chunk, encoding, callback) {
        let data = chunk.toString();
        data = data.replace(/\b\w/g, c => c.toUpperCase());
        this.push(data);
        callback();
    }
});

const readStream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

readStream.pipe(capitalizeTransform).pipe(writeStream);