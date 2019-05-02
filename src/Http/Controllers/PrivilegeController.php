<?php

namespace Firstparcial\Asshai\Http\Controllers;

use Illuminate\Http\Request;
use Firstparcial\Asshai\Models\Privilege;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Firstparcial\Asshai\Http\Controllers\FirebaseController;
use Illuminate\Support\Facades\Auth;

class PrivilegeController extends Controller
{
    public $database;
    public function __construct()
    {
        /* $instance = new FirebaseController();
        $firebase = $instance->instanceFirebase();
        $this->database = $firebase->getDatabase(); */
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Privilege::paginate(5);
        return $result;
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
        $privilege = new Privilege();
        $privilege->name = $request->privilege_name;
        $privilege->description = $request->privilege_description;
        $privilege->save();
        $bitacora = new FirebaseController();
        $bitacora->logFirebase($request->url,"Registro un nuevo privilegio",$usuario[0]->name);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function groupHasPriveleges($id,Request $request){
        $idUser = $id;
       
        if ($id==1) {
            $privilege= DB::table('privileges as p')
            ->select('p.name as privilegio','p.slug','p.id as idPriv')
            ->where('p.id','<>',1)
            ->get()->all();
            return $privilege;
        } else {
            $idUserGroup = DB::table('users')
            ->select('idGroup')
            ->where('id','=',$idUser)
            ->get()->all();
            $idGroup = $idUserGroup[0]->idGroup;
            $privilege = DB::table('privilege_groups as pg')
            ->join('privileges as p','p.id','=','pg.idPrivilege')
            ->join('groups as g','g.id','=','pg.idGroup')
            ->select('p.name as privilegio','p.slug','g.name as grupo','p.id as idPriv','g.id as idGroup')
            ->where('idGroup','=',$idGroup)
            ->get()->all();  
            return $privilege;
        }
    }
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
        $privilege = Privilege::find($id);
        return $privilege;
    }


    public function getPriv()
    {
        $result = DB::table('privileges')->select('id','name')->get()->all();
        return response()->json($result);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   $idUser = Auth::user()->id;
        $usuario = DB::table('users')
       ->select('name')
       ->where('id','=',$idUser)
       ->get()->all();
        $privilege = Privilege::find($id);
        $privilege->name = $request->privilege_name;
        $privilege->description = $request->privilege_description;
        $privilege->save();
        $bitacora = new FirebaseController();
        $bitacora->logFirebase($request->url,"Actualizo o edito un privilegio",$usuario[0]->name);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
