<?php

namespace Firstparcial\Asshai\Models;

use Illuminate\Database\Eloquent\Model;

class Privilege extends Model
{
    protected $guarded = [];
    protected $table = "privileges";
    protected $fillable = ['name','slug','description'];
    protected $primaryKey = 'id';
}
