type CalcImageSrcFn = (width: 200 | 400 | 600 | 'original', fileName: string) => string;

export const calcImageSrc: CalcImageSrcFn = (width, fileName) => {
  const s3Src = process.env.NEXT_PUBLIC_S3_STORAGE;
  const ext = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();
  if (ext === 'gif') return s3Src + '/original' + fileName;
  switch (width) {
    case 200:
      return s3Src + '/resize/200' + fileName;
    case 400:
      return s3Src + '/resize/400' + fileName;
    case 600:
      return s3Src + '/resize/600' + fileName;
    case 'original':
      return s3Src + '/original' + fileName;
    default:
      return s3Src + '/original' + fileName;
  }
};
