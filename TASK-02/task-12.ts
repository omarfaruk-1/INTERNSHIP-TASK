
// Task-12 Aggregate Sales Data

const sales = [
  { product: "A", amount: 100 },
  { product: "B", amount: 200 },
  { product: "A", amount: 50 }
]


function aggregateSales(data: { product: string; amount: number }[]) {

  return data.reduce((acc, item) => {

    acc.totalSales += item.amount

    acc.productSales[item.product] =
    (acc.productSales[item.product] || 0) + item.amount

    return acc

  }, {
    totalSales: 0,
    productSales: {} as Record<string, number>
  })

}

console.log(aggregateSales(sales))
