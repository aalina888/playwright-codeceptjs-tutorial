Feature("Zero bank application - e2e tests");

Before(({ I }) => {
  console.log("BEFORE HOOK");
  I.amOnPage("http://zero.webappsecurity.com/index.html");
});

After(({ I }) => {
  console.log("AFTER HOOK");
});

Scenario("Login test - negative", ({ I, LoginPage }) => {
  I.click("#signin_button");
  I.seeElement("#login_form");

  LoginPage.submitLogin("invalid username", "invalid password");
  LoginPage.assertLoginFormIsVisible();

  I.seeElement(".alert-error");
});
