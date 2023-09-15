import { useEffect, useState } from "react";
import "./App.css";
import OptionButton from "./components/optionButton";

function App() {
  const [turn, setTurn] = useState(true);
  const [win, setWin] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [reset, setReset] = useState(false);
  const [values, setValues] = useState([
    ["?", "?", "?"],
    ["?", "?", "?"],
    ["?", "?", "?"],
  ]);

  const ChangeValues = (buttonData, line, column) => {
    const newValues = values;
    newValues[line][column] = buttonData;
    setValues(newValues);
    setReset(false);
    setTurn(false);
  };

  const verifyIsCompleted = () => {
    return !values.some((line) => line.includes("?"));
  };

  const ChangeTurn = () => {
    setTurn(!turn);
  };

  const verifyLines = () => {
    return values.some(
      (line) =>
        line.filter((value) => value === line[0] && value !== "?").length === 3
    );
  };

  const verifyColumns = () => {
    for (let i = 0; i < 3; i++) {
      if (
        values
          .map((line) => line[i])
          .every((value) => value === values[0][i] && value !== "?")
      )
        return true;
    }
    return false;
  };

  const verifyDiagons = () => {
    if (
      values[0][0] === values[1][1] &&
      values[0][0] === values[2][2] &&
      values[0][0] != "?"
    )
      return true;
    else if (
      values[0][2] === values[1][1] &&
      values[0][2] === values[2][0] &&
      values[0][2] != "?"
    )
      return true;
    else return false;
  };

  useEffect(() => {
    setWin(verifyLines() || verifyColumns() || verifyDiagons());
    setCompleted(verifyIsCompleted());
  });

  const resetGame = () => {
    setValues([
      ["?", "?", "?"],
      ["?", "?", "?"],
      ["?", "?", "?"],
    ]);
    setWin(false);
    setCompleted(false);
    setTurn(true);
    setReset(true);
  };

  return (
    <div>
      {win && (
        <p className="winTitle">{turn ? "JOGADOR 2" : "JOGADOR 1"} GANHOU !</p>
      )}
      {completed && !win && <p className="winTitle">EMPATE !</p>}
      {!completed && !win && (
        <p className="winTitle">TURNO: {turn ? "1º Jogador" : "2º Jogador"}</p>
      )}
      <table>
        <tbody>
          <tr>
            <td>
              <OptionButton
                line={0}
                column={0}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={0}
                column={1}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={0}
                column={2}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
          </tr>
          <tr>
            <td>
              <OptionButton
                line={1}
                column={0}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={1}
                column={1}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={1}
                column={2}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
          </tr>
          <tr>
            <td>
              <OptionButton
                line={2}
                column={0}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={2}
                column={1}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={2}
                column={2}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="resetButton" onClick={resetGame}>
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>
    </div>
  );
}

export default App;
