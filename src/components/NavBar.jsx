import React from "react";
import { useSelector } from "react-redux";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const NavBar = () => {
  const { totalCount } = useSelector((state) => state.cart);

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", background: "#1976D1" }} >

      <div>
        <h2 style={{ color: "#fff" }} > Redux-Toolkit Shopping Cart</h2>
      </div>

      <div>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={totalCount} color="secondary">
            <ShoppingCartIcon style={{ color: "#fff" }} />
          </StyledBadge>
        </IconButton>
      </div>

    </div>
  );
};

export default NavBar;
