document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded and parsed");
  const outputArea = document.getElementById("thosewhoknow");

  // Build an HTML string with each item from localStorage
  const dataHtml = `
      <p>Company Name: ${localStorage.getItem("companyName") || 'Not set'}</p>
      <p>Industry: ${localStorage.getItem("industry") || 'Not set'}</p>
      <p>Location: ${localStorage.getItem("location") || 'Not set'}</p>
      <p>Annual Revenue: ${localStorage.getItem("annualRevenue") || 'Not set'}</p>
      <p>Employees: ${localStorage.getItem("employees") || 'Not set'}</p>
      <p>Currency: ${localStorage.getItem("currency") || 'Not set'}</p>
      <p>Product Name: ${localStorage.getItem("productName") || 'Not set'}</p>
      <p>Product Category: ${localStorage.getItem("productCategory") || 'Not set'}</p>
      <p>Product Description: ${localStorage.getItem("productDescription") || 'Not set'}</p>
      <p>COGS: ${localStorage.getItem("cogs") || 'Not set'}</p>
      <p>Current Selling Price: ${localStorage.getItem("currentSellingPrice") || 'Not set'}</p>
      <p>Estimated Monthly Sales: ${localStorage.getItem("estimatedMonthlySales") || 'Not set'}</p>
      <p>Competitor Names: ${localStorage.getItem("competitorNames") || 'Not set'}</p>
      <p>Competitor Prices: ${localStorage.getItem("competitorPrices") || 'Not set'}</p>
      <p>Competitor Region: ${localStorage.getItem("competitorRegion") || 'Not set'}</p>
      <p>Competitor Strength: ${localStorage.getItem("competitorStrength") || 'Not set'}</p>
      <p>Fixed Costs: ${localStorage.getItem("fixedCosts") || 'Not set'}</p>
      <p>Variable Costs: ${localStorage.getItem("variableCosts") || 'Not set'}</p>
      <p>Marketing Budget: ${localStorage.getItem("marketingBudget") || 'Not set'}</p>
      <p>Shipping Costs: ${localStorage.getItem("shippingCosts") || 'Not set'}</p>
      <p>Desired Profit Margin: ${localStorage.getItem("desiredProfitMargin") || 'Not set'}</p>
      <p>Maximum Price: ${localStorage.getItem("maximumPrice") || 'Not set'}</p>
      <p>Maximum Markup: ${localStorage.getItem("maximumMarkup") || 'Not set'}</p>
      <p>Minimum Price: ${localStorage.getItem("minimumPrice") || 'Not set'}</p>
      <p>Pricing Strategy: ${localStorage.getItem("pricingStrategy") || 'Not set'}</p>
      <p>Seasonality: ${localStorage.getItem("seasonality") || 'Not set'}</p>
      <p>Perceived Value Factor: ${localStorage.getItem("perceivedValueFactor") || 'Not set'}</p>
  `;

  // Update the innerHTML of the display div to show the data
  outputArea.innerHTML = dataHtml;
});
