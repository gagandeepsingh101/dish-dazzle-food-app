import React from 'react'

const CategoryItemList = (props) => {
    const { categoryItemList } = props;
  return (
    <div className=' p-4'>
      <h1>{categoryItemList?.info?.name}</h1>
    </div>
  )
}

export default CategoryItemList
