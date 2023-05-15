@extends('plantilla')
@section('principal')
    @foreach ($marcas as $marca)
        <h1>{{ $marca->nombre_marca }}</h1>
    @endforeach
@endsection
