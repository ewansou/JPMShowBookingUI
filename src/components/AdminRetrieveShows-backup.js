/* import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function AdminRetrieveShows(props) {

  const [showDetails, updateShowDetails] = useState([])

  useEffect(() => {
    axios.get("http://localhost:23008/admin/api/retrieveShows")
       .then(({ data }) => {
           updateShowDetails(data);
       })
    
 }, []);

  return (
    <div>
      <p>Below are the list of shows in system</p>

      <table>
        <thead>
          <tr>
            <th>showNumber</th>
            <th>numberOfRows</th>
            <th>numberOfSeatsPerRow</th>
            <th>totalNumberOfSeats</th>
            <th>cancellationWindowInMinutes</th>
          </tr>
        </thead>
        <tbody>
          {showDetails.map(item => {
            return (
              <tr key={item.id}>
                <td>{ item.showNumber }</td>
                <td>{ item.numberOfRows }</td>
                <td>{ item.numberOfSeatsPerRow }</td>
                <td>{ item.totalNumberOfSeats }</td>
                <td>{ item.cancellationWindowInMinutes }</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Button variant="contained" color="primary">
        <Link href="/">BACK TO HOME</Link>
      </Button>
    </div>
  );
}

export default AdminRetrieveShows;
 */