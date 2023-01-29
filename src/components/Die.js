import diceOne from "../assets/dice-one-regular.svg";
import diceTwo from "../assets/dice-two-regular.svg";
import diceThree from "../assets/dice-three-regular.svg";
import diceFour from "../assets/dice-four-regular.svg";
import diceFive from "../assets/dice-five-regular.svg";
import diceSix from "../assets/dice-six-regular.svg";

export default function Die(props) {
  // assign die face svgs
  let dieFace = "";
  switch (props.value) {
    case 1:
      dieFace = diceOne;
      break;
    case 2:
      dieFace = diceTwo;
      break;
    case 3:
      dieFace = diceThree;
      break;
    case 4:
      dieFace = diceFour;
      break;
    case 5:
      dieFace = diceFive;
      break;
    case 6:
      dieFace = diceSix;
      break;
    default:
      break;
  }

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
