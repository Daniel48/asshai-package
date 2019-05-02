<?php

use Illuminate\Database\Seeder;

class BaseDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
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

           //PRIVILEGIOS//
           DB::table('privileges')->insert([
            'name' => 'Acceso Total',
            'slug' => 'all access',
            'description' => 'Acceso a todo el sistema'
           ]);
           DB::table('privileges')->insert([
            'name' => 'Usuarios',
            'slug' => 'users',
            'description' => 'Los usuarios podran listar los usuarios'
           ]);

           DB::table('privileges')->insert([
            'name' => 'Grupos',
            'slug' => 'groups',
            'description' => 'Los usuarios podran listar los grupos'
           ]);
           DB::table('privileges')->insert([
            'name' => 'Privilegios',
            'slug' => 'privileges',
            'description' => 'Los usuarios podran listar los privilegios'
           ]);
           
            //GRUPOS//
           DB::table('groups')->insert([
            'name'       => 'Administradores',
           ]);
            //PRIVILEGIOS GRUPOS//
            DB::table('privilege_groups')->insert([
                'idGroup' => 1,
                'idPrivilege' => 1
               ]);
    }
}
