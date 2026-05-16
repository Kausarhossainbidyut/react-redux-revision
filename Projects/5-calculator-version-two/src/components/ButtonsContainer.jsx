import styles from "./ButtonsContainer.module.css"
const ButtonsContainer = () => {
    const buttonNumbers = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <div className={styles.buttonsContainer}>
        {buttonNumbers.map(number =><button className={styles.button}>{number}</button>)}
    
    </div>
  );
};

export default ButtonsContainer;
