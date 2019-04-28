<?php

namespace Firstparcial\Asshai;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AsshaiServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Schema::defaultStringLength(191);
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');
        $this->loadRoutesFrom(__DIR__ . '/routes/api2.php');
        
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'asshai');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->mergeConfigFrom(
            __DIR__ . '/config/asshai.php',
            'asshai'
        );

        $this->publishes([
            __DIR__ . '/config/asshai.php' => config_path('asshai.php'),
            __DIR__ . '/views' => resource_path('views/vendor/asshai')
        ]);
    }
    public function register()
    { }
}
