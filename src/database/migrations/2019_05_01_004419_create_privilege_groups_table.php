<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrivilegeGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('privilege_groups', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('idGroup');
            $table->integer('idPrivilege');
            $table->timestamps();
        });
        //$table->primary(['permission_id', 'role_id']);
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('privilege_groups');
    }
}
