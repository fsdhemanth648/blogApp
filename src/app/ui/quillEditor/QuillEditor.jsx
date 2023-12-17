"use client"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './QuillEditor.module.css'
import { useState } from 'react';

function QuillEditor() {

    const [editorValue, setEditorValue] = useState("")
  return (
    <>
        <ReactQuill theme='snow' className={styles.textArea} value={editorValue} onChange={setEditorValue} placeholder='Write your blog...'/>
    </>
  )
}

export default QuillEditor
