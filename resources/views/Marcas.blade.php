@extends('plantilla')
@section('principal')
<div class="content-wrapper" style="min-height: 2646.71px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Productos</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Productos</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="card card-solid">
            <div class="card-body">
                <div>
                    <a href="{{ route('agregarmarca') }}" class="btn btn-primary">Agregar Marca</a>
                </div>
                <table style="margin-left: 50px;">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Borrar</th>
                        <th>Editar</th>
                    </tr>
                    @foreach ($marcas as $marca)
                        <tr>
                            <td>{{ $marca->id_marca }}</td>
                            <td>{{ $marca->nombre_marca }}</td>
                            <td>

                                <form action="{{ route('deletemarca', ['id'=> $marca->id_marca]) }}" method="post">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit">Borrar</button>
                                </form>

                            </td>
                            <td>
                                <button>Editar</button>
                            </td>
                        </tr>
                    @endforeach
                </table>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->

    </section>
    <!-- /.content -->
</div>

@endsection
