import './App.css';
import styled from 'styled-components';


const login = 'Puffy'
function App() {
    return (
        <div className="App">
            <Title>Styled-components <span>.attrs</span> method</Title>

            <Form>
                <Field defaultValue={login}/>
                <Field/>
                <Checkbox type={'checkbox'}></Checkbox>
                <Checkbox2 type={'checkbox'} title='Check me'></Checkbox2>
            </Form>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 32px;
    span {
      color: #e91e63;
    }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;


//через attrs задаем дефолтные артрибуты
const Field = styled.input.attrs((props) => ({
  defaultValue: props.defaultValue
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

//можно сказать что Checkbox - это стилизованный Input
const Checkbox = styled.input.attrs((props) => ({
  /* type: 'checkbox', */
  type: props.type,
}))`

`


//можно сказать что Checkbox - это стилизованный Input
const Checkbox2 = styled.input.attrs(({type, title}) => ({ // применяем диструктуризацию к Props, т.е вытищить только то св-во, к-ое нам нужно
  /* type: 'checkbox', */
  type: type,
  tytle: title //title появляется при наведении курсора
}))`

`
