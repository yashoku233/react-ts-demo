import React, { FC } from 'react'
import QuestionCard from './components/QuestionCard'

const List1: FC = () => {
  const questionList = [
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
  ]
  return (
    <div>
      <h1>学生问卷调查</h1>
      {questionList.map(question => {
        const { title, id, ispublished } = question
        return <QuestionCard key={id} id={id} title={title} ispublished={ispublished} />
        // 还可以这样解构直接传值给父组件 ⏬
        // return <QuestionCard key={id} {...question} />
      })}
    </div>
  )
}

export default List1
