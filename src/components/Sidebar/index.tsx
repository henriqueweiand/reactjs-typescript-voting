import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Wrapper } from './styles'
import { SidebarProps } from './types'
import Input from '../Input'
import Button from '../Button'

const newTransactionFormSchema = z.object({
  description: z.string(),
  topic: z.string(),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

const Sidebar: React.FC<SidebarProps> = ({ ...rest }: SidebarProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateTopic(data: NewTransactionFormInputs) {
    console.log(data)
    reset()
  }

  return (
    <Wrapper {...rest}>
      <h1>new topic</h1>

      <form onSubmit={handleSubmit(handleCreateTopic)}>
        <Input
          type="text"
          placeholder="Topic"
          required
          {...register('topic')}
        />

        <Input
          type="text"
          placeholder="Description"
          required
          {...register('description')}
        />

        <Button disabled={isSubmitting} type="submit">
          Send
        </Button>
      </form>
    </Wrapper>
  )
}

export default Sidebar
