import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Todos from './Todos';

describe('TODO Test', () =>{
  it('todos', async() => {
    const value = {
      todoList: {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      }
    }
    render(<Todos props={value}/>);
    const element = await screen.getByTestId("todo");
    console.log("element", element);
    expect(element).toBeInTheDocument();
  });

  it('load', () => {
    render(<Todos/>);
    const ele = screen.getByText('Loading....');
    expect(ele).toBeInTheDocument();
  });
  
})