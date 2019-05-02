<?php

use Illuminate\Database\Seeder;
use Firstparcial\Asshai\Models\PrivilegeGroup;

class PrivilegeGroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PrivilegeGroup::create([
            'idGroup' => 1,
            'idPrivilege' => 1
           ]);
          
    }
}
