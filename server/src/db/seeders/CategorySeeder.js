/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Category } from "../../models/index.js"

class CategorySeeder {
  static async seed() {
    const categoriesData = [
      {
        name: "Birthday"
      },
      {
        name: "Wedding"
      },
      {
        name: "Retirement"
      }
    ]

    for (const singleCategoryData of categoriesData) {
      const currentCategory = await Category.query().findOne(singleCategoryData)
      if (!currentCategory) {
        await Category.query().insert(singleCategoryData)
      }
    }
  }
}

export default CategorySeeder