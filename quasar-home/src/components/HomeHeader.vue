<template>
  <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Home Bar
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }} a;laksjdfljasldfjsl;jf</div>
      </q-toolbar>
    </q-header>
</template>
<script>
export default{
    name: 'HomeHeader'
}
</script>