<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;

class Usercontroller extends Controller
{
    function index()
    {
        return "hybrid";
    }
    function user(Request $request)
    {
        return $request->user();
    }
}
