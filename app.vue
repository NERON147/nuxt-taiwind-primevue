
<template>
  <div class="card flex items-center justify-center">
      <Card style="width: 25em">
          <template #header>
              <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
          </template>
          <template #title> Advanced Card </template>
          <template #subtitle> Card subtitle </template>
          <template #content>
              <p class="m-0 p-ripple" v-ripple>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                  quas!
              </p>
          </template>
          <template #footer>
              <Button icon="pi pi-check" label="Save" />
              <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
          </template>
      </Card>
  </div>
</template>

<script setup>
</script>
