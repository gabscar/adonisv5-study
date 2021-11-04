import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})

Route.group(() => {
  // Route.get('/users', 'UsersController.index')
  // Route.get('users/:id', 'UsersController.show')
  // Route.put('users/:id', 'UsersController.update')
  // Route.delete('users/:id', 'UsersController.destroy')
  Route.resource('users', 'UsersController')
    .apiOnly()
    .middleware({
      index: ['auth'],
      show: ['auth'],
      update: ['auth'],
      destroy: ['auth'],
    })
}).middleware('auth')

//Route.post('users', 'UsersController.store')
