"use client";
import React,{useEffect, useState} from 'react'
import TopPart from '@/components/admin/common/TopPart'
import ReportsFilter from '@/components/admin/reports/ReportsFilter'
import ReportsContent from '@/components/admin/reports/ReportsContent'
import ModalFrame from '@/components/admin/common/ModalFram';
import ReportModal from '@/components/admin/reports/ReportModal'
import axios from '@/axios-folder/axios';
import { reportsRoute } from '@/utils/Endpoint';
import DownloadCard from '@/components/admin/cards/DownloadCard';
import AlterModal from '@/components/admin/modals/AlterModal';


const ReportsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [mode, setMode] = useState('create')
  const [id, setId] = useState(null)

  const handleCreate = ()=>{
    setMode('create')
    setId(null)
    setIsModalOpen(true)
  }

  const handleEdit = (id)=>{
    setMode('update')
    setId(id)
    setIsModalOpen(true)
  }

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(reportsRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.reports)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main className="">
      <header>
        <TopPart title={"Manage Reports"} type={{ name: "button",content: "create new"}}  onClick={handleCreate}  />
      </header>
      <section>
        <ReportsFilter/>
        
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
      {data.map((item, index) => (
        <DownloadCard
          key={index}
          item={item}
          handleEdit={handleEdit}
          tab='report'
          data={data}
          setData={setData}
        />
      ))}
    </div>

      </section>

      {isModalOpen && (
        <ModalFrame>

          <AlterModal 
          close={()=>setIsModalOpen(false)}
          heading={ mode === 'create' ? "Add Report" : "Update Report"}
          tab="report"
          mode={mode}
          id={id}
          getData={getData}
          />

        </ModalFrame>
      )}
      
      </main>
  )
}

export default ReportsPage
