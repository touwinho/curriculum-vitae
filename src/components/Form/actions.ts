export const action = async (prevState: any, formData: FormData) => {
  const name = formData.get('name') as string

  if (name.length < 3) {
    return {
      success: false,
      message: 'Name is too short',
    }
  }

  return {
    success: true,
    message: 'Success',
  }
}
