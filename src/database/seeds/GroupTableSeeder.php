<?php

use Illuminate\Database\Seeder;
use Firstparcial\Asshai\Models\Group;

class GroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Group::create([
            'name'       => 'Administradores',
           ]);
    }
}
