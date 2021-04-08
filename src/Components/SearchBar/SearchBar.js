import React from 'react'

const SearchBar = () => {
    return ( 
    <form>
      <input 
      type='text' 
      className='search-bar' 
      value={this.state.searchValue}
      placeholder='Search for a movie'
      onChange={(event) => this.handleChange(event)}>
      </input>
      <button 
      className='search-button' 
      onClick={this.filterByTitle}>
        <img className='search-logo' src={search} alt='search-logo'></img>
      </button>
    </form>
  )
}
 
export default SearchBar