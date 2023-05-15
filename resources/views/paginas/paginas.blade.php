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
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <h3 class="d-inline-block d-sm-none">Bolsa de bombones</h3>
                            <div class="col-12">
                                <img src="../public/vistas/img/1.PNG" class="product-image" alt="Product Image">
                            </div>
                            <div class="col-12 product-image-thumbs">
                                <div class="product-image-thumb active"><img src="../public/vistas/img/2.PNG"></div>

                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <h3 class="my-3">Bombom Bianchi Miniatura
                                Malvavisco suave y esponjadito. Contiene 50 sobres de 16.8 grms cada uno</h3>
                            <p>

                                <li> Marca : Dulces De La Rosa</li>
                                <li>Tipo de producto : Bombon</li>
                                <li>Presentacion: Paquete </li>
                                <li>Piezas totales que contiene el paquete: 50</li>
                                <li>Peso neto: 840 grms</li>
                            </p>

                            <hr>
                            <h4>Diferentes sabores</h4>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-default text-center active">
                                    <input type="radio" name="color_option" id="color_option_a1" autocomplete="off"
                                        checked="">
                                    Manzana
                                    <br>
                                    <i class="fas fa-circle fa-2x text-green"></i>
                                </label>
                                <label class="btn btn-default text-center">
                                    <input type="radio" name="color_option" id="color_option_a3" autocomplete="off">
                                    Uva
                                    <br>
                                    <i class="fas fa-circle fa-2x text-purple"></i>
                                </label>
                                <label class="btn btn-default text-center">
                                    <input type="radio" name="color_option" id="color_option_a4" autocomplete="off">
                                    Fresa
                                    <br>
                                    <i class="fas fa-circle fa-2x text-red"></i>
                                </label>
                            </div>
                            <div class="bg-gray py-2 px-3 mt-4">
                                <h2 class="mb-0">
                                    $37.60 MXN
                                </h2>
                                <h4 class="mt-0">
                                    <small> Impuesto incluidos Envíos Calculados al pagar. </small>
                                </h4>
                            </div>

                            <div class="mt-4">
                                <div class="btn btn-primary btn-lg btn-flat">
                                    <i class="fas fa-cart-plus fa-lg mr-2"></i>
                                    Agregalo a el carrito
                                </div>

                                <div class="btn btn-default btn-lg btn-flat">
                                    <i class="fas fa-heart fa-lg mr-2"></i>
                                    Agregalo a tu favorito
                                </div>
                            </div>

                            <div class="mt-4 product-share">
                                <a href="#" class="text-gray">
                                    <i class="fab fa-facebook-square fa-2x"></i>
                                </a>
                                <a href="#" class="text-gray">
                                    <i class="fab fa-twitter-square fa-2x"></i>
                                </a>
                                <a href="#" class="text-gray">
                                    <i class="fas fa-envelope-square fa-2x"></i>
                                </a>
                                <a href="#" class="text-gray">
                                    <i class="fas fa-rss-square fa-2x"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div class="row mt-4">
                        <nav class="w-100">
                            <div class="nav nav-tabs" id="product-tab" role="tablist">
                                <a class="nav-item nav-link active" id="product-desc-tab" data-toggle="tab"
                                    href="#product-desc" role="tab" aria-controls="product-desc"
                                    aria-selected="true">Descripción</a>

                            </div>
                        </nav>
                        <div class="tab-content p-3" id="nav-tabContent"> Malvavisco suave y esponjadito. Peso de la bolsa
                            400 gramos.
                        </div>
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->

        </section>
        <!-- /.content -->
    </div>
@endsection
