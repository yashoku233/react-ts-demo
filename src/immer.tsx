import { produce } from 'immer'
import React, { FC, useState } from 'react'

const Demo: FC = () => {
  // const [userInfo, setUserInfo] = useState({ name: 'zjw', age: 20 })
  const [list, setList] = useState(['x', 'y'])
  // const changeInfo = () => {
  //   // 不去修改 state 的值, 而是要传入一个新的值
  //   setUserInfo(
  //     produce(draft => {
  //       draft.age = 21
  //     })
  //   )
  // }
  function additem() {
    setList(
      produce(draft => {
        draft.push('z')
      })
    )
  }

  return (
    <div>
      <h2>state 不可变数据</h2>
      {/* <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeInfo}>改变年龄</button> */}
      {<div>{JSON.stringify(list)}</div>}
      <button onClick={additem}>改变年龄</button>
    </div>
  )
}

export default Demo
