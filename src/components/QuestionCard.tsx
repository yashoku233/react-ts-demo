import React, { FC } from 'react'
import './questionCard.css'

type propType = {
  id: string
  title: string
  ispublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

const QuestionCard: FC<propType> = prop => {
  const { title, id, ispublished, deleteQuestion, publishQuestion } = prop
  console.log(prop, 'prop')

  function del(id: string) {
    // 添加&&表示如果有值就更新 没有就不更新
    // deleteQuestion && deleteQuestion(id)
    deleteQuestion?.(id)
  }

  function publish(id: string) {
    publishQuestion?.(id)
  }

  return (
    <div key={id} className="list-item">
      <strong> {title}</strong>
      &nbsp;
      {ispublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          publish(id)
        }}
      >
        发布问卷
      </button>
      <button
        onClick={() => {
          del(id)
        }}
      >
        删除问卷
      </button>
    </div>
  )
}

export default QuestionCard
