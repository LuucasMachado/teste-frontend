import React, {Fragment, useEffect } from 'react';

interface TotalPageProps {
  totalPages: string;
};



const TotalPage: React.FC<TotalPageProps> = ({totalPages}) => {
    return (
        <Fragment>
          <div className="total_count text-uppercase text-muted">
            Total results {totalPages}
          </div>
        </Fragment>
    );
};

export default TotalPage;