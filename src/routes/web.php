<?php

Route::group(['namespace' => 'Firstparcial\Asshai\Http\Controllers'], function () {

    Route::get('asshai', 'AsshaiController@index')->name('asshai');

    Route::post('asshai', 'AsshaiController@send');
});
