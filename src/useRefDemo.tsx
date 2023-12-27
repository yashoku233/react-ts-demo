import React, { FC, useRef } from 'react'

// const Demo: FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null)
//   function selection() {
//     const inputELe = inputRef.current
//     if (inputELe) inputELe.select
//   }

//   return (
//     <div>
//       <input ref={inputRef} defaultValue="hello world" />
//       <button onClick={selection}>选中 input</button>
//     </div>
//   )
// }

const Demo: FC = () => {
  const nameRef = useRef('双越') //不是 DOM 节点 , 普通的JS变量

  function changeName() {
    nameRef.current = 'zhangjwiang' //修改 ref值 ，不会触发rerender （state 会触发组件修改）
  }

  return (
    <div>
      <p>name {nameRef.current}</p>
      <div>
        <button onClick={changeName}>change name</button>
      </div>
    </div>
  )
}

export default Demo
