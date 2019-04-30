<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

 Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'api'], function () {

    Route::group(['namespace' => 'Firstparcial\Asshai\Http\Controllers'], function () {

    // Route::get('asshai', 'AsshaiController@index')->name('asshai');
        //Route::post('asshai', 'AsshaiController@send');
        //Route::get('asshai', 'HomeController@index'); 
        Route::get('test','UsuarioController@test');
        Route::post('testpost','UsuarioController@testpost');
        Route::get('getid','UsuarioController@getId');

        //:::::::LOGIN CONTROLLER :::::://

         //:::::::USUARIO CONTROLLER::::://
        //Route::get('login','UsuarioController@index');
        Route::get('users','UsuarioController@index');
        Route::post('users/store','UsuarioController@store');
        Route::get('users/edit/{id}','UsuarioController@edit');
        Route::put('users/update/{id}','UsuarioController@update');
        Route::delete('users/delete/{id}','UsuarioController@destroy');

        //:::::::GRUPO CONTROLLER::::://
        //Route::get('login','UsuarioController@index');
        Route::get('groups','GroupController@index');
        Route::post('groups/store','GroupController@store');
        Route::get('groups/edit/{id}','GroupController@edit');
        Route::put('groups/update/{id}','GroupController@update');
        Route::delete('groups/delete/{id}','GroupController@destroy');
 
        Route::get('gpjson','GroupController@getGroups');
           
    });
});