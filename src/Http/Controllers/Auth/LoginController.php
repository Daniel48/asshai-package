<?php

//namespace App\Http\Controllers\Auth;
namespace Firstparcial\Asshai\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Request;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest',['only' => 'showLoginForm']);
    }
    
    public function showLoginForm(){
        return view('asshai::auth.login');
    }

    public function login(){
        
        $credenciales = $this->validate(request(),[
            'email' => 'email|required|string',
            'password' => 'required|string'
        ]);
        if(Auth::attempt($credenciales)){
            return redirect()->route('dashboard');
        }
        return back()->withErrors(['email' => trans('auth.failed')]);
    }

    public function logout(){
        Auth::logout();
        return redirect('asshai');
    }
    //Auth::attempt(['email' => $email, 'password' => $password])
}
