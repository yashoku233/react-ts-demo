import React, { FC, useMemo, useState } from 'react'

const useMemoDemo: FC = () => {
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)
  const [text, setText] = useState('hello')

  //  useMemo还是用在return Tsx之前
  //   useMemo跟useEffect一样有依赖项
  const sum = useMemo(() => {
    return num1 + num2
  }, [num1, num2])

  return (
    <>
      <p>{sum}</p>
      <p>
        {num1} <button onClick={() => setNum1(num1 + 10)}>点击增加Num1累计数</button>
      </p>
      <p>
        {num2} <button onClick={() => setNum2(num2 + 10)}>点击增加num2累计数</button>
      </p>
      <div>
        {/* 受控组件 */}
        <input type="text" onChange={e => setText(e.target.value)} value={text}></input>
      </div>
    </>
  )
}

export default useMemoDemo
