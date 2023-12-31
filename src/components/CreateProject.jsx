import React from 'react'
import Input from './UI/Input';
export default function CreateProject() {
  return (
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>save</button></li>
        </menu>
        <div>
             <Input label='title' type='text'/>
             <Input label='description' textarea/>
             <Input label='due date' type='date'/>
        </div>
    </div>
  )
}
