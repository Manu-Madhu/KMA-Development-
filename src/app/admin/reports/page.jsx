import React from 'react'
import TopPart from '@/components/admin/common/TopPart'
import ReportsFilter from '@/components/admin/reports/ReportsFilter'
import ReportsContent from '@/components/admin/reports/ReportsContent'


const ReportsPage = () => {
  return (
    <main className="">
      <header>
        <TopPart title={"Manage Reports"} type={{ name: "button",content: "create new" }} />
      </header>
      <section>
        <ReportsFilter/>
        <ReportsContent/>
      </section>
      
      </main>
  )
}

export default ReportsPage
