<?php

namespace Firstparcial\Asshai\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Firstparcial\Asshai\Models\Group;
use Illuminate\Support\Facades\DB;
use Firstparcial\Asshai\Http\Controllers\FirebaseController;
use Illuminate\Support\Facades\Auth;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Group::paginate(5);
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getGroups()
    {
        $result = DB::table('groups')->select('id','name')->get()->all();
        return response()->json($result);
    }


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
        $group = new Group();
        $group->name = $request->group_name; 
        $group->save();
        $bitacora = new FirebaseController();
        $bitacora->logFirebase($request->url,"Registro un nuevo grupo",$usuario[0]->name);
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
        $group = Group::find($id);
        return $group;
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
        $group = Group::find($id);
        $group->name = $request->group_name;
        $group->save();
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
        $group = Group::find($id);
        $group->delete();
    }
}
