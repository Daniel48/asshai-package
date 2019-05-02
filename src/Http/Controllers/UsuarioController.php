<?php

namespace Firstparcial\Asshai\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\DB;
use Firstparcial\Asshai\Http\Controllers\FirebaseController;
use Illuminate\Support\Facades\Auth;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $result = DB::table('users as u')
        ->join('groups as g','g.id', '=','u.idGroup')
        ->select('g.name as group','g.id as idGrupo','u.id','u.name','u.telephone','u.address','u.username','u.email')
        ->paginate(5);
    
        return $result;   
   
    }


    public function getId(){
        $namegroup ="Finanzas";
        $id = $this->getIdGroup($namegroup);
        dd($id);
        /* $idGroup = DB::table('groups')
        ->select('id')
        ->where('name','=',$namegroup)
        ->get();
        dd($idGroup[0]->id); */
        
    }

    public function test()
    {   
       
        dd("ESTO ES TEST");
        $result = User::all(); 
        return response().json($result);
         //return view('asshai::welcome');     
   
    }

    public function testpost($request){
        $idGroup = DB::table('groups')
        ->select('*')
        ->where('name','=',$request->user_group)
        ->get();
        dd($idGroup);
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
        $idUser = Auth::user()->id;
        $usuario = DB::table('users')
       ->select('name')
       ->where('id','=',$idUser)
       ->get()->all();
        $user = new User();
        $user->name = $request->user_nom;
        $user->address = $request->user_dir;
        $user->email = $request->user_email;
        $user->telephone = $request->user_tel;
        $user->username = $request->user_username;
        $user->password = bcrypt($request->user_password);
        $user->idGroup = $this->getIdGroup($request->user_group);
        $user->save();
        $bitacora = new FirebaseController();
        $bitacora->logFirebase($request->url,"Registro un nuevo usuario",$usuario[0]->name);
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
        $user = User::find($id);
        
        return $user;
    }

    public function getIdGroup($namegroup){
        $idGroup = DB::table('groups')
        ->select('id')
        ->where('name','=',$namegroup)
        ->get();
        return $idGroup[0]->id;
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
        $idUser = Auth::user()->id;
        $usuario = DB::table('users')
       ->select('name')
       ->where('id','=',$idUser)
       ->get()->all();
        $user = User::find($id);
        $user->name = $request->user_nom;
        $user->address = $request->user_dir;
        $user->email = $request->user_email;
        $user->telephone = $request->user_tel;
        $user->username = $request->user_username;
        $user->idGroup = $this->getIdGroup($request->user_group);  
        $user->save();
        $bitacora = new FirebaseController();
        $bitacora->logFirebase($request->url,"Actualizo o edito un grupo",$usuario[0]->name);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
    }
}
