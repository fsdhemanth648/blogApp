"use client"
import { useState, useEffect, useRef } from 'react'
import styles from './WritePage.module.css'
import dynamic from 'next/dynamic';
import { GoPlusCircle } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { CiVideoOff } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";

const DynamicQuill = dynamic(() => import('@/app/ui/quillEditor/QuillEditor'), {
  ssr: false // Ensure Quill is not loaded during SSR
});

function WritePage() {
    const [editorOptions, setEditorOptions] = useState(true);
    
    
  return (
    <div className={styles.write}>
      <input type='text' className={styles.input} placeholder='Type title...' />
      <div className={styles.editorArea}>
        <div className={styles.editor}>
            <button onClick={()=> setEditorOptions(!editorOptions)}>
                <GoPlusCircle className={styles.btn}/>
            </button>
            {editorOptions && (
                <div className={styles.add}>
                    <button className={styles.addBtn}>
                        <CiImageOn />
                    </button>
                    <button className={styles.addBtn}>
                        <BiLinkExternal />
                    </button>
                    <button className={styles.addBtn}>
                        <CiVideoOff />
                    </button>
                </div>
            )}
            <button className={styles.publish}>Publish</button>
        </div>
        
          <DynamicQuill  />
       
      </div>
      
      <div className='flex justify-end mt-5 px-6'>
        
      </div>
    </div>
  )
}

export default WritePage
