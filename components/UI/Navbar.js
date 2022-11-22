import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(){
    const router = useRouter();
    function exploreEvents(){
        router.push("/events");
    }

    return (
        <>
            <nav className={styles.navContainer}>
                <div className={styles.leftPart}>
                    <h2 className={styles.logo}> <Link href="/"> CIIPPUS </Link></h2>

                </div>
                <div className={styles.rightPart}>
                    <div className={styles.button} onClick={exploreEvents}>Explore Events</div>
                </div>
            </nav>
        </>
    );
}