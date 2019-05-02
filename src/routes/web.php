<?php

/* Route::get('/asshai/{path}',function(){
            
    return view('asshai::welcome');
        
})->where('path','.*'); */

Route::get('asshai',function(){
    return view('asshai::auth.login');
});

/* Route::get('/asshai',function(){
    return view('asshai::auth.login');
}); */


Route::group(['namespace' => 'Firstparcial\Asshai\Http\Controllers'], function () {

    Route::get('asshai', 'Auth\LoginController@showLoginForm')
    ->name('dashboard');
    Route::get('asshai/index', 'HomeController@index')
    ->name('dashboard');

    Route::post('login','Auth\LoginController@login')->name('login');
    Route::post('logout','Auth\LoginController@logout')->name('logout');

    Route::get('firebase','FirebaseController@index');
    
       

});

/* Route::group(['namespace' => 'Firstparcial\Asshai\Http\Controllers'], function () {
    

    Route::get('asshai', 'AsshaiController@index')->name('asshai');
    Route::post('asshai', 'AsshaiController@send');
    
    Route::get('asshai', 'HomeController@index');


    //:::::::USUARIO CONTROLLER::::://
    Route::get('loginu','UsuarioController@index');
    
    

    Route::get('asshai/users','UsuarioController@index');
    Route::post('asshai/users/store','UsuarioController@store');
    Route::get('asshai/users/edit/{id}','UsuarioController@edit');
    Route::put('asshai/users/update/{id}','UsuarioController@update');
    Route::delete('asshai/users/delete/{id}','UsuarioController@destroy');

});
 */