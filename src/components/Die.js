import diceOne from "../assets/dice-one-regular.svg";
import diceTwo from "../assets/dice-two-regular.svg";
import diceThree from "../assets/dice-three-regular.svg";
import diceFour from "../assets/dice-four-regular.svg";
import diceFive from "../assets/dice-five-regular.svg";
import diceSix from "../assets/dice-six-regular.svg";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
