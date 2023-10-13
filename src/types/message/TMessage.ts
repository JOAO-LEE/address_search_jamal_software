export type TSeverity = "success" | "error"

export type TMessage = { 
  severity?: TSeverity
  message?: string
  response?: boolean
  name: string
}