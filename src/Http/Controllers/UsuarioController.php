<?php

namespace Firstparcial\Asshai\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Firstparcial\Asshai\Models\Usuario;


class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $result = Usuario::paginate(2);
        return $result;
        /* return view('asshai::auth.login'); */     
   
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request->user_dir);
        
        $user = new Usuario();
        $user->nombre = $request->user_nom;
        $user->direccion = $request->user_dir;
        $user->email = $request->user_email;
        $user->telefono = $request->user_tel;
        $user->username = $request->user_username;
        $user->password = $request->user_password; 
        $user->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = Usuario::find($id);
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Usuario::find($id);
        $user->nombre = $request->user_nom;
        $user->direccion = $request->user_dir;
        $user->email = $request->user_email;
        $user->telefono = $request->user_tel;
        $user->username = $request->user_username; 
        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Usuario::find($id);
        $user->delete();
    }
}
