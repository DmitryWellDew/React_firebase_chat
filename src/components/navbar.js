import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import { LOGIN_ROUTE } from "../utils/constants";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

function Navbar() {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

  return (
      <AppBar position="static" color="primary">
          <Toolbar>
            <Grid container justify={"flex-end"}>
                {user ?
                    <Button onClick={() => {auth.signOut()}} variant={"outlined"}>Log Out</Button>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                        <Button variant={"outlined"}>Login</Button>
                    </NavLink>
                }
            </Grid>
          </Toolbar>
      </AppBar>
  );
}

export default Navbar;
