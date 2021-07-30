const path = require('path');
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const FFmpeg = require('fluent-ffmpeg');

// FFmpeg.setFfmpegPath(ffmpegPath);

const gify = new FFmpeg({ source: path.resolve(__dirname, 'src/public/loading/loader.gif') });

gify.clone()
  .withVideoCodec('libx264')
  .withFps(25)
  .toFormat('mp4')
  .saveToFile(path.resolve(__dirname, 'src/public/loading/loader.mp4'));

gify.clone()
  .withFps(25)
  .toFormat('webm')
  .saveToFile(path.resolve(__dirname, 'src/public/loading/loader.webm'));
