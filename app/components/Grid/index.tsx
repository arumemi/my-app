import {travels} from "@/app/components/Types/type"
import Card from "../Card"

type props = {
  travels: travels[]
}

const Grid = ({travels} : props) => {
  return (
   <section>
    {travels.map((travel) => <Card key={travel.id} travel={travel} />
     
    )}
   </section>
  )
}

export default Grid
