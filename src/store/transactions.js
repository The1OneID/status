import { transactions } from '.'

export async function fetchTransactions() {
  let endpoint = '0.0.0.0:8888/transactions/'
  try {
    const response = await fetch(endpoint, {
      method: 'GET'
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const data = await response.json()
    transactions.set(data)
    console.log(transactions)
    return transactions // Returns the transactions data as a JavaScript object/array
  } catch (error) {
    console.error('Failed to fetch transactions:', error)
  }
}

// fetchTransactions()
