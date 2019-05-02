<?php

use Illuminate\Database\Seeder;
use Firstparcial\Asshai\Models\Privilege;

class PrivilegeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Privilege::create([
            'name' => 'Acceso Total',
            'slug' => 'all access',
            'description' => 'Acceso a todo el sistema'
           ]);
        Privilege::create([
            'name' => 'Usuarios',
            'slug' => 'users',
            'description' => 'Los usuarios podran listar los usuarios'
           ]);
        Privilege::create([
            'name' => 'Grupos',
            'slug' => 'groups',
            'description' => 'Los usuarios podran listar los grupos'
           ]);
        Privilege::create([
            'name' => 'Privilegios',
            'slug' => 'privileges',
            'description' => 'Los usuarios podran listar los privilegios'
           ]);
       
       
    }
}
