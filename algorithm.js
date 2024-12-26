
//naviagtion

let currentStep = 0; // Tracks the current step
  const steps = document.querySelectorAll('.step'); // All step elements
  const stepIndicators = document.querySelectorAll('.steps li'); // Sidebar step indicators
  
  // Function to update step visibility with fade transitions
  function updateStepVisibility(nextStep) {
      const currentStepElement = steps[currentStep];
      const nextStepElement = steps[nextStep];
  
      // Fade out current step
      currentStepElement.style.opacity = '0';
      currentStepElement.style.transform = 'translateY(20px)';
      setTimeout(() => {
          // Hide the current step and reset its style
          currentStepElement.style.display = 'none';
  
          // Show the next step
          nextStepElement.style.display = 'block';
          setTimeout(() => {
              nextStepElement.style.opacity = '1';
              nextStepElement.style.transform = 'translateY(0)';
          }, 10); // Slight delay to trigger the fade-in effect
  
          // Update sidebar indicators
          stepIndicators.forEach((indicator, index) => {
              indicator.classList.toggle('current', index === nextStep);
          });
  
          // Update the current step index
          currentStep = nextStep;
      }, 500); // Match the fade-out duration
  }

  // Move to the next step
  function nextStep() {
    if (currentStep < steps.length - 1) {
        updateStepVisibility(currentStep + 1);
    } else {
        
        window.location.href = 'review.html';
        alert('Form submitted successfully!');
    }
}

// Move to the previous step
function prevStep() {
    if (currentStep > 0) {
        updateStepVisibility(currentStep - 1);
    }
}

// Initialize the first step on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstStep = steps[currentStep];
    firstStep.style.display = 'block';
    setTimeout(() => {
        firstStep.style.opacity = '1';
        firstStep.style.transform = 'translateY(0)';
    }, 10); // Trigger the fade-in effect on the first step
});


// get form data
//button event listener
document.getElementById("calculatePrices").addEventListener("click", () => {


// Step 1
let companyName = document.getElementById("company-name").value; // Required
let industry = document.getElementById("industry").value; // Required
let location = document.getElementById("location").value; // Required
let annualRevenue = parseFloat(document.getElementById("annual-revenue").value); // Optional
let employees = parseInt(document.getElementById("employees").value, 10); // Required
let currency = document.getElementById("currency").value; // Required


// Step 2
let productName = document.getElementById("product-name").value; // Required
let productCategory = document.getElementById("category").value; // Required
let productDescription = document.getElementById("description").value; // Required
let cogs = parseFloat(document.getElementById("cogs").value); // Required
let currentSellingPrice = parseFloat(document.getElementById("current-price").value); // Optional
let estimatedMonthlySales = parseInt(document.getElementById("monthly-sales").value, 10); // Optional


// Step 3
let competitorNames = document.getElementById("competitor-names").value; // Optional
let competitorPrices = document.getElementById("competitor-prices").value; // Optional
let competitorRegion = document.getElementById("region").value; // Optional
let competitorStrength = document.getElementById("strength").value; // Optional


// Step 4
let fixedCosts = parseFloat(document.getElementById("fixed-costs").value); // Optional
let variableCosts = parseFloat(document.getElementById("variable-costs").value); // Optional
let marketingBudget = parseFloat(document.getElementById("marketing-budget").value); // Optional
let shippingCosts = parseFloat(document.getElementById("shipping-costs").value); // Optional

// Step 5
let desiredProfitMargin = parseFloat(document.getElementById("profit-margin").value); // Optional
let maximumPrice = parseFloat(document.getElementById("max-price").value); // Optional
let maximumMarkup = parseFloat(document.getElementById("max-markup").value); // Optional
let minimumPrice = parseFloat(document.getElementById("min-price").value); // Optional
let pricingStrategy = document.getElementById("pricing-strategy").value; // Optional

// Step 6
let seasonality = document.getElementById("seasonality").value; // Optional
let perceivedValueFactor = parseFloat(document.getElementById("perceived-value").value); // Optional











/* //get info vars
let productName = parseFloat(document.getElementById("productName").value); //required
let productID = parseFloat(document.getElementById("productID").value); //not required
let cogs = parseFloat(document.getElementById("cogs").value); //required
let currentRetailPrice = parseFloat(document.getElementById("currentRetailPrice").value);//not required
let productCategory = parseFloat(document.getElementById("productCategory").value);//required

// get operating var
let rent = parseFloat(document.getElementById("rent").value);//not required
let utilities = parseFloat(document.getElementById("utilities").value);//not required
let salaries = parseFloat(document.getElementById("salaries").value);//not required
let miscExpenses = parseFloat(document.getElementById("miscExpenses").value);//not required

//business choices
let profitMargin = parseFloat(document.getElementById("profitMargin").value);//not required

//extra per product costs
let extraPPC = parseFloat(document.getElementById("extraPPC").value);//not required

//external automated var */
//let avgCompPricing

  // Validate inputs (basic example)
  

  // Call your algorithm with the inputs
  const prices = calculatePrices({ cogs, fixedCosts, profitMargin, competitorPrice, maxPrice });

  // Display the results
  console.log(`Recommended Prices for ${productName}:`, prices);

});

//calc ideal price
function calculatePricing({
    productName,
    productID,
    cogs,
    currentRetailPrice,
    productCategory,
    rent = 0,
    utilities = 0,
    salaries = 0,
    miscExpenses = 0,
    profitMargin, // If undefined, default to 20% (0.2)
    extraPPC = 0, // Extra Per-Product Costs
    projectedUnitsSold = 100 // Default projection if none provided
  }) {
    // Default profit margin if not provided
    const defaultProfitMargin = 0.2;
  
    // Total fixed costs
    const totalFixedCosts = rent + utilities + salaries + miscExpenses;
  
    // Fixed costs per unit (using projected units sold)
    const fixedCostPerUnit = projectedUnitsSold > 0 ? totalFixedCosts / projectedUnitsSold : 0;
  
    // Breakeven cost calculation
    const breakevenCost = cogs + fixedCostPerUnit + extraPPC;
  
    // Cost with given profit margin (or default)
    const effectiveProfitMargin = profitMargin !== undefined ? profitMargin : defaultProfitMargin;
    const costWithGivenMargin = breakevenCost + (effectiveProfitMargin * breakevenCost);
  
    // Recommended margin based on category
    let recommendedProfitMargin;
    switch (productCategory) {
      case "electronics":
        recommendedProfitMargin = 0.15; // Example: 15% for electronics
        break;
      case "fashion":
        recommendedProfitMargin = 0.25; // Example: 25% for fashion
        break;
      case "groceries":
        recommendedProfitMargin = 0.1; // Example: 10% for groceries
        break;
      default:
        recommendedProfitMargin = defaultProfitMargin; // Default if category is unknown
        break;
    }
    const costWithRecommendedMargin = breakevenCost + (recommendedProfitMargin * breakevenCost);
  
    // Output results
    console.log(`Pricing Details for Product: ${productName || "Unnamed"} (ID: ${productID || "N/A"})`);
    console.log(`Breakeven Cost: $${breakevenCost.toFixed(2)}`);
    console.log(`Cost with Given Profit Margin (${(effectiveProfitMargin * 100).toFixed(1)}%): $${costWithGivenMargin.toFixed(2)}`);
    console.log(`Cost with Recommended Margin for ${productCategory || "general"} (${(recommendedProfitMargin * 100).toFixed(1)}%): $${costWithRecommendedMargin.toFixed(2)}`);
    if (currentRetailPrice !== undefined) {
      console.log(`Current Retail Price: $${currentRetailPrice.toFixed(2)}`);
    }
    return {
      breakevenCost: breakevenCost.toFixed(2),
      costWithGivenMargin: costWithGivenMargin.toFixed(2),
      costWithRecommendedMargin: costWithRecommendedMargin.toFixed(2),
      currentRetailPrice: currentRetailPrice ? currentRetailPrice.toFixed(2) : undefined,
    };
  }



//step things at bottom

function printFormData() {
  
  
  // Re-declare and fetch all necessary variables
  let companyName = document.getElementById("company-name").value; // Required
  let industry = document.getElementById("industry").value; // Required
  let location = document.getElementById("location").value; // Required
  let annualRevenue = parseFloat(document.getElementById("annual-revenue").value); // Optional
  let employees = parseInt(document.getElementById("employees").value, 10); // Required
  let currency = document.getElementById("currency").value; // Required
  let productName = document.getElementById("product-name").value; // Required
  let productCategory = document.getElementById("category").value; // Required
  let productDescription = document.getElementById("description").value; // Required
  let cogs = parseFloat(document.getElementById("cogs").value); // Required
  let currentSellingPrice = parseFloat(document.getElementById("current-price").value); // Optional
  let estimatedMonthlySales = parseInt(document.getElementById("monthly-sales").value, 10); // Optional

  window.location.href = 'review.html';

  const output = `
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Annual Revenue:</strong> ${annualRevenue || "Not provided"}</p>
      <p><strong>Employees:</strong> ${employees}</p>
      <p><strong>Currency:</strong> ${currency}</p>
      <p><strong>Product Name:</strong> ${productName}</p>
      <p><strong>Product Category:</strong> ${productCategory}</p>
      <p><strong>Product Description:</strong> ${productDescription}</p>
      <p><strong>COGS:</strong> ${cogs}</p>
      <p><strong>Current Selling Price:</strong> ${currentSellingPrice || "Not provided"}</p>
      <p><strong>Estimated Monthly Sales:</strong> ${estimatedMonthlySales || "Not provided"}</p>
  `;

  // Display output
  document.getElementById('output').innerHTML = output;
}










function consoleData(){
//console everything

console.log("cogs: " + cogs)

/* 
  // Collecting data from each step
  console.log("Business Information:");
  console.log("Company Name:", document.getElementById("company-name").value);
  console.log("Industry:", document.getElementById("industry").value);
  console.log("Location:", document.getElementById("location").value);
  console.log("Annual Revenue:", document.getElementById("annual-revenue").value);
  console.log("Employees:", document.getElementById("employees").value);
  console.log("Currency:", document.getElementById("currency").value);

  console.log("Product Information:");
  console.log("Product Name:", document.getElementById("product-name").value);
  console.log("Product Category:", document.getElementById("category").value);
  console.log("Product Description:", document.getElementById("description").value);
  console.log("COGS:", document.getElementById("cogs").value);
  console.log("Current Selling Price:", document.getElementById("current-price").value);
  console.log("Estimated Monthly Sales:", document.getElementById("monthly-sales").value);

  console.log("Competitor Information:");
  console.log("Competitor Names:", document.getElementById("competitor-names").value);
  console.log("Competitor Prices:", document.getElementById("competitor-prices").value);
  console.log("Competitor Region:", document.getElementById("region").value);
  console.log("Competitor Strength:", document.getElementById("strength").value);

  console.log("Business Operating Costs:");
  console.log("Fixed Costs:", document.getElementById("fixed-costs").value);
  console.log("Variable Costs:", document.getElementById("variable-costs").value);
  console.log("Marketing Budget:", document.getElementById("marketing-budget").value);
  console.log("Shipping Costs:", document.getElementById("shipping-costs").value);

  console.log("Pricing Constraints:");
  console.log("Desired Profit Margin:", document.getElementById("profit-margin").value);
  console.log("Maximum Price:", document.getElementById("max-price").value);
  console.log("Maximum Markup:", document.getElementById("max-markup").value);
  console.log("Minimum Price:", document.getElementById("min-price").value);
  console.log("Pricing Strategy:", document.getElementById("pricing-strategy").value);

  console.log("Additional Inputs:");
  console.log("Seasonality:", document.getElementById("seasonality").value);
  console.log("Perceived Value Factor:", document.getElementById("perceived-value").value); 
 */
}


// You could attach this function to a button via event listener or use inline in HTML.
/* document.getElementById("reviewDataBtn").addEventListener("click", printFormData); */
