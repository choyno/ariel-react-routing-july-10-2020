import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar() {

  const [categories, setCategories] = useState([]);


  useEffect(() => {
    async function getCategories() {
      let result = await axios({
        method: 'GET',
        url: 'https://api.chucknorris.io/jokes/categories'
      });
      setCategories(result.data);
    }
    getCategories();

  }, []);



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
