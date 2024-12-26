// Step 1
/* let companyName = document.getElementById('company-name'); */
let industry = document.getElementById("industry"); // Required
let locationInput = document.getElementById("location1"); // Required
let annualRevenue = document.getElementById("annual-revenue"); // Optional
let employees = document.getElementById("employees"); // Required
let currency = document.getElementById("currency"); // Required

// Step 2
let productName = document.getElementById("product-name"); // Required
let productCategory = document.getElementById("category"); // Required
let productDescription = document.getElementById("description"); // Required
let cogs = document.getElementById("cogs"); // Required
let currentSellingPrice = document.getElementById("current-price"); // Optional
let estimatedMonthlySales = document.getElementById("monthly-sales"); // Optional

// Step 3
let competitorNames = document.getElementById("competitor-names"); // Optional
let competitorPrices = document.getElementById("competitor-prices"); // Optional
let competitorRegion = document.getElementById("region"); // Optional
let competitorStrength = document.getElementById("strength"); // Optional

// Step 4
let fixedCosts = document.getElementById("fixed-costs"); // Optional
let variableCosts = document.getElementById("variable-costs"); // Optional
let marketingBudget = document.getElementById("marketing-budget"); // Optional
let shippingCosts = document.getElementById("shipping-costs"); // Optional

// Step 5
let desiredProfitMargin = document.getElementById("profit-margin"); // Optional
let maximumPrice = document.getElementById("max-price"); // Optional
let maximumMarkup = document.getElementById("max-markup"); // Optional
let minimumPrice = document.getElementById("min-price"); // Optional
let pricingStrategy = document.getElementById("pricing-strategy"); // Optional

// Step 6
let seasonality = document.getElementById("seasonality"); // Optional
let perceivedValueFactor = document.getElementById("perceived-value"); // Optional


function getData(){
    
        // Step 1: Business Information
        /* console.log("Company Name: " + companyName.value); */
        console.log("Industry: " + industry.value);
        console.log("Location: " + locationInput.value);
        console.log("Annual Revenue: " + annualRevenue.value);
        console.log("Employees: " + employees.value);
        console.log("Currency: " + currency.value);
    
        // Step 2: Product Information
        console.log("Product Name: " + productName.value);
        console.log("Product Category: " + productCategory.value);
        console.log("Product Description: " + productDescription.value);
        console.log("COGS: " + cogs.value);
        console.log("Current Selling Price: " + currentSellingPrice.value);
        console.log("Estimated Monthly Sales: " + estimatedMonthlySales.value);
    
        // Step 3: Competitor Information
        console.log("Competitor Names: " + competitorNames.value);
        console.log("Competitor Prices: " + competitorPrices.value);
        console.log("Competitor Region: " + competitorRegion.value);
        console.log("Competitor Strength: " + competitorStrength.value);
    
        // Step 4: Business Operating Costs
        console.log("Fixed Costs: " + fixedCosts.value);
        console.log("Variable Costs: " + variableCosts.value);
        console.log("Marketing Budget: " + marketingBudget.value);
        console.log("Shipping Costs: " + shippingCosts.value);
    
        // Step 5: Pricing Constraints
        console.log("Desired Profit Margin: " + desiredProfitMargin.value);
        console.log("Maximum Price: " + maximumPrice.value);
        console.log("Maximum Markup: " + maximumMarkup.value);
        console.log("Minimum Price: " + minimumPrice.value);
        console.log("Pricing Strategy: " + pricingStrategy.value);
    
        // Step 6: Additional Inputs
        console.log("Seasonality: " + seasonality.value);
        console.log("Perceived Value Factor: " + perceivedValueFactor.value);

        window.location.href = 'review.html';
        
}


function saveData() {
  
    // Step 1: Business Information
    const companyName = document.getElementById("company-name").value; // Ensure you have an input with id="company-name"
    const industry = document.getElementById("industry").value;
    const locationInput = document.getElementById("location1").value;  // Ensure ID is correctly referenced
    const annualRevenue = document.getElementById("annual-revenue").value;
    const employees = document.getElementById("employees").value;
    const currency = document.getElementById("currency").value;
    localStorage.setItem("companyName", companyName); // Save the data to localStorage
    localStorage.setItem("industry", industry);
    localStorage.setItem("location", locationInput);
    localStorage.setItem("annualRevenue", annualRevenue);
    localStorage.setItem("employees", employees);
    localStorage.setItem("currency", currency);

    // Step 2: Product Information
    const productName = document.getElementById("product-name").value;
    const productCategory = document.getElementById("category").value;
    const productDescription = document.getElementById("description").value;
    const cogs = document.getElementById("cogs").value;
    const currentSellingPrice = document.getElementById("current-price").value;
    const estimatedMonthlySales = document.getElementById("monthly-sales").value;
    localStorage.setItem("productName", productName);
    localStorage.setItem("productCategory", productCategory);
    localStorage.setItem("productDescription", productDescription);
    localStorage.setItem("cogs", cogs);
    localStorage.setItem("currentSellingPrice", currentSellingPrice);
    localStorage.setItem("estimatedMonthlySales", estimatedMonthlySales);

    // Step 3: Competitor Information
    const competitorNames = document.getElementById("competitor-names").value;
    const competitorPrices = document.getElementById("competitor-prices").value;
    const competitorRegion = document.getElementById("region").value;
    const competitorStrength = document.getElementById("strength").value;
    localStorage.setItem("competitorNames", competitorNames);
    localStorage.setItem("competitorPrices", competitorPrices);
    localStorage.setItem("competitorRegion", competitorRegion);
    localStorage.setItem("competitorStrength", competitorStrength);

    // Step 4: Business Operating Costs
    const fixedCosts = document.getElementById("fixed-costs").value;
    const variableCosts = document.getElementById("variable-costs").value;
    const marketingBudget = document.getElementById("marketing-budget").value;
    const shippingCosts = document.getElementById("shipping-costs").value;
    localStorage.setItem("fixedCosts", fixedCosts);
    localStorage.setItem("variableCosts", variableCosts);
    localStorage.setItem("marketingBudget", marketingBudget);
    localStorage.setItem("shippingCosts", shippingCosts);

    // Step 5: Pricing Constraints
    const desiredProfitMargin = document.getElementById("profit-margin").value;
    const maximumPrice = document.getElementById("max-price").value;
    const maximumMarkup = document.getElementById("max-markup").value;
    const minimumPrice = document.getElementById("min-price").value;
    const pricingStrategy = document.getElementById("pricing-strategy").value;
    localStorage.setItem("desiredProfitMargin", desiredProfitMargin);
    localStorage.setItem("maximumPrice", maximumPrice);
    localStorage.setItem("maximumMarkup", maximumMarkup);
    localStorage.setItem("minimumPrice", minimumPrice);
    localStorage.setItem("pricingStrategy", pricingStrategy);

    // Step 6: Additional Inputs
    const seasonality = document.getElementById("seasonality").value;
    const perceivedValueFactor = document.getElementById("perceived-value").value;
    localStorage.setItem("seasonality", seasonality);
    localStorage.setItem("perceivedValueFactor", perceivedValueFactor);

    // Navigate to the new page after saving data
    window.location.href = 'review.html';
}
