import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L34.3,213.3C68.6,203,137,181,206,170.7C274.3,160,343,160,411,176C480,192,549,224,617,240C685.7,256,754,256,823,234.7C891.4,213,960,171,1029,154.7C1097.1,139,1166,149,1234,149.3C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <h1 className={styles.center}>
        Welcome to <span className={styles.head}>CIIPPUS</span>{" "}
      </h1>
    </>
  );
}