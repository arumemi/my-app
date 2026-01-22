import {travels} from "@/app/components/Types/type"
import Card from "../Card"
import styles from './Grid.module.css'

type props = {
  travels: travels[]
}

const Grid = ({travels} : props) => {
  return (
   <section className={styles.grid}>
    {travels.map((travel) => <Card key={travel.id} travel={travel} />)}
   </section>
  )
}

export default Grid
