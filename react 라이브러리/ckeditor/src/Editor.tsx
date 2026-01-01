import './editor.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Font,
  Link,
  Image,
  ImageUpload,
  FileRepository,      // ✅ 추가
  // SimpleUploadAdapter, // ❌ 커스텀 어댑터만 쓸 경우 제거 권장
  Table,
  TableToolbar,
  MediaEmbed,
  List,
  Indent,
  Alignment,
  ImageToolbar,
  ImageStyle,
  ImageCaption,
  ImageTextAlternative,
  Base64UploadAdapter,
} from 'ckeditor5';

import coreTranslations from 'ckeditor5/translations/ko.js';
import 'ckeditor5/ckeditor5.css';

function Editor({ data, setInputs }: {data: string, setInputs: React.Dispatch<React.SetStateAction<any>>}) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data ? data.replace(/&quot;/g, '').replace(/\\/g, '') : ''}
      onChange={(e, editor) => {
        // const html = editor.getData();
        // setInputs((prev: any) => ({ ...prev, comment: html }));
      }}
      config={{
        licenseKey: 'GPL',
        plugins: [
          // 순서는 크게 상관 없지만, FileRepository가 포함되어 있어야 함
          Essentials, Paragraph, Heading,
          Bold, Italic, Font, Link,
          Image, ImageUpload, FileRepository,  // ✅ 포함
          Table, TableToolbar, MediaEmbed, List, Indent, Alignment,
          // 이미지 API 저장
          // MyCustomUploadAdapterPlugin,
          // 이미지 그냥 보이게 할 때
          Base64UploadAdapter,
          ImageToolbar,
          ImageStyle,
          ImageCaption,
          ImageTextAlternative,
        ],
        toolbar: [
          'undo', 'redo',
          'heading',
          'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
          'alignment', '|',
          'bold', 'italic', '|',
          'link', 'uploadImage', '|',
          'insertTable', 'mediaEmbed', '|',
          'bulletedList', 'numberedList', 'outdent', 'indent', '|',
        ],
        translations: [coreTranslations],
        table: { contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'] },
        image: {
          toolbar: [
            'imageStyle:alignLeft',
            'imageStyle:alignCenter',
            'imageStyle:alignRight',
            '|',
            'toggleImageCaption',
            'imageTextAlternative'
          ]
        }
        // fontSize: {
        //   options: [8, 10, 12, 14, 16, 18, 20, 24, 32, 48],
        //   default: 12,           // ✅ 에디터 기본 폰트 크기 (px)
        // },
        // fontFamily: {
        //   options: [
        //       'default',
        //       'Pretendard, Arial, sans-serif',
        //       'Arial, Helvetica, sans-serif',
        //       'Courier New, Courier, monospace',
        //       'Georgia, serif',
        //       'Lucida Sans Unicode, Lucida Grande, sans-serif',
        //       'Tahoma, Geneva, sans-serif',
        //       'Times New Roman, Times, serif',
        //       'Trebuchet MS, Helvetica, sans-serif',
        //       'Verdana, Geneva, sans-serif'
        //   ]
        // },

      }}
    />
  );
}

class MyUploadAdapter {
  loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  upload(): Promise<{ default: string }> {
    return this.loader.file.then((file: File) => {
      const formData = new FormData();
      formData.append('file', file);

      return fetch(`api url 경로/api/web/file`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authorization')}`, // ✅ Header로 전달
          'Service-Key': '서버 키',                   // ✅ Header로 전달
        },
      })
        .then(res => res.json())
        .then(result => {
          return { default: result.data.file_url };
        });
    });
  }

  abort(): void {}
}


function MyCustomUploadAdapterPlugin(editor: any) {
  // ✅ FileRepository가 로드되어 있다고 확신할 수 있는 상태여야 함
  const repo = editor.plugins.get('FileRepository'); // 여기서 에러 났던 것
  repo.createUploadAdapter = (loader: any) => new MyUploadAdapter(loader);
}

export default Editor;
