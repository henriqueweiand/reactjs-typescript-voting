import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'

import { Wrapper } from './styles'
import { SidebarProps } from './types'
import { Input, Button } from '../'
import { TopicsContext } from '../../context/TopicsContext'

const newTopicFormSchema = z.object({
  description: z.string(),
  title: z.string(),
})

type NewTopicFormInputs = z.infer<typeof newTopicFormSchema>

const Sidebar: React.FC<SidebarProps> = ({ ...rest }: SidebarProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTopicFormInputs>({
    resolver: zodResolver(newTopicFormSchema),
  })

  const createTopics = useContextSelector(TopicsContext, (context) => {
    return context.createTopics
  })

  async function handleCreateTopic({ title, description }: NewTopicFormInputs) {
    createTopics({
      title,
      description,
      createdAt: new Date(),
    })

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
          {...register('title')}
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
