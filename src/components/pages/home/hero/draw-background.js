const TEXT_GAP = 12;
const TEXT_WIDTH = 22;
const TEXT_HEIGHT = 16;

const isBrowser = typeof window !== 'undefined';

const ibmplexmonoFont =
  isBrowser && new FontFace('IBM Plex Mono', 'url(/fonts/ibmplexmono-light.woff2)');

const getPixelRatio = () => {
  const isDevicePixelRatio = isBrowser && window.devicePixelRatio;
  return isDevicePixelRatio || 1;
};

function getRandomString(length) {
  const digits = 'ABCDEF0123456789';
  let string = '';
  const random = Math.random();
  const randomStr = digits.charAt(random * digits.length || 0);
  for (string; string.length < length; string += randomStr);
  return string;
}

const drawBackground = ({ canvasRef, width, height }) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  const ratio = getPixelRatio();
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.scale(ratio, ratio);

  const x = Math.round(width / 25);
  const y = Math.round(height / 25);

  ibmplexmonoFont.load().then((font) => {
    document.fonts.add(font);
    document.fonts.ready.then(() => {
      for (let i = 0; i < y; i += 1) {
        for (let j = 0; j < x; j += 1) {
          context.font = '300 16px IBM Plex Mono';
          context.fillStyle = '#242828';
          context.fillText(
            getRandomString(2),
            TEXT_GAP + j * (TEXT_GAP + TEXT_WIDTH),
            i * (TEXT_GAP + TEXT_HEIGHT)
          );
        }
      }
    });
  });
};

export default drawBackground;
