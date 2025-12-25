import { Heading } from './components/Heading';

import './styles/themes.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá, Mundo!
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ut
        commodi eum, fugiat voluptas doloremque quo delectus. Ad saepe molestias
        quaerat nesciunt debitis dolorum perferendis animi sit? Dolore, fuga
        ipsa.
      </p>
    </>
  );
}
