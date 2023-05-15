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
            <div class="card-body d-flex justify-content-center align-items-center">
                <form action="crearmarca" method="POST">
                    @csrf
                    <div class="form-group">
                        <label for="nombre_marca">Nombre de la marca:</label>
                        <input type="text" class="form-control" id="nombre_marca" name="nombre_marca" placeholder="Nombre de la marca">
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="status" name="status" value="Activo">
                            <label class="form-check-label" for="status">Activo</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar Marca</button>
                </form>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </section>
    <!-- /.content -->
</div>
@endsection

