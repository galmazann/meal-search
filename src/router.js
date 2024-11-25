import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from './views/MealsByName.vue'
import MealsByLetter from './views/MealsByLetter.vue'
import MealsByIngredients from './views/MealsByIngredients.vue'
import MealDetails from './views/MealDetails.vue'
import Ingredients from './views/Ingredients.vue'


const routes = [
  { path: '/meals-search/', name: 'Home', component: HomePage },
  { path: '/meals-search/by-name/:name?', name: 'MealsByName', component: MealsByName },
  { path: '/meals-search/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
  { path: '/meals-search/by-ingredient/:ingredient?', name: 'MealsByIngredients', component: MealsByIngredients },
  { path: '/meals-search/meal/:id', name: 'MealDetails', component: MealDetails },
  { path: '/meals-search/ingredients', name: 'Ingredients', component: Ingredients },
  { path: '/meals-search/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
