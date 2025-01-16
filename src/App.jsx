// src/App.jsx
import Card from './components/Card';
import styled from '@emotion/styled';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

function App() {
  return (
    <div>
      <h1>Hello Theme UI with Vite</h1>
      <Button>This my button component.</Button>)
      <Card
        title='Card Title'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc elit, feugiat ut velit eget, pellentesque accumsan libero. Duis interdum ante sed ipsum imperdiet congue nec non mauris. Quisque ac ultricies nunc. Sed nisi diam, suscipit eu laoreet a, bibendum nec mauris. Aliquam tristique rhoncus ipsum scelerisque egestas. Maecenas rhoncus malesuada mauris, vel porta ex tincidunt non. Duis ac sapien in felis fermentum tristique. Nam a erat faucibus, varius magna ac, interdum tortor. Aenean quis varius mi, nec molestie neque. In dignissim diam in velit pharetra cursus. Integer gravida, arcu non sagittis iaculis, justo leo facilisis augue, consequat mollis risus erat quis velit. In turpis nibh, ornare ut facilisis id, dignissim non enim. Fusce maximus elit sit amet dolor aliquet, et tristique elit eleifend. Aenean ornare tortor sem, at sollicitudin ipsum scelerisque a.
Something a bit less important'
      />
    </div>
  );
}

export default App;
