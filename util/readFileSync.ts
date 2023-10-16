import fs from 'fs';

export function readFileSync(path: fs.PathOrFileDescriptor) {
  try {
    const data = fs.readFileSync(path, 'utf-8')
    console.log(`File "${path}" read successfully\n`);
    return data;
  }
  catch (e) {
    console.log(e);
  }
}
