Cypress.Commands.add("preserveCookies", () => {
  Cypress.Cookies.preserveOnce('ads', 'remixua', 'remixusid', 'remixsid', 'remixscreen_winzoom',
      '__gfp_64b', 'remixlang', 'tmr_lvidTS', 'remixstid', 'tmr_lvid', 'remixdt', 'remixrefkey', 'remixscreen_dpr',
      'remixscreen_height', 'remixscreen_orient', 'tmr_detect', 'remixrt', 'remixgp', 'remixflash',
      'remixscreen_depth', 'remixscre')
})

Cypress.Commands.add("checkUserSession", () => {
  cy.getCookie(Cypress.env('authCookie').toString()).should('exist');
})
