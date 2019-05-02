<?php

namespace Firstparcial\Asshai\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Firstparcial\Asshai\Models\PrivilegeGroup;


class PrivilegeGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getPvGpJson(Request $request){


    }

    public function index()
    {
        //
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
        //
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
        //
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
        $idGrupo = $id;
        $privilegeName = $request->privileges_name;
        $idPrivilegio = DB::table('privileges')
        ->select('id')
        ->where('name','=',$privilegeName)
        ->get()
        ->all();
        $query = DB::table('privilege_groups')
        ->select('id')
        ->where('idGroup','=',$idGrupo)
        ->where('idPrivilege','=',$idPrivilegio[0]->id)
        ->get()->all();
        if(count($query)==0){
            $privilegeGroup = new PrivilegeGroup();
            $privilegeGroup->idGroup = $idGrupo;
            $privilegeGroup->idPrivilege = $idPrivilegio[0]->id; 
            $privilegeGroup->save();
        };        
    }



    public function getTest()
    {
        $idGrupo = 3;
        $privilegeName = "eliminar.productos";
        $idPrivilegio = DB::table('privileges')
        ->select('id')
        ->where('name','=',$privilegeName)
        ->get()
        ->all();
        $query = DB::table('privilege_groups')
        ->select('id')
        ->where('idGroup','=',$idGrupo)
        ->where('idPrivilege','=',$idPrivilegio[0]->id)
        ->get()->all();
        if(count($query)==0){
            $privilegeGroup = new PrivilegeGroup();
            $privilegeGroup->idGroup = $idGrupo;
            $privilegeGroup->idPrivilege = $idPrivilegio[0]->id; 
            dd($privilegeGroup);
            $privilegeGroup->save();
        };    
        
        

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
