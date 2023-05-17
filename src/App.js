import Container from "./components/container/Container";
import Timer from "./components/timer/Timer";


const App = () => {
  return(
<div>
    <h2>Stoper app</h2>
      <Container>
        <Timer />
      </Container>
</div>
  );
};

export default App;
