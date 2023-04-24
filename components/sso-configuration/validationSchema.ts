import * as yup from 'yup'
interface fieldsConfigType {
  name: string
  label: string
  required?: boolean
  requiredMsg?: string
  type: 'text' | 'password' | 'number' | 'email'
  inputType: 'textfield'
}

export default function createSchema(fields: fieldsConfigType[]) {
  const schemaObject = {}

  fields.forEach((field) => {
    const fieldSchema = field?.type === 'number' ? yup.number() : yup.string()
    const requiredField = field?.required || false
    const requiredMessage = field?.requiredMsg || `This field is required`
    schemaObject[field.name] = requiredField ? fieldSchema.required(requiredMessage) : fieldSchema
  })

  const schema = yup.object().shape(schemaObject)

  return schema
}
