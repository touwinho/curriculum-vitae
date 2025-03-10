import { useActionState } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { action } from './actions'

const Form = () => {
  const [state, formAction] = useActionState(action, undefined)
  console.log(state)

  return (
    <form action={formAction} className="w-full">
      <div className="flex flex-row w-full space-x-12">
        <Input label="Text" className="w-full" name="name" />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
      {state?.message && (
        <p className={state.success ? 'text-green-500' : 'text-red-500'}>
          {state.message}
        </p>
      )}
    </form>
  )
}
export default Form
