import {test, expect} from '@playwright/test'

//Playwright with Javascript | Grouping Tests - Describe Block | Part 28
// Youtube

// beforeAll and AfterAll will executed only once before and after all test run
test.beforeAll(async()=>{

      console.log("this is beforeAll hook........")
})

test.afterAll (async()=>{

    console.log("this is AterAll hook........")
})

// beforeEach and AfterEach will executed multiple time before and after each test

test.beforeEach(async()=>{

    console.log("this is beforeEach hook........")
})

test.afterEach(async()=>{

    console.log("this is AfterEach hook........")
})


// With test.describe we will Make Group of Our Test Cases

// test.describe.skip  <-  it will skip this group from execution
test.describe.skip( 'Smoke Test Group 1', ()=> {
test("Test 1", async({page})=>{
 
    console.log('This is my test 1......')
})  

test("Test 2", async({page})=>{
 
    console.log('This is my test 2......')
})  

})


// test.describe.only <- it will only executed this group
test.describe.only('Regression Test Group 2', ()=>{ 
test("Test 3", async({page})=>{
 
    console.log('This is my test 4......')
})  

test("Test 4", async({page})=>{
 
    console.log('This is my test 5......')
})  
})

