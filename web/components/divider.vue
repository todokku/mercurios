<template>
    <v-row>
        <v-col cols="12">
            <slot></slot>
        </v-col>
    </v-row>
</template>

<script lang="js">
import Vue from "vue";
export default Vue.extend({
    name: "v-div",
});
</script>