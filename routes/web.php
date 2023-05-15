<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('paginas.paginas');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//MARCAS

Route::delete('/deletemarca/{id}', [App\Http\Controllers\MarcasController::class, 'eliminar'])->name('deletemarca');

Route::get('marcas', [App\Http\Controllers\MarcasController::class, 'getMarcas'])->name('marcas');

Route::get('/listadomarca', function () {
    return view('ListadoMarcas');
})->name('listadomarca');

Route::get('/agregarmarca', function () {
    return view('MarcasAgregar');
})->name('agregarmarca');

// web.php
Route::post('/crearmarca', [App\Http\Controllers\MarcasController::class, 'store'])->name('crearmarca');

