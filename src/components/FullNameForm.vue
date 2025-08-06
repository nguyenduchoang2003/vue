<template>
  <div>
    <p>First name: {{ firstName }}</p>
    <p>Last name: {{ lastName }}</p>

    <input v-model="fullName" placeholder="Enter full name" />

    <p>Full name (computed): {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: 'FullNameForm',
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0] || '';
        this.lastName = names.length > 1 ? names[names.length - 1] : '';
      }
    }
  }
};
</script>
