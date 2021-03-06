import React from 'react'

export const SearchBox = ({ searchChange }) => {
  return (
    <div className='search'>
      <input
        onChange={(e) => searchChange(e)}
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        name=''
        id=''
        placeholder='search robots'
      />
    </div>
  )
}
