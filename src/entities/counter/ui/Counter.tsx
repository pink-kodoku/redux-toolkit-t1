import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
  reset
} from '../model/counterSlice'

import { useState } from 'react'

const Counter = () => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input
          type="text"
          value={incrementAmount}
          onChange={e => setIncrementAmount(+e.target.value)} />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
        </div>
        <button onClick={resetAll}>reset all</button>
      </div>
    </section>
  )
}

export default Counter;