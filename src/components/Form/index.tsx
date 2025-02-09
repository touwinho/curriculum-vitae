import Input from '@/components/Input'

const Form = () => {
  return (
    <form className="w-full">
      <div className="flex flex-row w-full space-x-12">
        <Input label="Text" className="w-full" />
        <Input label="Text" className="w-full" />
      </div>
    </form>
  )
}
export default Form
