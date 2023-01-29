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
    backgroundImage: `url(${dieFace})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className={props.isHeld ? "die-face is-held" : "die-face"}
      onClick={props.holdDice}
    >
      <div className="die-face--inner" style={styles}></div>
    </div>
  );
}
