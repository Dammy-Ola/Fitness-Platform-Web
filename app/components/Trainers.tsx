import React from 'react'

import { TrainerItem } from './'

const Trainers = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
      <TrainerItem />
      <TrainerItem />
      <TrainerItem />
      <TrainerItem />
    </div>
  )
}

export default Trainers
