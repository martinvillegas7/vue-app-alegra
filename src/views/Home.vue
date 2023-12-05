<template>
    <div class="h-[85vh]">
        <Component1>
            <template #title>
                <h1>Alégrate con la única <br> <span
                        class="bg-gradient-to-r from-custom-28b19d via-purple-500 to-blue-500 text-transparent bg-clip-text">Nómina
                        electrónica</span> <br>
                    que
                    le da superpoderes <br> a tu pyme</h1>
            </template>
            <template #text1>
                <h3>Vive el poder de vender, facturar y contabilizar de <br> manera automática y desde un solo lugar.</h3>
            </template>
            <template #button>
                <DefaultButton class=" bg-custom-2a9795 text-white border-none">Empieza tus 15 días gratis</DefaultButton>
            </template>
            <template #text2>
                <img src="../assets/stars.svg" alt="" class="h-4 lg:ml-14">
                <p>Valoracion de <span class="font-bold">5</span></p>
            </template>
            <template #icon1>
                <img src="../assets/logo-hubspot.webp" alt="" class="h-6 w-full">
            </template>
            <template #icon2>
                <img src="../assets/logo-capterra.webp" alt="" class="h-6 w-full">
            </template>
            <template #icon3>
                <img src="../assets/logo-play-store.webp" alt="" class="h-6 w-full">
            </template>
            <template #imageComponent1>
                <img src="../assets/alegra-COL-Home-hero.webp" alt="" class="hidden lg:block">
                <img src="../assets/alegra-COL-Home-hero-mobile.webp" alt="" class="lg:hidden">
            </template>
        </Component1>
    </div>
    <div
        class="flex flex-col lg:flex lg:flex-row sm:grid p-8 sm:grid-cols-2 w-full items-center content-center justify-items-center lg:justify-evenly bg-white">

        <DefaultCard>
            <template #imageSrc>
                <img src="../assets/caution-icon.webp" alt="">
            </template>
            <template #title>
                <h3>Al día con la obligatoriedad</h3>
            </template>
            <template #text>
                <p>Creas facturas electrónicas en ventas POS mayores a $212.060 y evitas que la DIAN cierre tu negocio. </p>
            </template>
        </DefaultCard>
        <DefaultCard>
            <template #imageSrc>
                <img src="../assets/load-to-cloud-icon.webp" alt="">
            </template>
            <template #title>
                <h3>Sin descargas</h3>
            </template>
            <template #text>
                <p>Accedes desde cualquier dispositivo y lugar. Tu información está protegida en la nube.</p>
            </template>
        </DefaultCard>
        <DefaultCard>
            <template #imageSrc>
                <img src="../assets/headphone.webp" alt="">
            </template>
            <template #title>
                <h3>Con soporte gratis 24/7</h3>
            </template>
            <template #text>
                <p>Recibes ayuda de un equipo especializado por teléfono, email y chat. Disponible 24/7 para ti.</p>
            </template>
        </DefaultCard>
        <DefaultCard>
            <template #imageSrc>
                <img src="../assets/check-with-circle-icon-gen-2.webp" alt="">
            </template>
            <template #title>
                <h3>Válido ante la DIAN</h3>
            </template>
            <template #text>
                <p>Cumples fácil con cada requisito legal y fiscal. Tu sistema se actualiza constantemente. </p>
            </template>
        </DefaultCard>
    </div>

    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et veritatis sunt cumque aut, doloremque, commodi
        quibusdam exercitationem non soluta numquam distinctio nobis consectetur maiores nesciunt labore libero dicta qui!
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et veritatis sunt cumque aut, doloremque, commodi
        quibusdam exercitationem non soluta numquam distinctio nobis consectetur maiores nesciunt labore libero dicta qui!
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et veritatis sunt cumque aut, doloremque, commodi
        quibusdam exercitationem non soluta numquam distinctio nobis consectetur maiores nesciunt labore libero dicta qui!
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et veritatis sunt cumque aut, doloremque, commodi
        quibusdam exercitationem non soluta numquam distinctio nobis consectetur maiores nesciunt labore libero dicta qui!
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et veritatis sunt cumque aut, doloremque, commodi
        quibusdam exercitationem non soluta numquam distinctio nobis consectetur maiores nesciunt labore libero dicta qui!
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et veritatis sunt cumque aut, doloremque, commodi
        quibusdam exercitationem non soluta numquam distinctio nobis consectetur maiores nesciunt labore libero dicta qui!
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et veritatis sunt cumque aut, doloremque, commodi
        quibusdam exercitationem non soluta numquam distinctio nobis consectetur maiores nesciunt labore libero dicta qui!
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et veritatis sunt cumque aut, doloremque, commodi
        quibusdam exercitationem non soluta numquam distinctio nobis consectetur maiores nesciunt labore libero dicta qui!
    </div>

    <div class="goHome">
        <button :onClick="goHome">hola</button>
    </div>

    <div id="whatsapp-button" @click="goHome" class="fixed bottom-4 right-4 cursor-pointer">
        <v-icon name="md-whatsapp" fill="white" class="w-16 p-2 h-auto bg-green-600 rounded-3xl"></v-icon>
    </div>
</template>

<script setup>
import DefaultCard from '../components/DefaultCard.vue';
import Component1 from '../components/Component1.vue';
import DefaultButton from '../components/DefaultButton.vue';

const goHome = () => {
    window.scrollTo(0, 0);
}

</script>