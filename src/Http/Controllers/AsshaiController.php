<?php

namespace Firstparcial\Asshai\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Firstparcial\Asshai\Models\Asshai;
use Illuminate\Support\Facades\Mail;
use Firstparcial\Asshai\Mail\AsshaiMailable;

class AsshaiController extends Controller
{
    public function index()
    {
        return view('asshai::asshai');
    }
    public function send(Request $request)
    {
        Mail::to(config('asshai.send_email_to'))->send(new AsshaiMailable($request->message,$request->name));
        Asshai::create($request->all());
        return redirect(route('asshai'));
    }
}
