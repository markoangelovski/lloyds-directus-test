<template>
  <div style="padding:10px">
    <label>Custom UI Field</label>
    <input
      type="text"
      v-model="value"
      style="margin-left:10px"
    />
  </div>
</template>

<script setup>
import { useField } from '@directus/extensions-sdk';

const { value } = useField();
</script>
