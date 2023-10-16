import fs from 'fs';

export function writeFileSync(path: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView) {
  try {
    fs.writeFileSync(path, data)
    console.log(`File "${path}" write successfully\n`);
  }
  catch (e) {
    console.log(e);
  }
}
