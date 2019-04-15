<?php

namespace Firstparcial\Asshai\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Firstparcial\Asshai\Models\Asshai;
use Illuminate\Support\Facades\Mail;
use Firstparcial\Asshai\Mail\AsshaiMailable;

class HomeController extends Controller
{
    public function index()
    {   
        return view('asshai::welcome');
    }
  
}