import React, { FC, useState } from 'react'
import { produce } from 'immer'
import QuestionCard from './components/QuestionCard'

const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    {
      id: 'q1',
      title: '问卷1',
      ispublished: false,
    },
    {
      id: 'q2',
      title: '问卷2',
      ispublished: true,
    },
    {
      id: 'q3',
      title: '问卷3',
      ispublished: false,
    },
    {
      id: 'q4',
      title: '问卷4',
      ispublished: false,
    },
  ])
  function add() {
    const r = Math.random().toString().slice(-3)
    // setQuestionList(
    //   questionList.concat({
    //     id: `q${r}`,
    //     title: `问卷${r}`,
    //     ispublished: false,
    //   })
    // )
    setQuestionList(
      produce(draft => {
        draft.push({
          id: `q${r}`,
          title: `问卷${r}`,
          ispublished: false,
        })
      })
    )
  }

  function deleteQuestion1(id: string) {
    // setQuestionList(questionList.filter(q => q.id !== id))

    // immer的方式
    const index = questionList.findIndex(q => q.id === id)
    // draft代表元数据
    setQuestionList(
      produce(draft => {
        draft.splice(index, 1)
      })
    )
  }
  function publishQuestion(id: string) {
    // immer的写法
    setQuestionList(
      produce(draft => {
        const q = draft.find(q => q.id === id)
        if (q) q.ispublished = true
      })
    )
    // questionList.map(item => {
    //   if (item.id === id) return { ...item, ispublished: true }
    //   return { ...item }
    // })
  }
  return (
    <div>
      <h1>学生问卷调查</h1>
      {questionList.map(question => {
        const { title, id, ispublished } = question

        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            ispublished={ispublished}
            deleteQuestion={deleteQuestion1}
            publishQuestion={publishQuestion}
          />
        )
        // 还可以这样解构直接传值给父组件 ⏬
        // return <QuestionCard key={id} {...question} />
      })}
      <button onClick={add}>增加新问卷</button>
    </div>
  )
}

export default List2
