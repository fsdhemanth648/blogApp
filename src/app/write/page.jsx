"use client"
import { useState, useEffect } from 'react'
import styles from './WritePage.module.css'
import dynamic from 'next/dynamic';
import { GoPlusCircle } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { CiVideoOff } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CgCloseO } from "react-icons/cg";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';

const DynamicQuill = dynamic(() => import('@/app/ui/quillEditor/QuillEditor'), {
  ssr: false // Ensure Quill is not loaded during SSR
});

const storage = getStorage(app);

function WritePage() {
    const [editorOptions, setEditorOptions] = useState(true);
    const {status} = useSession()
    const router = useRouter();
    const [file, setFile] = useState(null)
    const [value, setValue] = useState("")
    const [media, setMedia] = useState("")
    const [title, setTitle] = useState("")

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(()=>{
    const upload = () =>{
      const fileName = new Date().getTime + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
         }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setMedia(downloadURL)
      });
    });}

    file && upload();
  }, [file])

  const slugify = (str)=> str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "")

  const handleSubmit = async () =>{
    const res = await fetch("/api/posts",{
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img : media,
        slug: slugify(title),
        catSlug: "travel",
      })
    })
    console.log(res)
  }

  if (status === "loading") {
    return <div> Loading... </div>;
  }
    
  return (
    <div className={styles.write}>
      {JSON.stringify(title)}
      {JSON.stringify(media)}
      <br/>
      <input type='text' className={styles.input} placeholder='Type title...' onChange={(e)=> setTitle(e.target.value)}/>
      {/* <input type='text' placeholder='Category'/> */}
      <div className={styles.editorArea}>
        <div className={styles.editor}>
            <button onClick={()=> setEditorOptions(!editorOptions)}>
                {editorOptions ? <CgCloseO className={styles.btn}/>  : <GoPlusCircle className={styles.btn}/>}
            </button>
            {editorOptions && (
                <div className={styles.add}>
                    <input type='file' id='image' onChange={(e)=> setFile(e.target.files[0])} style={{ display : "none"}}/>
                    <button className={styles.addBtn}>
                      <label htmlFor='image'>
                        <CiImageOn />
                      </label>
                    </button>
                    <button className={styles.addBtn}>
                        <BiLinkExternal />
                    </button>
                    <button className={styles.addBtn}>
                        <CiVideoOff />
                    </button>
                </div>
            )}
            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
            {JSON.stringify(value)}
          <DynamicQuill  
            value={value}
            setValue={setValue}
          />
       
      </div>
      
      <div className='flex justify-end mt-5 px-6'>
        
      </div>
    </div>
  )
}

export default WritePage
