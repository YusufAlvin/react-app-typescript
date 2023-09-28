import React from "react"
import { useAppDispatch, useAppSelector } from "../../store";
import { decrement, increment, incrementByAmount } from "../../store/slices/appSlice";
import styles from './Counter.module.scss'

const Counter = () : JSX.Element => {
  const counter = useAppSelector(state => state.appState.counter);
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<string>("0");

  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    dispatch(increment());
  }

  const handleMinClick = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    dispatch(decrement());
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setValue(event.target.value);
  }

  const handleAddValueClick = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    dispatch(incrementByAmount(Number(value)));
  }

  return (
    <div className={styles.container}>
      <input value={value} onChange={handleInputChange} />
      <div>{counter}</div>
      <button onClick={handleAddValueClick}>Add</button>
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleMinClick}>-</button>
    </div>
  );
}

export default Counter;