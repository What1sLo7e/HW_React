import React, {Component} from 'react';



const Controls = ({search, sort, onSearch, onSort}) => {
    
    return(
        <div>
            <div>
                <h1>Movies</h1>
                <input type="text" className="form-control" id="search"  placeholder='Search' style={{maxWidth: '320px'}} value={search} onChange={onSearch}/>
                <button className='btn btn-outline-secondary' type='button'><i className='bi-search'/></button>
            </div>

            Сортировать: 
            <ul className='list-inline'>
                <li className='form-check form-check-inline'>
                    <label className='form-check-label'>
                        <input className='form-check-input' type='radio' name='sort' value='name' checked={sort === 'name'} onChange={onSort}/>
                        name
                    </label>
                </li>
                <li className='form-check form-check-inline'>
                    <label className='form-check-label'>
                        <input className='form-check-input' type='radio' name='sort' value='premiered' checked={sort === 'premiered'} onChange={onSort} />
                        premiered
                    </label>
                </li>
                <li className='form-check form-check-inline'>
                    <label className='form-check-label'>
                        <input className='form-check-input' type='radio' name='sort' value='rating' checked={sort === 'rating'}  onChange={onSort} />
                        rating
                    </label>

                </li>
            </ul>
        </div>
        
    )
}



export default Controls