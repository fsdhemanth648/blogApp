"use client"
import { signIn, useSession } from 'next-auth/react'
import styles from './LoginPage.module.css'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function LoginPage() {
  const {data, status} = useSession()
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div> Loading... </div>;
  }
  
  return (
    <div className={styles.login}>
       <div className={styles.wrapper}>
        <div 
          className={styles.loginBtn}
          onClick={()=> signIn("google")}
        >
            Sign in with Google
        </div>
        <div className={styles.loginBtn}>
            Sign in with Github
        </div>
        <div className={styles.loginBtn}>
            Sign in with Facebook
        </div>
      </div>
    </div>
  )
}

export default LoginPage
