@extends('layouts.main-dashboard')

@section('css')
    <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            /*tamplate kassia*/
    --color-deep-dark: #2f2f2a;
    --color-gold: #eab308;
    --color-warm-white: #fffef9;
    --color-earth-brown: #8b7e66;
    --color-clay-red: #ef4444;
        }
    </style>
@endsection

@section('content')
<div class="dashboard-container">

    <div class="welcome-section">
        <h1 class="welcome-title" id="greetingText">Memuat...</h1>
        <p class="welcome-subtitle">Kelola toko dan transaksi Anda dengan lebih rapi dan efisien.</p>
    </div>

    <div class="account-info-card">
        <div class="card-heading">
            Informasi Akun
            <i class="fa-solid fa-ellipsis text-gray-400"></i>
        </div>

        <div class="info-grid">
            <div class="info-box">
                <div class="info-label">
                    <i class="fa-regular fa-calendar"></i> Subscription End
                </div>
                <div class="info-value">Lifetime Access</div>
            </div>

            <div class="info-box">
                <div class="info-label">
                    <i class="fa-regular fa-user"></i> Role / Jabatan
                </div>
                <div class="info-value" id="userRoleDisplay">-</div>
            </div>
        </div>
    </div>

    <div class="modules-grid">

        <a href="#" class="module-card">
            <div class="module-icon icon-blue">
                <i class="fa-solid fa-users"></i>
            </div>
            <div class="module-text">
                <div class="module-title">Users</div>
                <div class="module-desc">Kelola pengguna sistem</div>
            </div>
        </a>

        <a href="/dashboard/products" class="module-card">
            <div class="module-icon icon-green">
                <i class="fa-solid fa-box-open"></i>
            </div>
            <div class="module-text">
                <div class="module-title">Products</div>
                <div class="module-desc">Manajemen produk & harga</div>
            </div>
        </a>

        <a href="/dashboard/inventories" class="module-card">
            <div class="module-icon icon-orange">
                <i class="fa-solid fa-warehouse"></i>
            </div>
            <div class="module-text">
                <div class="module-title">Inventory</div>
                <div class="module-desc">Stok & pergerakan barang</div>
            </div>
        </a>

        <a href="#" class="module-card">
            <div class="module-icon icon-purple">
                <i class="fa-solid fa-receipt"></i>
            </div>
            <div class="module-text">
                <div class="module-title">Transactions</div>
                <div class="module-desc">Riwayat penjualan</div>
            </div>
        </a>

        <a href="/dashboard/kasir-cafe" class="module-card">
            <div class="module-icon icon-teal">
                <i class="fa-solid fa-mug-hot"></i>
            </div>
            <div class="module-text">
                <div class="module-title">Kasir Cafe</div>
                <div class="module-desc">Mode kasir FnB</div>
            </div>
        </a>

        <a href="/dashboard/kasir" class="module-card">
            <div class="module-icon icon-red">
                <i class="fa-solid fa-cash-register"></i>
            </div>
            <div class="module-text">
                <div class="module-title">Kasir Retail</div>
                <div class="module-desc">Mode kasir POS Cepat</div>
            </div>
        </a>

    </div>

</div>
@endsection

@section('js')
    <script src="{{ asset('js/dashboard/home.js') }}"></script>
    <script src="{{ asset('js/dashboard/main.js') }}"></script>
@endsection