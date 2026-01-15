<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/dashboard', function () {
    return view('dashboard.index');
});
Route::get('/dashboard/kasir', function () {
    return view('dashboard.kasir.index');
});
Route::get('/dashboard/kasir-cafe', function () {
    return view('dashboard.kasir-cafe.index');
});
