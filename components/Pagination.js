import _ from 'lodash';
import React from 'react'
import styles from '../styles/Shop.module.css'


const Pagination = ({ items, pageSize, currentPage, onPageChange}) => {

const pagesCount = Math.ceil(items/pageSize);
if (pagesCount === 1) return null;
const pages = _.range(1, pagesCount + 1);
console.log(pages)



  return (
    <div className={styles.paginatebar}>       
      <ul >
        {pages.map((page) =>(
          <li key={page} className={page === currentPage ? styles.pageactive : styles.pagenotactive}>
            <a onClick={() => onPageChange(page)} className={styles.pagenotactive} href="#">
              {page}              
            </a>
          </li>
        ))}
        
      </ul>     
    </div>
  )
}

export default Pagination

export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
   };