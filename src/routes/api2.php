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

/*  Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */
/* Route::group(['namespace' => 'Firstparcial\Asshai\Http\Controllers'], function () {
    Route::get('test','UsuarioController@test');
}); */
 /* Route::group(['prefix' => 'admin'], function () {
    Route::get('test', function(){
        return 'Esto es un prueba';
    });
}); */ 
Route::group(['prefix' => 'api'], function () {

    Route::group(['namespace' => 'Firstparcial\Asshai\Http\Controllers'], function () {

    // Route::get('asshai', 'AsshaiController@index')->name('asshai');
        //Route::post('asshai', 'AsshaiController@send');
        //Route::get('asshai', 'HomeController@index'); 
        Route::get('test','UsuarioController@test');

        //:::::::USUARIO CONTROLLER::::://
        Route::get('login','UsuarioController@index');
        Route::get('users','UsuarioController@index');
        Route::post('users/store','UsuarioController@store');
        Route::get('users/edit/{id}','UsuarioController@edit');
        Route::put('users/update/{id}','UsuarioController@update');
        Route::delete('users/delete/{id}','UsuarioController@destroy');

        });
});