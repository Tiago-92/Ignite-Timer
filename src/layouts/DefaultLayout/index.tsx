import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />{' '}
      {/* Aplicar Header em toda a apliação, não precisa importar o componente em todas as páginas */}
      <Outlet />
    </LayoutContainer>
  )
}
