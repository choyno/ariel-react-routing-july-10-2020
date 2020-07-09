import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../redux/modules/category'

function Sidebar() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [ dispatch ]);

  const categories =  useSelector(state => state.category.categories);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/category">Categories</Link>
        </li>

          {
            categories.map(category => (
              <li key={category}>
                <Link to={`/jokes/category/${category}`}>
                    {category}
                </Link>
              </li>
            ))
          }

      </ul>
    </nav>
  );
}

export default Sidebar;
