import React from 'react';


import { Pagination } from 'antd';

const PaginationComp = ({ currentPage, itemsPerPage, totalItems, paginate }) =>
    <div className=' my-10 flex justify-center'>
        <Pagination current={currentPage}
            pageSize={itemsPerPage}
            total={totalItems}
            onChange={paginate}

        />
        
        
    </div>

    
export default PaginationComp;