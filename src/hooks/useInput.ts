import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export interface IUploadFile {
  originFile: File;
  width: number;
  height: number;
  url: string;
}

/**
 * @description 텍스트 input hook
 */
const useTextInput = (initText?: string) => {
  const [inputValue, setInputValue] = useState(initText ?? '');

  const onChangeInputValue: FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return { inputValue, setInputValue, onChangeInputValue };
};

const useMediaFileInput = (isMultipleFiles?: boolean) => {
  const [tempUploadFiles, setTempUploadFiles] = useState<IUploadFile[]>([]);

  const checkIsDuplicateFile = (uploadFile: File) => {
    const isDuplicated = tempUploadFiles.filter(
      (file) =>
        file.originFile.name === uploadFile.name &&
        file.originFile.lastModified === uploadFile.lastModified,
    ).length;

    return isDuplicated !== 0;
  };

  const imageHandler = (file: File) => {
    let width = 0;
    let height = 0;

    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = function () {
      width = image.width;
      height = image.height;

      const uploadFile: IUploadFile = { originFile: file, width, height, url: image.src };

      if (checkIsDuplicateFile(file)) {
        alert('중복된 파일입니다.');
      } else {
        setTempUploadFiles((preFiles) => [uploadFile, ...preFiles]);
      }
    };
  };

  const videoHandler = (file: File) => {
    let width = 0;
    let height = 0;
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.addEventListener('loadedmetadata', function () {
      width = this.videoWidth;
      height = this.videoHeight;

      const uploadFile: IUploadFile = { originFile: file, width, height, url: video.src };

      if (checkIsDuplicateFile(file)) {
        alert('중복된 파일입니다.');
      } else {
        setTempUploadFiles((preFiles) => [...preFiles, uploadFile]);
      }
    });
    video.src = URL.createObjectURL(file);
  };

  const onChangeFileInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const filesByInput = event.target.files;

    if (filesByInput && filesByInput.length > 0) {
      if (!isMultipleFiles) {
        const file = filesByInput[0];
        const fileType = file.type.split('/')[0];

        if (fileType === 'image') {
          imageHandler(file);
        } else if (fileType === 'video') {
          videoHandler(file);
        }
      } else {
        const uploadFiles: IUploadFile[] = [];

        for (let index = 0; index < filesByInput.length; index++) {
          const file = filesByInput[index];
          const fileType = file.type.split('/')[0];
          if (fileType === 'image') {
            imageHandler(file);
          } else if (fileType === 'video') {
            videoHandler(file);
          }
        }
      }
    }
    event.target.value = '';
  };

  return { tempUploadFiles, setTempUploadFiles, onChangeFileInput };
};

const useAnyTypeFileInput = () => {
  const [tempUploadFiles, setTempUploadFiles] = useState<IUploadFile[]>([]);

  const checkIsDuplicateFile = (uploadFile: File) => {
    const isDuplicated = tempUploadFiles.filter(
      (file) =>
        file.originFile.name === uploadFile.name &&
        file.originFile.lastModified === uploadFile.lastModified,
    ).length;

    return isDuplicated !== 0;
  };

  const onChangeFileInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      let width = 0;
      let height = 0;
      const filesByInput = event.target.files;
      const uploadFiles: IUploadFile[] = [];

      for (let index = 0; index < filesByInput.length; index++) {
        if (checkIsDuplicateFile(filesByInput[index])) {
          alert('중복된 파일입니다.');
        } else {
          uploadFiles.push({ originFile: filesByInput[index], width, height, url: '' });
        }
      }

      setTempUploadFiles((preFiles) => [...uploadFiles, ...preFiles]);

      event.target.value = '';
    }
  };

  return { tempUploadFiles, setTempUploadFiles, onChangeFileInput };
};

export { useAnyTypeFileInput, useMediaFileInput, useTextInput };
