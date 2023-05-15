<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Marca;
use Illuminate\Http\Request;

class MarcasController extends Controller{
    public function getMarcas()
    {
        $marcas= Marca::all();
        return view('Marcas', ['marcas'=> $marcas]);
    }
    public function eliminar($id )
    {
        $marcad= Marca::find($id);
        $marcad->delete();
        return view('paginas.paginas');
    }
    public function store(Request $request)
    {
        $marca = new Marca();
        $marca->nombre_marca = $request->input('nombre_marca');
        $marca->status = $request->has('status') ? 1 : 0;
        $marca->save();

        // Puedes redirigir a una ruta específica o realizar alguna acción adicional aquí
        return view('paginas.paginas');
    }
}

