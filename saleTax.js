var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {

   var salesTaxes = {};
    for (var i = 0; i <salesData.length; i++){
      var sum = 0;
      let salesArray = salesData[i].sales;
      for( var j = 0; j < salesArray.length; j++ ){
        sum += salesArray[j];
      }
      if(!salesTaxes[salesData[i].name]) {
        salesTaxes[salesData[i].name] = {totalSales: sum, totalTaxes: 0};
      } else {
          salesTaxes[salesData[i].name].totalSales += sum;
      }

      var salesProvince = salesData[i].province
      var taxrate = taxRates[salesProvince];
      salesTaxes[salesData[i].name].totalTaxes += sum * taxrate;


  }
  console.log(salesTaxes);
  return salesTaxes;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
//console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/