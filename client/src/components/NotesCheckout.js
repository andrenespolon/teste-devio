import React, { useState } from "react";
import { connect } from "react-redux";
import { addClientName } from "../store/modules/checkout/action";
import { addNotes } from "../store/modules/checkout/action";
import styled from "styled-components";
import { Input, Space } from "antd";

const Container = styled.div`
  padding: 10px 20px;
`;

function NotesCheckout({ dispatch }) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNote = (e) => {
    setNote(e.target.value);
  };

  const addClient = () => {
    if (name.length > 0) return dispatch(addClientName(name));
  };

  const addNote = () => {
    if (note.length > 0) return dispatch(addNotes(note));
  };

  return (
    <>
      <Container>
        <h2>Observações</h2>
        <Space style={{ width: "100%" }} direction="vertical">
          <Input
            onChange={onChangeName}
            onBlur={addClient}
            placeholder="Nome do cliente"
          />
          <Input.TextArea
            onChange={onChangeNote}
            onBlur={addNote}
            rows={2}
            placeholder="Observações do pedido"
          />
        </Space>
      </Container>
    </>
  );
}

export default connect(null)(NotesCheckout);
