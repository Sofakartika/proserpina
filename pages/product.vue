<template>
    <div class="container">
        <div class="row">
        <div class="col-md-12">
            <h1>Products</h1>
            <div class="row">
            <div v-for="produk in products" :key="produk.id" class="col-md-4">
                <div class="card mb-4">
                <div class="card-header">
                    <img :src="produk.foto" width="95" class="img-thumb">
                </div>
                <div class="card-body">
                    <h4>{{ produk.nama }}</h4>
                    <h4>Rp{{ produk.harga }}</h4>
                    <a :href="produk.link_eksternal" class="btn btn-success btn-block">Beli di whatsapp</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        products: '',
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
        let {data, error} = await this.$supabase
            .from('tb_produk')
            .select()
        if(data) this.products = data
        if(error) console.error(error)
        }
    }
    }
    </script>