import Car from "./Car";
import GoalResult from "./Goal";
import LogicalOperator from "./LogicalOperator";
import List from "./List";
import { Button } from 'react-bootstrap';
import PaginationList from "./Pagination"
import Spinners from "./Spinner";
import Table from "./Table";

function App() {
  const cars = ["Ford", "BMW"]
  return (
<div>
<Car color="red" wheels = "4" />
<hr/>
<GoalResult isGoal = "true" />
<hr/>
<LogicalOperator  cars= {cars}/>
<hr/>
<List  cars= {cars}/>
<hr/>
<Button variant="primary">Primary</Button>{' '}
<hr/>
<Spinners/>
<hr/>

<PaginationList/>
<hr/>
<Table/>


</div>





    // <>
    //   <container>
    //     <col>
    //       <row>
    //         <Button variant="outline-primary">Primary</Button>
    //       </row>
    //       <row></row>
    //     </col>
    //   </container>
    // </>
  );
}

export default App;
