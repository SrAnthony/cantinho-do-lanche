export const formatCurrency = value => (
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((value || 0) / 100)
)

export const numberParser = raw_value => (
  parseInt(raw_value.replace(/[^\d]/g, ''))
)
