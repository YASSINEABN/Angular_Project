<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\Passport;

class AuthentificationController extends Controller
{
    //
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|max:255',
            'password' => 'required'
        ]);
        $login = $request->only('email', 'password');

        if (!Auth::attempt($login)) {
            return response(['message' => 'Invalid login credential!!'], 401);
        }
        return "test";

    }
}
