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
Route::get('/dashboard/products', function () {
    return view('dashboard.product.index');
});
Route::get('/dashboard/products/detail', function () {
    return view('dashboard.product.show');
});
Route::get('/dashboard/categories', function () {
    return view('dashboard.category.index');
});
Route::get('/dashboard/inventories', function () {
    return view('dashboard.inventory.index');
});