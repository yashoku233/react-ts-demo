import React, { FC } from 'react'
// import './questionCard.css'
import classnames from 'classnames'
import styles from './questionCard.module.scss'

type propType = {
  id: string
  title: string
  ispublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

const QuestionCard: FC<propType> = prop => {
  const { title, id, ispublished, deleteQuestion, publishQuestion } = prop
  // console.log(prop, 'prop')

  function del(id: string) {
    // 添加&&表示如果有值就更新 没有就不更新
    // deleteQuestion && deleteQuestion(id)
    deleteQuestion?.(id)
  }

  function publish(id: string) {
    publishQuestion?.(id)
  }
  // 销毁的useEffect的
  // useEffect(() => {
  //   return () => {
  //     console.log('删除一个组件', id)
  //   }
  // }, [])
  // let classPulic = 'list-item'
  // if (ispublished) classPulic += ' published'

  // const itemclassName = classnames({
  //   'list-item': true,
  //   published: ispublished,
  // })
  const listItemClass = styles['list-item']
  const publishedClass = styles.published
  const itemClassName = classnames({
    [listItemClass]: true,
    [publishedClass]: ispublished,
  })
  // console.log(itemClassName, 'itemClassName')
  return (
    <div key={id} className={itemClassName}>
      <strong> {title}</strong>
      &nbsp;
      {ispublished ? <span className={styles['published-span']}>已发布</span> : <span>未发布</span>}
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
