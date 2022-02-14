import { Image, Header, Menu } from "semantic-ui-react";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <Menu>
    <Menu.Item>
      <Header as="h1" className="navbarTitle">
        <Image src='/images/hugo-logo-no-text.svg' size="small"/>
        <Header.Content>Composer</Header.Content>
      </Header>
    </Menu.Item>
  </Menu>
  );
}

export default NavBar;