import type { NextPage } from 'next'
import styles from '../styles/Homeapp.module.css'
import HomeContainer from "../components/HomeContaneir";

const Home: NextPage = () => {
  return (
      <div className={styles.App}>
          <HomeContainer />
    </div>

  )
}
export default Home
