import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  return (
    <div>
      <div className="app-top-bar">
        <Link to="/productList">
          <h1>Tienda de teléfonos</h1>
        </Link>
        <Link className="button fancy-button" to="/cart">
          <i className="material-icons">shopping_cart</i>
          Checkout
        </Link>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              history.push('/login');
            }}
          >
            Login
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              history.push('/productList');
            }}
          >
            Lista de productos
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              history.push('/register');
            }}
          >
            Registro
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
