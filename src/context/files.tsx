import React, { createContext, useState, useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import filesize from 'filesize';

export interface IPost {
  _id: string;
  name: string;
  size: number;
  key: string;
  url: string;
}

export interface IFile {
  id: string;
  name: string;
  readableSize?: string;
  preview: string;
  file: File | null;
}

interface IFileContextData {
  uploadedImages: IFile[];
  clearUploaded(): void;
  deleteFile(id: string): void;
  // eslint-disable-next-line
  handleUpload(file: any): void;
}

const FileContext = createContext<IFileContextData>({} as IFileContextData);

const FileProvider: React.FC = ({ children }) => {
  const [uploadedImages, setUploadedImages] = useState<IFile[]>([]);

  const handleUpload = useCallback((files: File[]) => {
    const newUploadedFiles: IFile[] = files.map((file: File) => {
      return {
        file,
        id: uuidv4(),
        name: file.name,
        readableSize: filesize(file.size),
        preview: URL.createObjectURL(file),
      };
    });

    setUploadedImages((state) => state.concat(newUploadedFiles));
  }, []);

  const deleteFile = useCallback((id: string) => {
    setUploadedImages((state) => state.filter((file) => file.id !== id));
  }, []);

  const clearUploaded = useCallback(() => {
    setUploadedImages([]);
  }, []);

  return (
    <FileContext.Provider
      value={{
        uploadedImages,
        clearUploaded,
        deleteFile,
        handleUpload,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

function useFiles(): IFileContextData {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error('useFiles must be used within FileProvider');
  }

  return context;
}

export { FileProvider, useFiles };
