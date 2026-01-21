
import Grid from "./components/Grid";
import Title from "./components/Title/Title";

import { destination } from "./lib/destination";


export default function Home() {
  return (
   <> 
   <Title title="Welcome to the Travel Site" />
   <Grid travels={[]} />
   <Destinations />

   </>
  );
}
const Destinations = () => {
  return (
    <>
      <Title title="Popular Destinations" />
      <Grid travels={destination} />
    </>
  )
}
