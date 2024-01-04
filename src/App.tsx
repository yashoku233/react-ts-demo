import React from 'react'
// import logo from './logo.svg'
// import List1 from './list1'
// import Demo from './stateDemo2'
// import List2 from './list2'
// import Demo from './immer'
// import Demo from './useRefDemo'
// import UseMemoDemo from './useMemo'
// import UseCallbackDemo from './useCallbackDemo'
import useTitle from './hooks/useTitle'

function App() {
  useTitle('2333')
  return (
    <>
      <div>{/* <UseCallbackDemo /> */}</div>
    </>
  )
}

export default App
