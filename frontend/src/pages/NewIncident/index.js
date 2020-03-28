import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import { NewIncidentContainer, Content, Form } from "./styles";
import { Button, BackLink } from "../../styles/global";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (err) {
      alert("Error ao cadastrar caso, tente novamente.");
    }
  }

  return (
    <NewIncidentContainer>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <BackLink to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </BackLink>
        </section>

        <Form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>

          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </NewIncidentContainer>
  );
}
