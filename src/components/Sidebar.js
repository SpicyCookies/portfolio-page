import React from 'react';
import styled from 'styled-components';

/*
  Child component imports
*/
import NavItem from './sidebar/NavItem';

/*
  styled-components CSS
*/

// Defined CSS for Sidebar background
const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 300px;
  z-index: 1;
  background-color: #222;
  overflow-x: hidden;
`;

/*
  Components
*/

// Renders the fixed sidebar
export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: '/',
      items: [
        {
          path: '/', // Used to check which NavItem is active
          name: 'Home',
          css: 'fa fa-fw fa-home',
          key: 1 // Remove console error
        },
        {
          path: '/about',
          name: 'About',
          css: 'fa fa-id-badge',
          key: 2
        },
        {
          path: '/NoMatch',
          name: 'NoMatch',
          css: 'fa fa-hashtag',
          key: 3
        }
      ]
    }
  }

  onItemClick = (path) => {
    this.setState({ activePath: path }); // Set the activePath prop state, causes CSS re-render
  }

  render() {
    const { activePath, items } = this.state;
    return (
      <StyledSideNav>
        {
          items.map((item) => {
            return (
              <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key}/>
            )
          })
        }
      </StyledSideNav>
    );
  }
}
