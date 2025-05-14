'use client'

import React, {useState} from 'react'
import PaginationCard from '@/components/selector/selector'
import { InfoBox } from '@/components/InfoBox/InfoBox'
import { AdministratorTables } from '@/components/AdministratorTables/AdministratorTables'

const validationSystemAdmin = () => {
  const [activePage, setActivePage] = useState(0)

  // Mapeo de índice a variantes (queda pendiente una tabla, por ello, únicamente tenemos dos variantes)
  const variants = ['activeVendors', 'vendorValidation', 'companyApplications']

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <InfoBox variant="sellers" />
        <InfoBox variant="store" />
        <InfoBox variant="requests" />
        <InfoBox variant="logs" />
      </div>

      <div>
        <AdministratorTables variant={variants[activePage] as 'companyApplications' | 'productSales' | 'vendorValidation'} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <PaginationCard onChange={setActivePage} />
      </div>
    </div>
  )
}

export default validationSystemAdmin
