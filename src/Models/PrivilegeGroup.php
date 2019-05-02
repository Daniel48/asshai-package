<?php

namespace Firstparcial\Asshai\Models;

use Illuminate\Database\Eloquent\Model;

class PrivilegeGroup extends Model
{
    protected $guarded = [];
    protected $table = 'privilege_groups';
    protected $fillable = ['idGroup','idPrivilege'];
    protected $primaryKey = 'id';
}
