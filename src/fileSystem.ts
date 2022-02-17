import { promises as fs } from 'fs';
import path from 'path';

interface Query {
  filename?: string;
  width?: string;
  height?: string;
}

export default class File {
  
  static imagesFullPath = path.resolve(__dirname, '../images/full');
  static imagesThumbPath = path.resolve(__dirname, '../images/thumb');

  static async getImagePath(params: Query): Promise<null | string> {
    if (!params.filename) {
      return null;
    }

    const filePath: string =
      params.width && params.height
        ? path.resolve(
            File.imagesThumbPath,
            `${params.filename}-${params.width}x${params.height}.jpg`
          )
        : path.resolve(File.imagesFullPath, `${params.filename}.jpg`);

    try {
      await fs.access(filePath);
      return filePath;
    } catch {
      return null;
    }
  }

  static async isThumbAvailable(params: Query): Promise<boolean> {
    if (!params.filename || !params.width || !params.height) {
      return false;
    }

    const filePath: string = path.resolve(
      File.imagesThumbPath,
      `${params.filename}-${params.width}x${params.height}.jpg`
    );

    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }


  static async createThumbPath(): Promise<void> {
    try {
      await fs.access(File.imagesThumbPath);
    } catch {
      fs.mkdir(File.imagesThumbPath);
    }
  }

  static async createThumb(params: Query) {
    if (!params.filename || !params.width || !params.height) {
      return null;
    }

    const filePathFull: string = path.resolve(
      File.imagesFullPath,
      `${params.filename}.jpg`
    );
    const filePathThumb: string = path.resolve(
      File.imagesThumbPath,
      `${params.filename}-${params.width}x${params.height}.jpg`
    );

  }
}