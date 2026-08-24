// Normaliza texto pra busca: minusculas e sem acento, pra "educacao" achar
// "Educação" e vice-versa.
export function normalizeSearch(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

export function matchesSearch(query: string, ...fields: (string | string[])[]): boolean {
  const q = normalizeSearch(query.trim())
  if (!q) return true
  const haystack = normalizeSearch(fields.flat().join(' '))
  return haystack.includes(q)
}
