
import styles from "./UncontrolledLogin"

function UncontrolledLogin() {
  return (
    <div className={styles['login-container']}>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" className={styles.input} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className={styles.input} />
        <br />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default UncontrolledLogin;
