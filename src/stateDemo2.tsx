import React, { FC, useState } from 'react'

const Demo: FC = () => {
  //   const [userInfo, setUserInfo] = useState({ name: 'zjw', age: 20 })
  //   const changeInfo = () => {
  //     // 不去修改 state 的值, 而是要传入一个新的值
  //     setUserInfo({
  //       name: 'zjw',
  //       age: 21,
  //     })
  //   }
  const [list, setlist] = useState(['x', 'y'])
  function additem() {
    // setlist([...list, 'z'])
    setlist(list.concat('z'))
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
