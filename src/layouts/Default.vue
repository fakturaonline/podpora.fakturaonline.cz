<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="white"
      :sticky="true"
      class="shadow-sm"
    >
      <b-container>
        <b-navbar-brand href="/">
          <g-image alt="Example image" src="~/logo-navbar.jpg" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :href="$url('/aktuality')">Aktuality</b-nav-item>
            <b-nav-item :href="$url('/novinky-z-aplikace')"
              >Novinky z aplikace</b-nav-item
            >
            <b-nav-item :href="$url('/tipy-a-navody')"
              >Tipy a návody</b-nav-item
            >
            <b-nav-item :href="$url('/ostatni')">Ostatní</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <slot />
    <hr />
    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <small>© 2021 FakturaOnline s.r.o. Všechna práva vyhrazena</small>
        </p>
      </div>
    </footer>
  </div>
</template>

<style></style>
