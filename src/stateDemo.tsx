import React, { FC, useState } from 'react'

const Demo: FC = () => {
  const [count, SetCount] = useState(0)
  function add() {
    SetCount(count + 1)
  }
  return (
    <>
      <div>
        <button onClick={add}>点击增加点赞 {count}</button>
      </div>
    </>
  )
}

export default Demo
