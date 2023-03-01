import { nanoid } from 'nanoid';

import styled from 'styled-components';
import { BsPlusCircleFill } from 'react-icons/bs';

export default function Form({ onAddCard }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const text = form.text.value;
    const name = form.name.value;

    const newCard = {
      id: nanoid(),
      text: text,
      name: name,
    };

    onAddCard(newCard);

    form.reset();
  }

  return (
    <EntryForm onSubmit={handleSubmit}>
      <InputWrapper>
        <input
          placeholder={`Type your thoughts...`}
          name="text"
          autoComplete="off"
          aria-label="Enter text"
        />
        <input
          placeholder={`your name..`}
          name="name"
          aria-label="Enter your name"
        />
      </InputWrapper>
      <Button>
        <BsPlusCircleFill aria-label="Create new entry" />
      </Button>
    </EntryForm>
  );
}

const EntryForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
`;

const InputWrapper = styled.div`
  width: calc(100% - 100px);
  display: flex;
  justify-content: space-around;

  input {
    border: none;
    padding: 10px;
    border-top: 2px solid #252629;
    height: 100%;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: white;
  color: #fe4b13;
  border: none;
  border-radius: 7px;

  svg {
    height: 48px;
    width: 48px;
  }
`;
