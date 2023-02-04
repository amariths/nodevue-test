var Jimp = require('jimp');

async function resize() {

    const image = await Jimp.read('image.jpeg');
   
    image.resize(300, 200)
    .write('image-modified.jpeg');
  }
  resize()
  console.log();