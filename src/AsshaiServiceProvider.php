<?php

namespace Firstparcial\Asshai;

use Illuminate\Support\ServiceProvider;

class AsshaiServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');
        $this->loadViewsFrom(__DIR__ . '/views', 'asshai');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->mergeConfigFrom(
            __DIR__ . '/config/asshai.php',
            'asshai'
        );
        $this->publishes([
            __DIR__.'/config/asshai.php' => config_path('asshai.php')
        ]);
    }
    public function register()
    { }
}
