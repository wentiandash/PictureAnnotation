<template>
<h1>都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁</h1>
<h1>都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁</h1>
<h1>都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁</h1>
<h1>都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁</h1>
<h1>都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁</h1>
<h1>都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁</h1>
<h1>都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁</h1>
<h1>都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁 都多余了 爱谁谁</h1>
</template>

<script setup>
import { ref } from 'vue';
import { emitter } from '../../router/modal';
import { Modal } from 'ant-design-vue';

const open = ref(false);

const showModal = () => {
  console.log('showModal method called');
  open.value = true;
};

const handleOk = () => {
  console.log('handleOk method called');
  open.value = false;
};

emitter.on('showModal', showModal);
</script>
