import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

function AdminMenu() {
  return (
    <div>
      <p>Admin Menu</p>

      <Button variant="contained" color="primary">
        <Link href="/adminretrieveShows">Retrieve Shows</Link>
      </Button>

      <Button variant="contained" color="primary">
        <Link href="/adminretrieveallshowsseatings">Retrieve All Shows Seatings</Link>
      </Button>

      <Button variant="contained" color="primary">
        <Link href="/adminviewshowbyshownumber">View Show By Show Number</Link>
      </Button>

      <Button variant="contained" color="primary">
        <Link href="/adminretrieveshowseatingsbyshownumber">View Show Seatings By Show Number</Link>
      </Button>

      <Button variant="contained" color="primary">
        <Link href="/adminretrieveshowseatingsbyshownumberandstatus">View Show Seatings By Show Number and Status</Link>
      </Button>

      <Button variant="contained" color="primary">
        <Link href="/">BACK TO HOME</Link>
      </Button>

    </div>
  );
}

export default AdminMenu;
