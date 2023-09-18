///<reference types ="Cypress"/>

describe("Cashify Automation Task", () => {
    it('Sell Phones Automation Script', () => {
      // uncaught exception handeled
      Cypress.on('uncaught:exception', () => {
        return false
      })
      cy.clearCookies()
      cy.visit('https://www.cashify.in/')
     
      // Sell phone drop down opened
      cy.get('[fill="currentColor"]').eq(12).trigger('mouseover')
      cy.get('#navigation_nodes').children().eq(1).find('.hidden').then((el) => {
        el.removeClass('sm:hidden')
        el.removeClass('hidden')
      }).then(() => {
        cy.get("[class='subtitle3 w-full text-primary-text hover:bg-surface-light hover:font-medium hover:text-link-text py-2.5 px-4']").eq(1).click({ force: true })
        // Clicking on the Xiaomi
        cy.get('.mt-3').eq(2).children().find('span').contains('Xiaomi').click({ force: true })
        cy.wait(4000)
      })
  
      // Model selected
      cy.get('a.w-full.h-full> div> span>div.caption').each((el, i) => {
        if (el.text() == "Xiaomi Redmi Note 6 Pro") {
          cy.wrap(el).eq(i).click()
        }
      })
  
      cy.wait(4000)
      cy.get("ul.flex.flex-row.flex-wrap > li").last().click()
      cy.wait(5000)
  
      cy.get('.bg-primary-bg > .justify-center > .flex').parent().click({ force: true });
      cy.wait(2000)
      cy.window().then((win) => {
        win.location = "https://www.cashify.in/sell/calculator/page?pid=17814&plid=20&pn=Xiaomi+Redmi+Note+6+Pro+%286+GB%2F64+GB%29&pin=https%3A%2F%2Fs3n.cashify.in%2Fcashify%2Fproduct%2Fimg%2Fxhdpi%2Fcsh-lsl54uvo-f2k5.png&pm=csh&bbmp=NDAwMA%3D%3D&pageId=0"
      })
      cy.wait(10000)
      cy.get("body").then(body => {
        if (body.find("div.flex.flex-col.p-4").length > 0) {
          cy.contains("button", "Got It").click({ force: true });
        };
      });
      cy.get('[type="radio"]').each((radioButton, ind) => {
        if (ind == 0 || ind == 2 || ind == 5) cy.wrap(radioButton).check()
      });
  
  
      // Cliking on the continue button
      cy.contains("div", "Continue").click();
      //Select screen/body defects 
      cy.get("div.flex.flex-row.flex-wrap.w-full section").each((ele, ind) => {
        if (ind > 2) cy.wrap(ele).click();
      });
      cy.contains("div", "Continue").click();
      //  Dead Pixels/Spots on Screen & Visible Lines on Screen
      cy.get("div.flex.flex-row.flex-wrap.w-full section").each((ele, ind) => {
        if (ind > 1){cy.wrap(ele).click()}
      });
      cy.contains("div", "Continue").click();
      // Tell us more about your device's body defects
      cy.get("div.flex.flex-row.flex-wrap.w-full section").each((ele, ind) => {
        if (ind > 1 || ind == (ele.length - 1)){ cy.wrap(ele).click()}
      });
      cy.contains("div", "Continue").click();
      // Functional or Physical Problems
      cy.get("div.flex.flex-row.flex-wrap.w-full section").each((ele, ind) => {
        if (ind > 1){cy.wrap(ele).click()}
      });
      cy.contains("div", "Continue").click();
      cy.wait(4000)
      // Do you have the following
      cy.get("div.flex.flex-row.flex-wrap.w-full section").eq(1).click({ force: true })
      cy.contains("div", "Continue").click();
      //Validating login/SignIn popup
      cy.get("section.flex.flex-col").should("be.visible").and("exist");
    });
  });
  