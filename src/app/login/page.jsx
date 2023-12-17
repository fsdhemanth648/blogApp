import styles from './LoginPage.module.css'

function LoginPage() {
  return (
    <div className={styles.login}>
       <div className={styles.wrapper}>
        <div className={styles.loginBtn}>
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
