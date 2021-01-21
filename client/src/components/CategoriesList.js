import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const CategoriesList = props => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const response = await fetch(`/api/v1/categories`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const body = await response.json()
      setCategories(body.categories)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const categoryListItems = categories.map(categoryObject => {
    return(
      <li key={categoryObject.id}>
        <Link to={`/categories/${categoryObject.id}`}>
          {categoryObject.name}
        </Link>
      </li>
    )
  })

  return(
    <div>
      <h1>Event Categories:</h1>
      {categoryListItems}
    </div>
  )
}

export default CategoriesList
