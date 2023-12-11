import React, { FC } from 'react'
import './questionCard.css'

type propType = {
  id: string
  title: string
  ispublished: boolean
}

const QuestionCard: FC<propType> = prop => {
  function edit(id: string) {
    console.log('edit', id)
  }
  const { title, id, ispublished } = prop

  return (
    <div key={id} className="list-item">
      <strong> {title}</strong>
      &nbsp;
      {ispublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          edit(id)
        }}
      >
        编辑问卷
      </button>
    </div>
  )
}

export default QuestionCard
