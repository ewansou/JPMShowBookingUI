import React,  { useEffect, useState, useRef }  from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { getAdminRetrieveShows } from "../actions/adminRetrieveShowsAPI";
import axios from "axios";

function AdminRetrieveShows(props) {
   const getRequestStateObject = useSelector(
    (state) => state.useRequestReducer
  ); 

  const dispatch = useDispatch();
  const history = useHistory(); 

  const [showDetails, updateShowDetails] = useState([])

  useEffect(() => {
    //const data = await ;
    
    const yourFunction = async () => {
      const data1 = await dispatch(getAdminRetrieveShows);
      console.log(data1);
    }

    updateShowDetails(yourFunction);

    console.log("GET request to /admin/api/retrieveShows");
  }, []);
 

/*   useEffect(() => {
    axios.get("http://localhost:23008/admin/api/retrieveShows")
       .then(({ data }) => {
           updateShowDetails(data);
       })
    
 }, []);
 */
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
