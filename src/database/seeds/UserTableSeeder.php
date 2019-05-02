<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'address' => 'Av. Cordecruz',
            'telephone' => '75006936',
            'username' => 'adminml',
            'email' => 'admin@gmail.com',
            'idGroup' => 1,
            'email_verified_at' => now(),
            'password' => bcrypt('123123'), // password
            'remember_token' => Str::random(10),
           ]);
    }
}
