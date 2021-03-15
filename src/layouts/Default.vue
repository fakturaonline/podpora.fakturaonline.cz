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
          <g-image alt="Example image" src="~/logo-fo.svg" width="200" />
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
                class="mr-sm-2 search-box"
                placeholder=""
              ></b-form-input>
              <b-button size="sm" class="btn btn-light search-box-button">
                <g-image alt="Search" src="~/search.svg" />
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <div class="page-wrapper">
      <slot />
    </div>

    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__logo">
            <a href="https://www.fakturaonline.cz/" target="_blank">
              <g-image src="~/logo.png" />
            </a>
          </div>
          <div class="footer-menu-wrapper">
            <div class="footer-menu">
              <div class="footer-menu__col">
                <div class="footer-menu__item">
                  <strong>Sledujte nás</strong>
                  <div class="footer-menu__item">
                    <a
                      class="footer-menu__link"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://blog.fakturaonline.cz"
                      >Blog</a
                    >
                  </div>
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.facebook.com/FakturaOnline"
                    rel="noreferrer noopener"
                    >Facebook</a
                  >
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.linkedin.com/company/fakturaonline-cz"
                    rel="noreferrer noopener"
                    >LinkedIn</a
                  >
                </div>
              </div>
              <div class="footer-menu__col">
                <div class="footer-menu__item"><strong>Návody</strong></div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/vzory-faktur"
                    >Vzory faktur</a
                  >
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/casto-kladene-dotazy"
                    >Často kladené otázky</a
                  >
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/napoveda-k-tvorbe-pdf-faktury"
                    >Nápověda</a
                  >
                </div>
              </div>
              <div class="footer-menu__col">
                <div class="footer-menu__item">
                  <strong>Důležité dokumenty</strong>
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/smluvni-podminky"
                    >Smluvní podmínky</a
                  >
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/zasady-ochrany-osobnich-udaju"
                    >Ochrana osobních údajů</a
                  >
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/cookie-policy"
                    >Cookie Policy</a
                  >
                </div>
              </div>
              <div class="footer-menu__col">
                <div class="footer-menu__item">
                  <strong>Další informace</strong>
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/cenik"
                    >Ceník</a
                  >
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/fakturace-pro-neziskove-organizace-zadarmo"
                    >Neziskové organizace</a
                  >
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/kontaktujte-nas"
                    >Kontaktujte nás</a
                  >
                </div>
              </div>
              <div class="footer-menu__col">
                <div class="footer-menu__item">
                  <strong>Pro vývojaře</strong>
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://api.fakturaonline.cz"
                    >API</a
                  >
                </div>
                <div class="footer-menu__item">
                  <strong>Migrace faktur z</strong>
                </div>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    href="https://www.fakturaonline.cz/migrator/billapp"
                    >BillApp</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="footer__lang-n-copy" style="display: none">
            <div class="footer__copyright">
              <a class="footer__brand" href="/"
                >© 2021 <strong>FakturaOnline&nbsp;s.r.o.</strong></a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
