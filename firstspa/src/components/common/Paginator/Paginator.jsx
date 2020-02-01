import React from 'react';
import css from './Paginator.module.css';

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
      <div>
        {pages.map(x =>
          <span key={x.id} onClick={() => { props.onPageChanged(x) }}
            className={(props.currentPage === x) && css.selectedPage}>{x}</span>
        )}
      </div>
  )
}

export default Paginator;