<?php

namespace Firstparcial\Asshai\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase;
use App\Http\Controllers\Controller;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Database;

class FirebaseController extends Controller
{
    public $fileJson = '/primerparcialsoftware-firebase-adminsdk-s2ejh-b6d906b138.json';
    public $databaseUri = 'https://primerparcialsoftware.firebaseio.com';
    public $base = '127001:8000';
    
    
    public function index(){
        
		$serviceAccount = ServiceAccount::fromJsonFile(__DIR__.$this->fileJson);
		$firebase= (new Factory)
                ->withServiceAccount($serviceAccount)
                ->withDatabaseUri($this->databaseUri)
                ->create();
		$database = $firebase->getDatabase();
		$database->getReference($this->base.'/users')
		        ->push(['title' => 'Post title','body' => 'This should probably be longer.']);
    }
    public function instanceFirebase()
    {
        $serviceAccount = ServiceAccount::fromJsonFile(__DIR__.$this->fileJson);
		$firebase= (new Factory)
                ->withServiceAccount($serviceAccount)
                ->withDatabaseUri($this->databaseUri)
                ->create();
        return $firebase;
    }
    
    public function logFirebase($url,$comentario, $usuario){
        $serviceAccount = ServiceAccount::fromJsonFile(__DIR__.$this->fileJson);
		$firebase= (new Factory)
                ->withServiceAccount($serviceAccount)
                ->withDatabaseUri($this->databaseUri)
                ->create();
        $database = $firebase->getDatabase();
        $hoy = date('d/m/Y');
        $hora = date('H/m/s');
		$database->getReference($this->base.$url)
        ->push(
            [
        'Usuario' => $usuario,
        'Accion' => $comentario,
        'Fecha'=> $hoy,
        'Hora' => $hora
        ]);
    }

}
