
  Formulae for writing CSS Selector
  Writing CSS based on attribute
   css --> [attribute="value"]

  Regular expression
  css --> [attribute*="value"] 
 
  If id is present
  css  --> tagname#id (or) #id

  If class attribute is present
  css --> tagname.class (or) .class

  **** Trasversing from Parent to child *****

  css --> parenttagname >> childtagname
  Write css for parent and use space on the keyboard then write css for child name
  eg 
  < div class = "card-body" xpath ="1"> == $0 --> card-body is the classname
  <h4 class = "card-title">
  <a href = "#"> iphone X </a> --> (For this DOM, "a" is the tagname, "href" is the attribute, "#" is the value)

  Traversing parent to child, trying to write css selector for iphone X

  Step 1 identify the parent classname and write selector ==> .card-body
  Step 2 tap space on keyboard
  Step 3 identify tagname for child and write selector which is ==> a
  CSS Selector will be ==> .card-body a
  if you have many elements eg iphone X, Samsung, Techno for this selector
  if you want to get the first element eg iphone x, add .first()to the css selector
  eg page.locator(.card-body a).first() or
  page.locator(.card-body a).last() for the last element
  if you want the second element
  page.locator(.card-body a).nth(1)


  If needs to write the locator based on text
  text = ''
  
  Example of this terminologies, see below DOM element below
  <a href = '#'> iphone X </a>
  a is the tagname
  href is the attribute
  # is the value

*** Working with child windows ******

test('Browser Context Playwright test', async ({ browser }) => {
  //Open fresh instance of browser
  const context = await browser.newContext()
  //Create a new page in this browser
  const page = await context.newPage()
  await page.goto('https://google.com')

  //Assign the new page to a promise
   const [newPage] = await Promise.all([
    //Ask playwright to wait before clicking child window
    context.waitForEvent('page'),
    //Open the link leading to the child page
    await page.locator('#test').click(),
  ])


  waitForLoadState("networkIdle") - it is a way to wait for the allTextContents()because it is async
  This method works for only service oriented architectures, events displaying on network header
  await Promise.all([
    //input steps in array
  ])
  The above is for way to wait if architecture is not service oriented, called raced condition
  textContent() - gets text content of an DOM element.
  allTextContents() - get text content of more than one DOM element

  **** Assertions and Methods ****
  toHaveTitle()- confirms if a title is present as expected for a DOM element.
  run single test - npx playwright test tests/"filename".js
isVisible().tobeTruthy()

wait for an particular element to show --> await page.locator('element waiting for')
.waitFor()
await.page.goBack() --> takes user back to a previous tab on the web page
await page.goForward() --> takes user forward to the next tab on the web page
Static dropdown
inspect the drop down selector to be clicked 
eg await page.locator('#Nigeria)
Then using the selectOptions()
ie await page.locator('#Nigeria).selectOptions("Abia")
isChecked() ---> is to confirm if a check box is ticked.
tobeChecked() ---> is to confirm if a checkbox is checked, most times used with console.log
uncheck() ---> is used to uncheck an element
tobeFalsy() --> check that expectation or boolean is false
toHaveAttribute("class", "blinkingtext") --> is to confirm if an element has an attribute
toBeVisible() --> is to confirm if a text is in visble mode.
toBeHidden() --> is to confirm if a text is hidden
page.on('dialog',dialog => dialog.accept()) ---> handling pop-ups/dialog boxes
page.on('dialog',dialog => dialog.dismiss()) ---> cancelling pop-ups/dialog boxes
pagelocator('#mousehover').hover()  --> to mouse hover


** Working with iframes, store iframe in a variable 
const framesPage = page.frameLocator('#test-iframe')
and navigate to element to interact with, in this case element is invisble, hence the need to add visible has an argument
await framesPage.Locator('#theelement :visible').click()

***  API Testing ****
const {test, expect, request} = require('@playwright/test) package needs to be imported

test.beforeAll() function is to ensure a test function is executed before all tests are run

test.beforeEach() function is to ensure a test function is executed before each tests are run

To execute in debug mode ->  npx playwright test tests/Dropdowns.spec.js --debug
await.pause() ---> another way to debug
test.only in test block to choose the test block to be run

Record and playback npx playwright codegen 'weburl'


