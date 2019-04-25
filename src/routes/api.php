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

/* Route::group(['namespace' => 'Firstparcial\Asshai\Http\Controllers'], function () {

    Route::get('asshai', 'AsshaiController@index')->name('asshai');
    Route::post('asshai', 'AsshaiController@send');
    
    Route::get('asshai', 'HomeController@index');


    //:::::::USUARIO CONTROLLER::::://
    Route::get('login','UsuarioController@index');
    Route::get('asshai/users','UsuarioController@index');
    Route::post('asshai/users/store','UsuarioController@store');
    Route::get('asshai/users/edit/{id}','UsuarioController@edit');
    Route::put('asshai/users/update/{id}','UsuarioController@update');
    Route::delete('asshai/users/delete/{id}','UsuarioController@destroy');

});
 */