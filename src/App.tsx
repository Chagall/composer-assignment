import Composer from "./components/Composer";
import NavBar from "./components/NavBar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Composer />
      </Container>
    </>
  );
}

export default App;
