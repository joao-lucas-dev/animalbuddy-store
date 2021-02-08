import React from 'react';
import { MdMoodBad } from 'react-icons/md';
import { useFiles, IFile } from '../../context/files';

import { Container, FileInfo, Preview } from './styles';

const FileList: React.FC = () => {
  const { uploadedImages: filesImages, deleteFile } = useFiles();

  if (!filesImages.length) {
    return (
      <span>
        <MdMoodBad
          style={{ marginLeft: '45%', marginTop: 10 }}
          size={24}
          color="#d5d2d2"
        />
      </span>
    );
  }

  return (
    <Container>
      {filesImages.map((uploadedFile: IFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}{' '}
                <button
                  type="button"
                  onClick={() => deleteFile(uploadedFile.id)}
                >
                  Excluir
                </button>
              </span>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
