import React, { lazy, useState } from 'react'
// import './../../app/globals.css'
import './../css/resumeform.css'
const Awards = lazy(() => import('./Awards'))
const Project = lazy(() => import('./Project'))
const WorkExperience = lazy(() => import('./WorkExperience'))
const Education = lazy(() => import('./Education'))
const GeneralFormInfo = lazy(() => import('./GeneralFormInfo'))
const Certifications = lazy(() => import('./Certifications'))
const Volunteering = lazy(() => import('./Volunteering'))

export default function ResumeForm({ open, closeModal }: { open: boolean, closeModal: () => void }) {

  let [toggleListShow, setToggleListShow] = useState(false)
  let [itemClicked, setItemClicked] = useState(null);
  let listOfFormItems = ['General', 'Projects', 'Education', 'Certification', 'Awards', 'Work Experience', 'Volunteering'];

  function declareItem(item: any) {
    setItemClicked(item)
    setToggleListShow(!toggleListShow)
  }



  // alternative form of rendering content
  function renderAppropriate(itemValue: any) {
    const renderValue: any = {
      'Projects': <Project />,
      'Education': <Education />,
      'Certification': <Certifications />,
      'Awards': <Awards />,
      'Work Experience': <WorkExperience />,
      'Volunteering': <Volunteering />,
      'General': <GeneralFormInfo />,
      default: <GeneralFormInfo />

    }
    return renderValue[itemValue]
  }

  function renderAppropriateItem(itemValue: any) {
    switch (itemValue) {
      case 'Projects':
        return <Project />
      case 'Education':
        return <Education />
      case 'Certification':
        return <Certifications />
      case 'Awards':
        return <Awards />
      case 'Work Experience':
        return <WorkExperience />
      case 'Volunteering':
        return <Volunteering />
      default:
        return <GeneralFormInfo />
    }
  }


  return (
    <div className={`form-wrapper-blur fixed inset-0 justify-center items-center w-[100vw] h-[100vh] bg-black/40 ${open ? 'flex' : 'hidden'}`}>
      <div className="absolute bg-white w-[90vw] md:w-[50vw]  gap-5  p-5 form-wrapper h-[90vh] m-auto rounded-2xl inset-0 flex  items-center">
        <div className={`roles w-full md:w-auto md:flex flex-col  justify-start h-full gap-3 ${toggleListShow ? 'hidden' : 'flex '}`}>
          <p className='font-bold'>Profile</p>
          <ul className={`md:flex flex-col flex-1 justify-evenly ${toggleListShow ? 'hidden' : 'flex'}`}>
            {
              listOfFormItems.map((val, i) => <li key={i} className={`hover:bg-gray-200 hover:rounded-xl cursor-pointer px-4 py-2`} onClick={() => declareItem(val)}><span>{val}</span></li>)
            }
          </ul>
        </div>
        <div className={`roles-sheet flex-1 py-2 gap-2 md:flex flex-col h-full ${toggleListShow ? 'flex' : 'hidden'}`}>
          <div className='flex justify-start py-3'>
            <span className='md:hidden cursor-pointer font-bold mr-3' onClick={() => setToggleListShow(!toggleListShow)}>&larr;</span>
            <span className='font-semibold'>{itemClicked}</span>
          </div>
          <div className={`flex-1 overflow-y-scroll [scrollbar-width:none] `}>
            {renderAppropriateItem(itemClicked)}
          </div>
          <div className='flex justify-end pt-3'>
            <button onClick={closeModal} className='py-1 px-3 rounded-xl border'>Done</button>
          </div>
        </div>
      </div>
    </div>
  )
}
