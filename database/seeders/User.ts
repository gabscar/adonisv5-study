import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    const uniqueKey = 'email'
    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'virk@adonisjs.com',
        password: 'secrets',
      },
      {
        email: 'romain@adonisjs.com',
        password: 'supersecrets',
      },
    ])
  }
}
