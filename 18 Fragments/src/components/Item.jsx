import React from 'react';

const Item = ({fooditem}) => {
    
    return (
        <li class="list-group-item item-khb">
          {fooditem}
        </li>
    );
};

export default Item;