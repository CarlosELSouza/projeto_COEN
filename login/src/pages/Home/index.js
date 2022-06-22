import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import { api } from "../../services/api";

import img from "../../assets/logo_coen_final.png";
import * as C from "./styles";

const Home = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [time, setTime] = useState("");
  const [hours, setHours] = useState("horas");
  const [potency, setPotency] = useState("");

  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleCalculate = async (e) => {
    e.preventDefault();

    const useTime = hours === "minutos" ? Number(time) / 60 : time;

    const consume = ((potency * useTime) / 1000) * 30;

    const totalConsume = consume.toFixed(2);

    const totalValue = (consume * 0.594).toFixed(2);

    alert(
      `Consumo de ${name} em kW/Mês: ${totalConsume}, Você paga R$${totalValue} por mês para usar esse aparelho.`
    );

    await api.post("/", {
      name,
      quantity,
      use_time: time,
      hours_or_minutes: hours,
      potency,
      total_consume: totalConsume,
      total_value: totalValue,
    });
  };

  return (
    <C.Container>
      <C.Title>Home</C.Title>

      <C.DataArea className="areaDados">
        <div id="DivLogo">
          <img className="logo" src={img} alt=""></img>
          <div id="container" className="container align-self-center p-3">
            <form
              className="flex-column justify-content-center"
              onSubmit={handleCalculate}
            >
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="inputEmail4">Nome do Aparelho</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="nomeAparelho"
                    placeholder="Exemplo: TV"
                  />
                </div>

                <div className="form-group col-md-4">
                  <label htmlFor="inputPassword4">Quantidade</label>
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text"
                    className="form-control"
                    id="inputQtd"
                    placeholder="Exemplo: 3"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">Tempo de Uso</label>
                  <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    type="text"
                    className="form-control"
                    id="TempoUso"
                    placeholder="Ex.: 5"
                  />
                </div>

                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="inputEstado">Selecione:</label>
                    <select
                      id="qtdHoras"
                      className="form-control"
                      onChange={(e) => setHours(e.target.value)}
                    >
                      <option
                        id="horas"
                        value="horas"
                        name="horas"
                        defaultValue
                      >
                        Horas por dia
                      </option>
                      <option id="minutos" value="minutos" name="minutos">
                        Minutos por dia
                      </option>
                    </select>
                  </div>

                  <div className="col-2">
                    <label htmlFor="inputCEP">Potência</label>
                    <input
                      value={potency}
                      onChange={(e) => setPotency(e.target.value)}
                      type="text"
                      className="form-control"
                      id="potencia"
                      placeholder="W"
                    />
                  </div>
                </div>
              </div>

              <Button Text="Calcular" Type="submit">
                Calcular
              </Button>
            </form>
          </div>
        </div>
      </C.DataArea>

      <Button Text="Listar" onClick={() => navigate("/list")}>
        Listar
      </Button>

      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
