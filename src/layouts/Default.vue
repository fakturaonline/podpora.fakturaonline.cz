<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-container class="bv-example-row">
        <b-navbar-brand href="#">
          <g-image alt="Example image" src="~/logo-navbar.jpg" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
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

    <!-- <b-container class="bv-example-row">
    <header class="header">
      <strong>
        <g-link to="/">
        </g-link>
      </strong>
      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/aktuality">Aktuality</g-link>
        <g-link class="nav__link" to="/novinky-z-aplikace"
          >Novinky z aplikace</g-link
        >
        <g-link class="nav__link" to="/tipy-a-navody">Tipy a návody </g-link>
      </nav>
    </header>
    </b-container> -->
    <slot />
  </div>
</template>

<style></style>
