import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*
  styled-components CSS
*/

const NavIcon = styled.div`
`;

// Defined CSS for individual navigation item
const StyledNavItem = styled.div`
  height: 70px;
  width: 75px;
  text-align: center;
  margin-bottom: 0;
  a {
    font-size: 2.7em;
    color: $((props) => props.active ? "white" : "#9FFFCB");
    :hover {
      opacity: 0.7;
      text-decoration: none;
    }
  }
`;

export default class NavItem extends React.Component {
  // An event handler that updates the parent Sidebar component state
  // with the onItemClick function passed down from the parent component
  // to update parent state
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }

  render() {
    const { active } = this.props;

    return (
      <StyledNavItem>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}
