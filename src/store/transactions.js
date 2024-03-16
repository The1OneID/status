import { transactions } from '.'

const API_ENDPOINT = import.meta.env.VITE_TX_API_HOST.concat('/transactions/')

export async function fetchTransactions() {
  try {
    const response = await fetch(API_ENDPOINT, {
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
