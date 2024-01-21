"use client"
import { useState, useEffect, useRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './QuillEditor.module.css'


function QuillEditor(props) {
    const {value, setValue} = props;
    const [editorValue, setEditorValue] = useState("")
    const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      // Access quill instance here if needed
      const quill = quillRef.current.getEditor();
      // Perform any necessary actions with Quill instance
    }
  }, []);
  return (
    <>
        {typeof window !== "undefined" && (
            <ReactQuill ref={quillRef} theme='snow' className={styles.textArea} value={value} onChange={setValue} placeholder='Write your blog...'/>
        )}
    </>
  )
}

export default QuillEditor
