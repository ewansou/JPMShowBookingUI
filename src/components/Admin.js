import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

function adminMenu() {
  return (
    <div>
      <p>Menu</p>
      <Button variant="contained" color="primary">
      <Link href="/adminretrieveShows">Retrieve Shows</Link>
    </Button>
      <Button variant="contained" color="primary">
        <Link href="/">BACK TO HOME</Link>
      </Button>
    </div>
  );
}

export default adminMenu;
