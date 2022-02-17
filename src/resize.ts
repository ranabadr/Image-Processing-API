import sharp from 'sharp';

interface sharpParams {
  source: string;
  target: string;
  width: number;
  height: number;
}

const resize = async (
  params: sharpParams
): Promise<null | string> => {
  try {
    await sharp(params.source)
      .resize(params.width, params.height)
      .toFormat('jpeg')
      .toFile(params.target);
    return null;
  } catch {
    return 'Image could not be processed.';
  }
};

export default resize;