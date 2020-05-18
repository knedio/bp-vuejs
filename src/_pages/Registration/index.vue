<template>
  <div class="flex items-stretch h-screen">
    <div class="flex flex-1 justify-center items-center flex-col">
      <div class="container">
        <div class="header-container">
          Registration
        </div>
        <div class="content-container">
          <RegistrationForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import RegistrationForm from '_components/Modules/Registration/RegistrationForm';
  export default {
    name: 'Registration',
    components: {
      RegistrationForm
    }
  }
</script>
<style lang="css" scoped>
  .container {
    /* margin-top: -100px; */
    width: 40%;
  }
  .header-container {
    font-size: 28px;
    padding: 10px;
    font-weight: bold;
    text-align: center;
  }
  .content-container {
  }
  @media only screen and (max-width: 599px) {
    .container {
      width: 90% !important;
    }
  }
  @media only screen and (max-width: 767px) {
    .container {
      width: 60%;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .container {
      width: 50%;
    }
  }
</style>